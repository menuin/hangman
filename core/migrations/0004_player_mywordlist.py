# Generated by Django 3.1.1 on 2021-02-26 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_player_wrong'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='mywordlist',
            field=models.TextField(null=True),
        ),
    ]