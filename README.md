# Weather Application
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![image](website.gif)

## Description

The weather application has two sub systems.  
* **Client side** - written using React.js  
deployed here: https://imdb-react-app.herokuapp.com/ 
* **Server side** - written using Node.js & Express  
deployed here: https://imdb-server-node.herokuapp.com/

### How to use imdb-API server
* Get featured movies : https://imdb-server-node.herokuapp.com/getFeatured
* Get search result : https://imdb-server-node.herokuapp.com/getsearch/?movie={THE NAME OF THE MOVIE}


## Getting Started

### Dependencies

* Node.js v14.17.5
* Windows 10

### Installing

* Clone this repository locally
* In each folder (front and server) run:
```
npm install
```

### Executing program

**Each subsystem needs to run individually**
* open cmd in front folder and run 
```npm start```
* open *another* cmd in server folder and run
```node app.js```

## IMPORTANT

The current React.js app is requesting data from the **deployed server**.
To make the app send requests to the local server (folder server):  
1. Access front/src/movies-context.js
2. In line 5 replace the link with (`http://localhost:3001/getFeatured`)
