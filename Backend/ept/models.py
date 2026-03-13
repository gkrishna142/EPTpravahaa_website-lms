from django.db import models


class Enrollment(models.Model):
    fullname = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=120)
    message = models.TextField(blank=True)
    resume = models.FileField(upload_to="resumes/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fullname} - {self.course}"
