# Keffi - HR Management Application


![keffi-register](https://user-images.githubusercontent.com/72194611/164046336-f088be36-76f6-47da-8d73-e9b4263afad7.JPG)

![keffi-employee](https://user-images.githubusercontent.com/72194611/164046369-b70cd9f2-2894-493c-91fe-8dce743f3275.JPG)
![keffi-appraisal](https://user-images.githubusercontent.com/72194611/164046400-d14a26cd-99b3-4ef9-be21-844f6915f65f.JPG)
![keffi-appraisal-ohne-daten](https://user-images.githubusercontent.com/72194611/164046436-24220ea9-2fea-480f-9876-95d376a9f4cd.JPG)

![keffi-dashboard-appraisal](https://user-images.githubusercontent.com/72194611/164046674-fcc3c8c8-7d99-4ec1-b90c-c71b7f8b9882.JPG)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Introducing Keffi
This is a Human Resources (HR) Management application which has full CRUD capabilities - meaning that it creates new, reads existing, updates and deletes text files - which represent employee information - either as general profile information or appraisal records.

# User story
 - Users want to register newly recruited employees, and therefore would do that with the registration form
 - They want to filter employee details, based on either their staff ID or department - the employee list fulfils this need.
 - They want to appraise existing employees - by having their numbers ready, appraisal information is filled on the appraisal form.
 - They want to read simple analytics that display HR key performance indicators - by filtering based on staff ID, year, and month, the specific appraisal records will be      obtained.

# Data model
  ## Registration form
  This form collects data which will be rendered on the employee list page. Besides the `Staff ID` which is automatically generated, and controlled, its content include   other information like:
  - Full name
  - Email
  - Department
  - Role
  - Birthday
  - Contract type
  - Photo

  ## Appraisal form
  This form collects data will be rendered on the analytics dashboard. It includes the following information:
  - Month
  - Year
  - Department
  - Staff ID
  - Full name
  - Quality of work
  - Delivery
  - Responsibility
  - Quantity of work
  - Punctuality
  - Supervisor comment
  - HR Comment

 # Employee list
 The employee list displays employees in the database - on individual cards that list their details . After the `GET` request is performed, the user is able to filter  employees based on `Staff ID` and `department`.
 Furthermore, they are able to delete or modify an existing employer's records with the aid of the `DELETE` and `PUT` requests respectively.
 
 # Appraisal logic
 The appraisal will be done based on five pieces of numerical information viz:
  - Quality of work
  - Delivery
  - Responsibility
  - Quantity of work
  - Punctuality

 and two qualitative assessments:
  - Supervisor comment
  - HR Comment
  
  Input for these numerical appraisals have a maximum of `5` points and minimum of `0`.
  After the appraisal page performs a `GET` request, the user can further filter information based on `Staff ID`, month and year, to get the precise appraisal
  information.
  
  # General requirements
  
   ## Frontend
   - React JS
   - CSS
   - Axios
   - React-router-DOM
   - Bootstrap

   ## Backend
   - Express JS
   - Node JS
   - MongoDB
   - Mongo Sanitize
   - Helmet
   - Bcrypt
   - REST APIs (POST, GET, PUT, DELETE)

  # Testing
  
  - Testing was done with Jest and Mocha.
  
