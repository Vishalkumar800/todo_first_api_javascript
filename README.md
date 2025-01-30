User Management API
Yeh project ek simple User Management API hai, jo Node.js aur Express.js ka use karta hai. Yeh API user data ko create aur read karne ke basic endpoints provide karta hai. MongoDB ko database ke liye use kiya gaya hai.

Features
Create User: Naye users ko database me add karo.
Get All Users: Sabhi users ka data fetch karo.



Installation
Clone the repository:
git clone https://github.com/Vishalkumar800/todo_first_api_javascript.git
cd todo_first_api_javascript


Access the API:
The server will start running at:
===>> http://localhost:3000

API Endpoints
1. Endpoint: /
--  Method: GET  ==> Response -- Welcome


2. Create User
Endpoint: /create
Method: POST
Description: Create New User in  Data Base.
Request Body (JSON):
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "role": "Admin"
}

3. Get All Users
Endpoint: /read
Method: GET
Description:Get All The User From DataBases.
Response:

  {
    "_id": "64c9e82bf3c48e1e309af456",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "Admin",
    "__v": 0
  }


Project Structure: --- 
├── app.js             # Main application file
├── usermodel.js       # Mongoose schema for User model
├── package.json       # Project metadata and dependencies
└── README.md          # API documentation

4.Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)








