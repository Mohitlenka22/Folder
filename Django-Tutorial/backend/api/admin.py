from django.contrib import admin
from .models import Person, Details, Product

# Register your models here.
admin.site.register(Person)
admin.site.register(Details)
admin.site.register(Product)