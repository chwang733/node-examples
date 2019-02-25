## A POC to create a Node Rest API using Express, MongoDB, and Typescript ##

This the code as part of a great tutorial on Youtube to create a Node Rest API using Express, MongoDB, and Typescript.
https://www.youtube.com/watch?v=XqbBv1i9Yhc https://github.com/iamclaytonray/tes

### For Developement Environment Setup ###
--------------------
1. For local environment setup, this project needs MongoDB. You can install it locally or use docker container. I have created a docker-compose file to launch a MongoDB container. To run it, make sure you change your working direcotry to the root folder with the docker-compose.mongo-only.yml file and use the following commands to launch the container:
```
$ docker-compose -f docker-compose.mongo-only.yaml up
```
2. Use VS.code to open the TypeScript-RestAPI folder. Open a command line window and run the following command to run the application.
```
$ yarn run dev      (or you can use npm run dev)
```
Note: The command will launch tsc-watch to monitor any typescript file changes. Any *.ts file change will trigger the tsc compilation and re-deployment of the application. 

3. For manual testing, you can import a postman collection from the postman folder.

### For Production Environment Setup ###
---------------------
To run the applications including the MongoDB in docker container:
```
docker-compose up
```

### More about Node development environment setup ###
----------------------
1. Node installation: On linux, don't use the default node installer. Instead, install nvm and use it to manage node installation and versioning. See installation details: https://github.com/creationix/nvm
2. You should download yarn. ( In fact, after npm 5, there isn't that much difference between yarn and npm, but yarn is still the preferred package manager.)
```
npm -g install yarn
```
3. To start a new project. This will create package.json file to manage the dependecies and run/build scripts
```
yarn init -y 
```
4. For release dependency installation. This will also add the package dependencies to your package.json file
```
yarn add express mongoose ....
```
5. For development only dependency, e.g. jest. Add -D switch to yarn or npm
```
yarn add -D jest ....
```
