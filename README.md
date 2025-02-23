Configuration and Setup

Key Features

Technologies used

Frontend

Backend

Database

Screenshots

License

Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

Open the project in your preferred code editor.

Go to terminal -> New terminal (If you are using VS Code)

Split your terminal into two (run the frontend on one terminal and the server on the other terminal)

In the first terminal:

$ cd Frontend
$ npm install (to install frontend dependencies)
$ npm run dev (to start the frontend)

In the second terminal:

Navigate to the backend folder and set environment variables in .env

Create your MongoDB connection URL, which you'll use as your MONGO_URL

Supply the following credentials:

#  ---  .env  ---
PORT=8070
MONGO_URL=

# --- Terminal ---

$ npm install (to install backend dependencies)
$ npm start (to start the backend)

Key Features

Add Student

Edit Student

Remove Student

No Student Page

404 Page and many more

Responsive Design

Technologies Used

Frontend

React.js - JavaScript library for building user interfaces

React Hooks - For managing and centralizing application state

react-router-dom - To handle routing

Axios - For making API calls

Bootstrap - For UI components and styling

React Icons - Small library that helps you add icons to your React apps

SweetAlert2 - For beautiful alert popups

Backend

Node.js - Runtime environment for building server-side applications

Express.js - Web framework for handling HTTP requests

CORS - Middleware for enabling cross-origin requests

Mongoose - MongoDB object modeling tool

Dotenv - For managing environment variables

Nodemon - For automatic server restarts during development

Database

MongoDB - NoSQL database for storing application data

License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.