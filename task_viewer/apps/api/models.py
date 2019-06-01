from django.db import models
from django.contrib.auth.models import User
import datetime

class TaskModel(models.Model):
    title = models.CharField(max_length=50, blank=False, unique=True)
    description = models.TextField(blank=True, null=True) 

    creation_date = models.DateTimeField(default=datetime.datetime.today)
    start_date = models.DateTimeField(default=datetime.datetime.today)
    end_date = models.DateTimeField()
    due_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return self.title

class UserModel(User):
    user = models.OneToOneField(User, on_delete=models.CASCADE, parent_link=True)
    tasks = models.ManyToManyField(TaskModel, blank=True, related_name='users')

    def __str__(self):
        return self.username
