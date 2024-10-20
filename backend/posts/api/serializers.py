from rest_framework import serializers
from ..models import User, CreditScore, FinancialSituation, Opportunity, UserOpportunity, Advice

# Serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=4)

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'password', 'first_name',
            'last_name', 'is_veteran', 'is_disabled', 'date_joined'
        ]

    def create(self, validated_data):
        """Create a new user with a hashed password."""
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_veteran=validated_data['is_veteran'],
            is_disabled=validated_data['is_disabled']
        )
        # Hash the password
        user.set_password(validated_data['password'])
        return user

    def validate_password(self, value):
        """Additional password validation, if needed."""
        if len(value) < 4:
            raise serializers.ValidationError("Password must be at least 4 characters long.")
        return value

# Serializer for the CreditScore model
class CreditScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditScore
        fields = ['id', 'user', 'score', 'date_updated']

# Serializer for the FinancialSituation model
class FinancialSituationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialSituation
        fields = ['id', 'user', 'occupation', 'annual_income', 'expenses', 'savings', 'debt']

# Serializer for the Opportunity model
class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields = ['id', 'name', 'description', 'type', 'eligibility_criteria', 'is_national']

# Serializer for the UserOpportunity model
class UserOpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOpportunity
        fields = ['id', 'user', 'opportunity', 'date_recommended']

# Serializer for the Advice model
class AdviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advice
        fields = ['id', 'user', 'content', 'date_given']
