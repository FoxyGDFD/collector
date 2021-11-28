from django.db import models
from cpllector.settings import DEPT


# Create your models here.
class Clients(models.Model):
    first_name = models.CharField(max_length=250, blank=False)
    second_name = models.CharField(max_length=250, blank=False)
    third_name = models.CharField(max_length=250, blank=False)
    adress = models.CharField(max_length=250, blank=False)
    comment = models.CharField(max_length=2048, blank=True)
    debt_value = models.DecimalField(max_digits=14, decimal_places=2, blank=False)
    bank_rate = models.DecimalField(max_digits=3, decimal_places=0, blank=False)
    action_date = models.DateField(blank=True,null= True)
    SUCCES = 'S'
    FAIL = 'F'
    NONE = 'N'
    STATUS_TYPES = (
        (SUCCES, 'Succes'),
        (NONE, 'None'),
        (FAIL, 'Fail'),
    )
    status = models.CharField(max_length=1, choices=STATUS_TYPES, default=NONE)
    RED = 'R'
    YELLOW = 'Y'
    GREEN = 'G'
    RATE = (
        (RED, 'Red'),
        (YELLOW, 'Yellow'),
        (GREEN, 'Green'),
    )
    rate = models.CharField(max_length=1, choices=RATE, default=RED)

    class Meta:
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'

    def rate_compile(self):
        if self.debt_value > DEPT[1]:
            self.rate = self.RED
        elif self.debt_value > DEPT[0]:
            if self.bank_rate > 896:
                self.rate = self.GREEN
            else:
                self.rate = self.YELLOW
        else:
            self.rate = self.GREEN
        return True
