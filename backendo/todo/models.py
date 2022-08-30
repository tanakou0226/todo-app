from django.db import models


class Todo(models.Model):
    todo = models.CharField('Todo', max_length=255, blank=False)
    contents = models.CharField('content', max_length=255)

    def __str__(self):
        return self.todo
