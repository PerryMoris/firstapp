from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=225, null=True, blank=False)
    details = models.TextField(null=True, blank=True)
    startdate = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=225, null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {str(self.startdate)}"