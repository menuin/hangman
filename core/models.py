from django.db import models
import json

# Create your models here.

class Player(models.Model):
    name=models.CharField(max_length=10)
    score=models.IntegerField(default=0)
    wrong=models.IntegerField(default=0)
    words=models.TextField(null=True)

    

    currentWord=models.CharField(default="", max_length=10)
    correct=False
    

    def __str__(self):
        return self.name


