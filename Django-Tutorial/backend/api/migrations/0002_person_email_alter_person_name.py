# Generated by Django 4.2 on 2023-04-25 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='email',
            field=models.EmailField(default=None, max_length=254),
        ),
        migrations.AlterField(
            model_name='person',
            name='name',
            field=models.CharField(max_length=122, unique=True),
        ),
    ]