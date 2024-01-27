from django.db import models

# Create your models here.

# for Foreign key concept


class Details(models.Model):
    person_id = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.person_id


class Person(models.Model):
    person = models.ForeignKey(
        Details, null=True, blank=True, on_delete=models.CASCADE, related_name='person')
    name = models.CharField(max_length=122, unique=True)
    age = models.IntegerField()
    email = models.EmailField(blank=True, null=True)

    @property
    def isVote(self):
        if self.age > 18:
            return 1
        return 0

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    id = models.IntegerField(null=False, blank=True, primary_key=True)
    product_name = models.CharField(max_length=100)
    price = models.IntegerField()


class Voter(models.Model):
    id = models.IntegerField(primary_key=True)
    voter_name = models.CharField(max_length=100)
    voter_age = models.IntegerField()
