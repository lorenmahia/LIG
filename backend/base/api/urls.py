from django.urls import path

from . import views

urlpatterns = [

    path("signup/user/", views.userSignupView.as_view()),
    path("email-verify/", views.VerifyEmail.as_view(), name='email-verify'),
    path("login/", views.customAuthToken.as_view()),
    path("checkauth/", views.continuousVerificationView.as_view()),
    path('password-change-request/', views.passwordChangeRequestView.as_view()),
    path('password-change-confirm/', views.PasswordChangeConfirmView.as_view()),
    path('account/reg/',views.accountSignUpView.as_view()),
]