from django.db import models


# Create your models here.
class Clients(models.Model):
    first_name = models.CharField(max_length=250)
    second_name = models.CharField(max_length=250)
    third_name = models.CharField(max_length=250)
    adress = models.CharField(max_length=250)
    comment = models.CharField(max_length=2048)
    debt_value = models.DecimalField(max_digits=14, decimal_places=2)
    bank_rate = models.DecimalField(max_digits=3, decimal_places=0)
    SUCCES = 'S'
    FAIL = 'F'
    NONE = 'N'
    STATUS_TYPES = (
        (SUCCES, 'Succes'),
        (NONE, 'None'),
        (FAIL, 'Fail'),
    )
    status = models.CharField(max_length=1, choices=STATUS_TYPES, default=NONE)
    rate = models.DecimalField(max_digits=10, decimal_places=0, blank=False)
    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'
