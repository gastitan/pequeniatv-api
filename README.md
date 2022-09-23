![asd](https://lh6.googleusercontent.com/9h138ChjX7P-To230FPSV6EGQo7SZqZSeXPFCq7zgCUDvyET0hWCz_Bbnl__jVZoQAo=w2400 "asd")


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
```
curl --location --request POST 'http://localhost:3600/channels' \
--header 'Authorization: Bearer your_very_very_long_token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "TheGreatName",
    "source": "TheGreatSource",
    "logo": "TheGreatLogo",
    "channel": "TheGreatChannel",
    "section": "TheGreatSection"
}'
```

### Get (by ID)
```
curl --location --request GET 'http://localhost:3600/channels/:id' \
--header 'Authorization: Bearer your_very_very_long_token'
```

### Update (by ID)
```
curl --location --request PATCH 'http://localhost:3600/channels/:id' \
--header 'Authorization: Bearer your_very_very_long_token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "UpdatedName",
    "source": "UpdatedSource",
    "logo": "UpdatedLogo",
    "channel": "UpdatedChannel",
    "section": "UpdatedSection",
    "id": "TheSameID"
}'
```

### Delete (by ID)
```
curl --location --request DELETE 'http://localhost:3600/channels/:id' \
--header 'Authorization: Bearer your_very_very_long_token'
