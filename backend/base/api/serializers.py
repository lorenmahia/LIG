
from base.models import User,Account
from django.contrib.auth import authenticate
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "isVerified","fullname"]

class userSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["fullname", "email", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def save(self, **kwargs):
        user = User(
            fullname=self.validated_data["fullname"],
            email=self.validated_data["email"],
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError(
                {"error": "Password do not match"})
        user.set_password(password)
        user.save()
        return user


class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["accounttype","risklevel","investmentgoal","exputility","riskaversion","lossaversion","reflection","solvrisk"]

class AccountSetUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["accounttype","risklevel","investmentgoal","exputility","riskaversion","lossaversion","reflection","solvrisk"]
        def save(self,**kwargs):
            account = Account(
                accounttype = self.validated_data["accounttype"],
                risklevel = self.validated_data["risklevel"],
                investmentgoal = self.validated_data["investmentgoal"]
            )
            account.save()
            return account
