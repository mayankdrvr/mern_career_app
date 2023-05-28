# MyCareerProgress

## Motivation
Employment seekers for all types of jobs in all sectors of the market nowadays have to apply on various online and offline job platforms like LinkedIn, Instahyre, AngelList(Wellfound), naukri.com, employee referrals, company career pages, employment exchanges(offices) etc. Everyone of us is a job seeker in some form or the other and to track these job applications becomes difficult and time consuming and one might miss the right opportunities in the process. There is an urgent need to streamline this data in a dedicated portal with simple and fast interface. This project attempts to solve this problem. 

## Technical Details 
This is a user controlled full stack MERN employment interview record keeper web application. User has access to add, update & delete scheduled interview opportunities and track their status.

```bash
Register New User
Name- <Enter your desired username>
Email- <Enter your email>
Password- <Enter your desired password>
```
```bash
Login Old User
Email- <Enter your email>
Password- <Enter your password>
```
Project Specifications-
- Add Job section enables user to create their new scheduled interview data.
- Stats section displays number of pending applications, interviews scheduled and declined interviews.
- All Jobs section displays all data with options to search data by keyword, filter data according to status/type or sort data by name or date created.
- All Jobs section allows user to update and delete scheduled interview data and track the status of old interviews.
- Fully responsive web application.

# Demo

 ![ezgif com-gif-maker](https://user-images.githubusercontent.com/87348490/221120879-1f888c6d-b1bf-4bd6-9848-b0f0bf7ff418.gif)


## Technologies Used

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://i.ibb.co/ckPHbQm/express-facebook-share.png" alt="express" width="60" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>
<a href="https://render.com" target="_blank" rel="noreferrer"> <img src="https://upload.vectorlogo.zone/logos/render/images/bb711e6b-3dc7-496f-b665-10558e88ceed.svg" alt="render" width="40" height="40"/> </a>

## Google Lighthouse webpage performance report 

The full report can be accessed at [https://drive.google.com/file/d/1FjAHQKGxpaWNOnO-fvSuU2OLNjnIS3re/view?usp=sharing](https://drive.google.com/file/d/1befP1ZtqdOJGZm4kMvAuyeELcKwOyLmi/view?usp=sharing)
  
![mern-career-app](https://user-images.githubusercontent.com/87348490/221112345-788130c5-a315-4ab2-b329-2687eae78ef2.png)

## New Features to be added in Future

- Send notifications to user email inbox.
- Add more data visualization features.

## Authors

[@mayankdrvr](https://www.github.com/mayankdrvr)

## Run on Local System

- Go to Code->Download ZIP to download the .zip file. Just extract the .zip file and open the extracted folder in VS Code editor.
- Add .env and .gitignore file in client, server and root(main) folders. Add .env and node_modules in all .gitignore files.
- Open a new terminal in VS Code in the root(../../my-career-progress/) folder.
- To install client libraries & dependencies and run the frontend, run the following commands 
```bash
  cd client
  npm install
  npm start
```
Frontend will run on localhost:3000
### Add Environment variables in server folder 
- In .env file of server folder, add the following key value pairs 
```bash
PORT=5000
MONGO_URL=<Your MongoDB connection string>
JWT_LIFETIME=<Your jwt key>
JWT_SECRET=<Your jwt key>
```
- To install server libraries & dependencies and run the backend, run the following commands 
```bash
  cd server
  npm install
  npm start
```
Backend will run on localhost:5000

- Open http://localhost:3000/ to find the project running in your browser.

## Production Setup(Before Deployment)
- Remove node_modules and build folder from client, server and root folders. Do not remove any package-lock.json files.
- In root folder package.json file in "scripts" field, add the following key-value pairs
```bash
 "install-client": "npm install --prefix client"
 "setup-production": "npm run install-client && npm run build-client && npm install"
```
In root folder, run these commands one by one in terminal-
```
npm run setup-production
npm run server
```
Check localhost:5000 to see the production ready app working on local system

## Deployment on Render

### Deploying server folder
- Download the entire code of this project and create a Github repository and push the entire code in it.
- Create an account on Render and connect your Github account and connect all repositories(recommended) in it. 
- Go to Render dashboard and select New->Web Service. 
- Select the respective repository and click Connect. 
- In the Build & Deploy section, enter the following commands-
```
  Name - <Your desired domain name> 
  Branch - main
  Root Directory - server
  Build Command - npm install
  Start Command - npm start
```
 Click Create Web Service
 - It will take some time to deploy the backend server. 
 - Copy the URL(onrender.com extension) of the deployed backend server. 
 - In the left part of the screen, click on Environment and enter the following details-
```
PORT=<The onrender.com URL you just copied>
MONGO_URL=<Your MongoDB connection string>
JWT_LIFETIME=<Your jwt key>
JWT_SECRET=<Your jwt key>
``` 

- The full stack web app will be fully deployed in less than five minutes time on the given URL.

## License

[MIT](https://choosealicense.com/licenses/mit/)







