# PequeniaTV-API
PequeniaTV-API is a project with a simple CRUD operations with NodeJS and Mongo.
I'm using Express and Mongoose.

## First step
install all the packages

```sh
npm install
```

## Install mongoDB locally
The easiest way, you can download a Docker image from here https://hub.docker.com/_/mongo
By default, MongoDB will start at port 27017 (This project is connecting to that port).

## Start application
```sh
npm start
```

If everything is ok, then you will see something like this 
>app listening at port 3600


## Authentication
The project user JWT token authentication. You must create an user at first:
```sh
POST http://localhost:3600/users
```

```json
{
   "firstName" : "MyUserFirstName",
   "lastName" : "MyUserLastName",
   "email" : "myemail@email.com",
   "password" : "Pa55vv0rd"
}
```
Then, you can ask for an access-token at http://localhost:3600/auth
```json
{
   "email" : "myemail@email.com",
   "password" : "Pa55vv0rd"
}
```

## CRUD operations (Channel Model)
Remember alwayas add an Authorization Header


### Insert
```curl
curl --location --request POST 'http://localhost:3600/channels' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzIzYWQ3YWFmNGYzNzNjMzg0MGUxYzMiLCJlbWFpbCI6Imdhc3Rvbi5mcmlhc0B1c2V0LmNvbSIsInBlcm1pc3Npb25MZXZlbCI6NSwicHJvdmlkZXIiOiJlbWFpbCIsIm5hbWUiOiJHYXN0b24gRnJpYXMiLCJyZWZyZXNoS2V5IjoiNHlUeXNaUVlWSnJLVEhRckw0dzltZz09IiwiaWF0IjoxNjYzNzk5ODEwfQ.CmBOzc8nEUymebRveLH-AVLgY_Yo9Zq03zR7tCjdvvU' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Name2",
    "source": "Source2",
    "logo": "Logo2",
    "channel": "Channel2",
    "section": "Section2"
}'
```
