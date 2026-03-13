import re

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    parser_classes,
    permission_classes,
)
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


def _validate_enrollment(data):
    errors = {}

    fullname = (data.get("fullname") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    course = (data.get("course") or "").strip()
    message = (data.get("message") or "").strip()
    resume = data.get("resume")

    if not fullname:
        errors["fullname"] = "Full name is required"
    elif len(fullname) > 50:
        errors["fullname"] = "Full name must be under 50 characters"
    elif not re.match(r"^[A-Za-z\s]+$", fullname):
        errors["fullname"] = "Enter a valid name"

    if not email:
        errors["email"] = "Email is required"
    elif not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email):
        errors["email"] = "Enter a valid email"

    if not phone:
        errors["phone"] = "Phone number is required"
    elif not re.match(r"^\d{10}$", phone):
        errors["phone"] = "Phone must be 10 digits"

    if not course:
        errors["course"] = "Please select a course"

    return {
        "errors": errors,
        "payload": {
            "fullname": fullname,
            "email": email,
            "phone": phone,
            "course": course,
            "message": message,
            "resume": resume,
        },
    }


@api_view(["GET", "POST"])
@permission_classes([AllowAny])
@authentication_classes([])
@parser_classes([JSONParser, FormParser, MultiPartParser])
def enrollment_create(request):
    if request.method == "GET":
        return Response(
            {
                "message": "Enrollment endpoint is ready",
                "expects": {
                    "fullname": "string",
                    "email": "string",
                    "phone": "string (10 digits)",
                    "course": "string",
                    "message": "string (optional)",
                    "resume": "file (optional)",
                },
            },
            status=status.HTTP_200_OK,
        )

    result = _validate_enrollment(request.data)
    errors = result["errors"]
    payload = result["payload"]

    if errors:
        return Response(
            {"message": "Validation failed", "errors": errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if (
        settings.EMAIL_BACKEND.endswith("smtp.EmailBackend")
        and (not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD)
    ):
        return Response(
            {"message": "Email service not configured"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    subject = "New Enrollment - EDU PRAVAHAA"
    body = (
        "New enrollment received:\n\n"
        f"Full Name: {payload['fullname']}\n"
        f"Email: {payload['email']}\n"
        f"Phone: {payload['phone']}\n"
        f"Course: {payload['course']}\n"
        f"Message: {payload['message'] or 'N/A'}\n"
    )

    email_message = EmailMessage(
        subject=subject,
        body=body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.ENROLLMENT_NOTIFY_EMAIL],
        reply_to=[payload["email"]],
    )

    resume = payload["resume"]
    if resume:
        email_message.attach(resume.name, resume.read(), resume.content_type)

    try:
        sent_count = email_message.send(fail_silently=False)
    except Exception as exc:
        return Response(
            {"message": "Email send failed", "detail": str(exc)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    if sent_count < 1:
        return Response(
            {"message": "Email not accepted by server"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    confirmation_subject = "Enrollment Received - EDU PRAVAHAA"
    confirmation_body = (
        "Thank you for your enrollment.\n\n"
        f"Name: {payload['fullname']}\n"
        f"Course: {payload['course']}\n"
        "We will contact you soon.\n"
    )
    confirmation_email = EmailMessage(
        subject=confirmation_subject,
        body=confirmation_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[payload["email"]],
        reply_to=[settings.ENROLLMENT_NOTIFY_EMAIL],
    )
    try:
        confirmation_sent = confirmation_email.send(fail_silently=False)
    except Exception as exc:
        return Response(
            {
                "message": "Confirmation email send failed",
                "detail": str(exc),
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    if confirmation_sent < 1:
        return Response(
            {"message": "Confirmation email not accepted by server"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    return Response(
        {"message": "Enrollment submitted successfully"},
        status=status.HTTP_200_OK,
    )
