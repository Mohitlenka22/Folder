# Generated by Django 4.2 on 2023-04-30 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_details_person_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='details',
            name='person_id',
            field=models.CharField(max_length=10),
        ),
    ]