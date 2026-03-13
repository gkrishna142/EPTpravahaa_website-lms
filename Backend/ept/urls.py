from django.urls import path

from . import views


urlpatterns = [
    path("enrollments/", views.enrollment_create, name="enrollment-create"),
]
