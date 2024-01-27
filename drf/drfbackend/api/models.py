from django.db import models


class users(models.Model):
    username = models.TextField(max_length=120, blank=False, null=False)
    email = models.CharField(max_length=120, blank=False)
    password = models.DecimalField(max_digits=10, decimal_places=4)

    @property
    def getId(self):
        return self.id