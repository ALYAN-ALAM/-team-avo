# -team-avo

# eziStartup: Collaborative Platform for Sharing and Incubating Startup Ideas Globally

GziStartup is an innovative web platform designed to serve the global entrepreneurial community. Our mission is to empower aspiring entrepreneurs by providing them with a collaborative virtual space to share, refine, and incubate their startup ideas,

## Authors


- ALyan Alam  https://github.com/ALYAN-ALAM
- Zulfiqar Ali  https://github.com/whitemr7
- Juli Kalna  https://github.com/Juli-Kalna
-   Rafiea Ashraf  https://github.com/Rafiea-Ashraf
-  Azhan Khan  https://github.com/azhankhan92


## eziStartup API Documentation
Welcome to the eziStartup API documentation. This API provides endpoints for user authentication, user management, idea creation, and idea management.

## Authentication

Login
Endpoint: POST /userauth/login
Description: Allows users to log in to the application.
Parameters:
username (string): The username of the user.
password (string): The password of the user.
Signup
Endpoint: POST /userauth/signup
Description: Allows users to sign up for a new account.
Parameters:
username (string): The desired username for the new account.
email (string): The email address of the user.
password (string): The password for the new account.
## User Management

Get User
Endpoint: POST /user/getuser
Description: Retrieves user information based on the provided user ID.
Parameters:
api_key (string): Your API key for authentication.
id (string): The ID of the user to fetch.
Update User
Endpoint: PUT /user/updateUser
Description: Updates user information for the authenticated user.
Parameters:
api_key (string): Your API key for authentication.
username (string): The updated username for the user.
email (string): The updated email address for the user.
 ## Idea Management
 
Create Idea
Endpoint: POST /idea/createIdea
Description: Creates a new idea within the application.
Parameters:
api_key (string): Your API key for authentication.
title (string): The title of the idea.
description (string): A description of the idea.
 ## Get User's Idea
Endpoint: POST /idea/getMyIdea
Description: Retrieves ideas created by the authenticated user.
Parameters:
api_key (string): Your API key for authentication.
Update Idea
Endpoint: PUT /idea/updateIdea
Description: Updates the details of a specific idea.
Parameters:
api_key (string): Your API key for authentication.
id (string): The ID of the idea to update.
title (string): The updated title of the idea.
description (string): The updated description of the idea.
## Delete Idea

Endpoint: DELETE /idea/deleteIdea/:id
Description: Deletes a specific idea.
Parameters:
api_key (string): Your API key for authentication.
id (string): The ID of the idea to delete.
Get All Ideas
Endpoint: POST /getallIdeas
Description: Retrieves all ideas in the application.
Parameters:
api_key (string): Your API key for authentication.


## Acknowlegdements

#Contributors
Alyaan : implemented the backend , using tools like nodejs
 Tools : postman , pg admin
Zulfiqar Ali : implemented the user interface with frontend
Rafiea Ashraf : implemented the front end 
 please modify your parts of implemenation and resend please

