# -team-avo

# eziStartup: Collaborative Platform for Sharing and Incubating Startup Ideas Globally

eziStartup is an innovative web platform designed to serve the global entrepreneurial community. Our mission is to empower aspiring entrepreneurs by providing them with a collaborative virtual space to share, refine, and incubate their startup ideas.

 ## How it Works
Idea Submission: Entrepreneurs can easily submit their startup ideas to the GlobalStart platform, detailing their vision, target market, and unique value proposition.

Community Feedback: Once submitted, ideas are open to constructive feedback and discussion from the GlobalStart community. Users can provide valuable insights, suggestions, and critiques to help refine and strengthen each idea.

Incubation Support: Promising ideas receive further support and guidance from experienced mentors and industry experts within the GlobalStart network. Our goal is to nurture these ideas into viable business ventures through mentorship, resources, and networking opportunities.

Validation and Funding: Successful ideas may have the opportunity to undergo validation processes and secure funding through partnerships with investors and venture capitalists associated with GlobalStart.

## Key Features
User Profiles: Personalized user profiles allow entrepreneurs to showcase their ideas and connect with like-minded individuals.

Idea Management: Intuitive tools for idea submission, editing, and management streamline the process for entrepreneurs.

Community Engagement: Robust commenting, voting, and collaboration features foster active engagement and idea refinement within the GlobalStart community.

Mentorship Network: Access to a diverse network of mentors and advisors provides invaluable guidance and support throughout the startup journey.



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

## Update User

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

## Update Idea
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

## Get All Ideas
Endpoint: POST /getallIdeas

Description: Retrieves all ideas in the application.

Parameters:
api_key (string): Your API key for authentication.


## Acknowlegdements


Alyaan: Handled the backend using Node.js, Express.js, and PostgreSQL. Alyaan was our backend guru, testing everything r with tools like Postman and pgAdmin.

Zulfiqar Ali: Designed our user interface, making our platform functional.

Rafiea Ashraf: Built the frontend using HTML, CSS, PHP, and JavaScript, bringing our project to life visually.

Azhan Khan: Wrote the technical documentation..

Juli Kalna: Contributed ideas and research that helped shape our project's direction.


