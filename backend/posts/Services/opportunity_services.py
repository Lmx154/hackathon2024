from posts.models import User,Opportunity,CreditScore,FinancialSituation

def recommned_opportunities(user_id):
    try:
        user = User.objects.get(id=user_id)
        credit_score = CreditScore.objects.filter(user=user).order_by('-date_updated').first()
        financial_situation = FinancialSituation.objects.filter(user=user).first()

        opportunities = opportunities.objects.all()

        if user.is_veteran:
            opportunities= opportunities.filter(eligibility_criteria_icontains='veteran')
        
        if user.is_disabled:
            opportunities= opportunities.filter(eligibility_criteria_icontains='disabled')

        if credit_score:
            if credit_score.score<600:
                opportunities = opportunities.filter(type='basic')
            elif 600<= credit_score.score < 700:
                opportunities = opportunities.filter(type='standard')
            else:
                opportunities = opportunities.filter(type='premium')

        if financial_situation:
            if financial_situation.annual_income < 30000:
                opportunities = opportunities.filter(eligibility_criteria_icontains='low-income')


        return [op.name for op in opportunities]
    except user == None:
            return{'error': 'User not found'}