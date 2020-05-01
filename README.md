# TodoList-MERN Stack

## Introduction
The application provides a way to manage tasks, as well as creating, reading, updating and deleting tasks.
Technologies: MongoDB, Express, React(&Redux), Node.js.

### Installation
Download the project files.

### Getting Started
First, install the project's dependencies using npm.
```
npm install
 cd client npm install
 cd ..
 ```
Open MongoDB in the browser https://www.mongodb.com/cloud/atlas and then:
1) Create your account.
2) Create a project.
3) Fill your User Name and Password.
4) Select in 'connect' option.
5) Select in 'connect your application' option.
6) Creating config folder in the root directory, and then adding an file .env in config folder.
7) In the .env file, create a environment variable-MONGODB_URI.
8) Copy your connection string to .env file and replace <password> with your own password.

To run frontend and backend
```
npm run dev
```
To test the backend, you can browse to the URL http://localhost:5000/.

To run backend only
```
 npm run server
```
To test the frontend, you can browse to the URL http://localhost:3000/.

```
npm run client
```
To run in production

```
npm start
```
And now you can browse to https://ilan-adivi-todolist.herokuapp.com/.
