# Hour Logging Page Full Stack Application

Complete instructions on how to set up the front and back-ends for compiling.

You must follow each step carefully or the application will not work.

Disclaimer: These instructions are for setting up a local environment.
The original application was held in an active, remote database

## Features

- Create and read student records
- MySQL database integration
- RESTful API with Spring Boot
- React frontend with Material UI components
- Cross-origin communication between frontend and backend

## Prerequisites

- Java 17
- Node.js (Latest Version: 23.11.0)
- XAMPP Control Panel to activate MySQL Database
- IDE (IntelliJ IDEA for backend, VS Code for frontend)
- Postman (for API testing)

## Start-Up

- Press the arrow under "Code"
- Download the HourLoggingPage file as a zip
- Extract the files into a folder
- Check that master folder has "studentsystem" and "studentfrontend"
- You are now ready to start

## Backend Setup

1. Open IntelliJ Idea
2. Press "File" and open "studentsystem" within the master folder
3. Boot up the XMAPP Control Panel
4. Start "Apache" and "mySQL"
5. On IntelliJ, run the StudentsystemApplication
6. Back on XMAPP, "Tomcat" should have started automatically
7. Press "Admin" under mySQL
8. You should be redirect to a local host server on your web browser
9. Click on "New" and name the database "fullstack"
10. Your database on port 8080 has now been created!

## Frontend Setup

1. Open VS Code
2. Press "File" and open "studentsystemfrontend"
3. Under Terminal, type "npm install @mui/icons-material
   @mui/material @emotion/styled @emotion/react"
4. Save the code
5. Type "npm start" in the powershell terminal
7. A react application should have now opened up in your web broswer
8. Refresh the webpage to see updates
9. Enjoy submitting your volunteer hours!

## Additional Facts

1. Spring Boot application will run on port 8080
2. Access the database at http://localhost/phpmyadmin/
3. React application will run on port 3000
4. Access the front-end application at http://localhost:3000

## Troubleshooting

1. If the back-end isn't compiling, check that all the
   XMAPP databases are running
2. If the front-end isn't compiling, check that you
   have the latest version of node.js and have
   installed all material ui (mui) packages
3. The postman application can be used to check
   if your connection to the API was successful

## Future Enhancements

- Implementing update and delete operations
- Adding pagination for large datasets
- User authentication and authorization
