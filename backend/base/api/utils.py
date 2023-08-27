from django.core.mail import EmailMessage

email_address="loreninvestmentgroup@gmail.com"
email_app_password="gjvfoowprrsuanvf"

class Util:

    @staticmethod
    def send_email(data):
        email = EmailMessage(
            to=[data['to_email']], subject=data['email_subject'], body=data['email_body'])
        email.send()

