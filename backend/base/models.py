from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    def get_object_by_public_id(self,public_id):
        try:
            instance = self.get(public_id=public_id)
            return instance
        except(ObjectDoesNotExist,ValueError,TypeError):
            return Http404

    def create_user(self, email, password):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = False
        user.save()
        return user

    def create_superuser(self, email, password):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.isVerified = True
        user.save()
        return user


class User(AbstractUser):
    username = None
    public_id = None
    first_name = None
    last_name = None
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    fullname = models.CharField(null=True, max_length=50)
    isVerified = models.BooleanField(default=False)
    otp = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.email
    
    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"

class CustomAccountManager():
    def create_account():
        if not accounttype:
            raise ValueError(_('The Account type must be set'))
        account.save()
        return account

class Account(models.Model):
    ACCOUNT_TYPES = (
        ("Investment", "inv"),
        ("Retirement", "ret"),
        ("Pseudo","psdo"),
        ("Futures","fut"),
        ("Forex","frx"),
    )
    accounttype = models.CharField(db_index=True, max_length=255)
    risklevel= models.CharField(db_index=True, max_length=255)
    investmentgoal = models.CharField(db_index=True, max_length=255)
    exputility = models.IntegerField(db_index=True)
    riskaversion = models.IntegerField(db_index=True)
    lossaversion = models.IntegerField(db_index=True)
    reflection= models.CharField(db_index=True,max_length=255)
    solvrisk= models.CharField(db_index=True,max_length=255)
    objects = CustomAccountManager()

    def __str__(self):
        return self.accounttype


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField('BaseUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class BaseUser(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()
    email = models.CharField(unique=True, max_length=254)
    fullname = models.CharField(max_length=50, blank=True, null=True)
    isverified = models.IntegerField(db_column='isVerified')  # Field name made lowercase.
    otp = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'base_user'


class BaseUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(BaseUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'base_user_groups'
        unique_together = (('user', 'group'),)


class BaseUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(BaseUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'base_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(BaseUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
