from django.contrib import admin
from .models import *

# Register your models here.
varmodels = [User]
for model in varmodels:
    admin.site.register(model)

