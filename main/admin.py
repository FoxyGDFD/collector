from django.contrib import admin
from .models import *

# Register your models here.


class AdninClients(admin.ModelAdmin):
    list_display = ('adress',)
    list_display_links = ('adress',)
    search_fields = ('adress',)

admin.site.register(Clients, AdninClients)