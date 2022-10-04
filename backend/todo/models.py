from django.db import models
import uuid


class Todo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    todo = models.CharField('Todo', max_length=255, blank=False, null=False)
    contents = models.TextField('content', max_length=255, blank=False, null=False)
    created_data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.todo
