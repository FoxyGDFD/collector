from django.db import models


# Create your models here.
class Client(models.Model):
    first_name = models.CharField(max_length=250)
    second_name = models.CharField(max_length=250)
    third_name = models.CharField(max_length=250)
    debt = models.CharField(max_length=250)
    appearance_debt = models.DateField()

    class Meta:
        verbose_name = 'Debtor'
        verbose_name_plural = 'Debtors'
