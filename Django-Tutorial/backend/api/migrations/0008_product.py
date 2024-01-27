# Generated by Django 4.2 on 2023-04-30 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_details_person_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
