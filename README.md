# NodeJS-Express-MongoDB

### Repo Description
This repo is for learning purposes and used NODE JS, Express, and MongoDB. This is a simple CRUD API that really opens up my mind about how the backend server send and receive a request from the client. 
I hope in the future, I could implement more complex and use this repository as a based learning to make a larger projects.

### How to use 
1. **Install package**
`npm install` \
You need to install all the node package that being used in this projects \
2. **Create Your Database Cluster** \
You can check this link on how to make and setting up your database cluster https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster \
and to connect the server to database, you need this connection string that you can get by copying the connection string 
\
`mongodb+srv://yourEmail:<password>@yourclustername.mongodb.net/` \
3. **Change the Connextion string** \
Go to `app/config/db.config.js` and then replace it with your own connection string \
4. **Test it with Postman** \
you can test the API with the router that exist in `app/routes/tutorial.routes.js`


Happy API
