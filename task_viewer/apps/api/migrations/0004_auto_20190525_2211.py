# Generated by Django 2.2.1 on 2019-05-25 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190515_0117'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='tasks',
            field=models.ManyToManyField(blank=True, related_name='users', to='api.TaskModel'),
        ),
    ]
