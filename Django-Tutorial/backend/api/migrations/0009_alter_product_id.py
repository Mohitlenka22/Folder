# Generated by Django 4.2 on 2023-04-30 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.IntegerField(blank=True, primary_key=True, serialize=False),
        ),
    ]