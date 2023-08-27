# Generated by Django 4.2.4 on 2023-08-27 06:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_remove_accountdata_clientid_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accounttype', models.CharField(choices=[('Investment', 'inv'), ('Retirement', 'ret'), ('Pseudo', 'psdo'), ('Futures', 'fut'), ('Forex', 'frx')], db_index=True, default='Investment', max_length=255)),
                ('risklevel', models.CharField(db_index=True, max_length=255)),
                ('investmentgoal', models.CharField(db_index=True, max_length=255)),
                ('exputility', models.IntegerField(db_index=True)),
                ('riskaversion', models.IntegerField(db_index=True)),
                ('lossaversion', models.IntegerField(db_index=True)),
                ('reflection', models.IntegerField(db_index=True)),
                ('solvrisk', models.IntegerField(db_index=True)),
                ('account_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
