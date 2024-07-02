from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    name = models.CharField(max_length=225, null=True, blank=False)
    details = models.TextField(null=True, blank=True)
    startdate = models.DateField(null=True, blank=True)
    enddate = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=225, null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({str(self.startdate)} - {str(self.enddate)})"

class Stakeholders(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=225, null=True, blank=False)
    email = models.CharField(max_length=225, null=True, blank=True)
    position = models.CharField(max_length=225, null=True, blank=True)
    activity = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} for {str(self.project.name)}"

class Taskactivities(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.TextField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    challenges = models.TextField(null=True, blank=True)

    def __str__ (self):
        return f"{self.user.get_full_name()}, on {self.project.name}"