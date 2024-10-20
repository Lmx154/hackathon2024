from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Post model
class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return f"Post: {self.title}"

# User model   
class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_veteran = models.BooleanField(default=False)
    is_disabled = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    def set_password(self, raw_password):
        """Hashes the password and sets it."""
        self.password = make_password(raw_password)
        self.save()

    def check_password(self, raw_password):
        """Checks if the provided password matches the stored hash."""
        return check_password(raw_password, self.password)

    def __str__(self):
        return f"{self.username}"

# CreditScore model
class CreditScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='credit_scores')
    score = models.IntegerField()
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Credit Score: {self.score} for {self.user.username}"

# FinancialSituation model
class FinancialSituation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='financial_situations')
    occupation = models.CharField(max_length=200)
    annual_income = models.DecimalField(max_digits=10, decimal_places=2)
    expenses = models.DecimalField(max_digits=10, decimal_places=2)
    savings = models.DecimalField(max_digits=10, decimal_places=2)
    debt = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Financial Situation for {self.user.username}"

# Opportunity model
class Opportunity(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=100)
    eligibility_criteria = models.TextField()
    is_national = models.BooleanField(default=False)

    def __str__(self):
        return self.name

# UserOpportunity model
class UserOpportunity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_opportunities')
    opportunity = models.ForeignKey(Opportunity, on_delete=models.CASCADE)
    date_recommended = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.opportunity.name} for {self.user.username}"

# Advice model
class Advice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='advice')
    content = models.TextField()
    date_given = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Advice for {self.user.username}"
