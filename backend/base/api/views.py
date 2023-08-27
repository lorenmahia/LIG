import random

from base.models import User,Account
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.shortcuts import redirect
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags
from jwt import ExpiredSignatureError, decode, encode, exceptions
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from . import utils
from .serializers import LoginSerializer, UserSerializer, userSignupSerializer,AccountSetUpSerializer,AccountSerializer


class passwordChangeRequestView(generics.GenericAPIView):

    def post(self,request, *args, **kwargs):
        
        given_mail = request.data['email']
        user = User.objects.get(email=given_mail)
        generatedOtp = random.randint(100000, 999999)
        user.otp = generatedOtp
        user.save()
        html_message = render_to_string(
            'password_reset_template.html', {'context': generatedOtp})
        plain_message = strip_tags(html_message)
        send_mail(
            "Password Reset for {title}".format(title="Loren Investment Group"),
            plain_message,
            utils.email_address,
            [given_mail],
            html_message=html_message
        )
        return Response({'message': "check your email for otp"}, status=status.HTTP_200_OK)

class PasswordChangeConfirmView(generics.GenericAPIView):
    def post(self,request, *args, **kwargs):
        given_mail = request.data['email']
        given_otp = int(request.data['token'])
        pass1 = request.data['password1']
        pass2 = request.data['password2']
        print(given_mail, given_otp, pass1, pass2)
        user = User.objects.get(email=given_mail)

        if user.otp != given_otp:
            return Response({'message': "OTP doesn't match"}, status=status.HTTP_400_BAD_REQUEST)
        if pass1 != pass2:
            return Response({'message': "Password doesn't match"}, status=status.HTTP_401_BAD_REQUEST)
        if user.otp is not None and user.otp == given_otp and pass1 == pass2:
            user.set_password(pass1)
            user.otp = None
            user.save()
            return Response({'message': "Successfully changed the password"}, status=status.HTTP_200_OK)


   

class userSignupView(generics.GenericAPIView):
    serializer_class = userSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        user_data = User.objects.get(email=serializer.data['email'])

        token = encode({'id': user_data.id},
                       settings.SECRET_KEY, algorithm='HS256')
        current_site = get_current_site(request).domain
        relative_link = reverse('email-verify')
        print('1')
        absurl = 'http://' + current_site + \
            relative_link + "?token=" + str(token)
        print('2')

        html_message = render_to_string('registration_confirm.html', {
            'fullname': user_data.fullname,
            'confirmationUrl': absurl
        })
        plain_message = strip_tags(html_message)
        send_mail(
            "Email Confirmation for Loren Investment Group",
            plain_message,
            utils.email_address,
            [user_data.email],
            html_message=html_message
        )

        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "message": "account created successfully",
            }
        )

class accountSignUpView(generics.GenericAPIView):
    serializer_class = AccountSetUpSerializer
    def post(self, request, *args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        account = serializer.save()

        account_data = Account.objects.get(accounttype = serializer.data['accounttype'])
        return Response(
            {
                "account": AccountSerializer(
                    account, context=self.get_serializer_context()
                ).data,
                "message": "account created successfully",
            }
        )

class VerifyEmail(generics.GenericAPIView):

    @staticmethod
    def get(request):
        token = request.GET.get('token')
        try:
            payload = decode(token, settings.SECRET_KEY, algorithms='HS256')
            user = User.objects.get(id=payload['id'])
            if user.isVerified is False:
                user.isVerified = True
                user.save()
            return redirect("http://localhost:3000/login")

        except ExpiredSignatureError:
            return Response({'message': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)

        except exceptions.DecodeError:
            return Response({'message': 'Invalid Token'}, status=status.HTTP_400_BAD_REQUEST)


class customAuthToken(generics.GenericAPIView):

    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token.key
        })


class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class continuousVerificationView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
