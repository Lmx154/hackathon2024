#Full Stack app for hackathon

###Utilizing
- Django
- Django rest framework
- Django cors headers
- 



--Frontend--
- to start server (make sure you are inside frontend folder): npm run dev
- 

--Backend--
- First, make sure you have python 3.12.6
- Create a .venv virtual environment in the root of the project folder. 
- Enter the virtual environment using .venv/Scripts/activate 
- Run command: pip install django djangorestframework django-cors-headers

- to run Django server: python manage.py runserver

--Supplementary info on backend--
- Models: Define the data structure in the database.

- Serializers (DRF): Convert model instances to JSON format for the API response.

- Views: Fetch the data from the models and pass it to the serializers for conversion, then send the serialized data in the API response.

- URLs: Define the API endpoints that the frontend can request.