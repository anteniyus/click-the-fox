## Table of contents

- [Click the Fox! Game](#click-the-fox-game)
- [Building](#building)
- [Stack](#stack)
- [Available Scripts](#available-scripts)
- [How to Start Locally](#how-to-start-locally)
- [Deployment](#deployment)

# Click the Fox! Game
This is a simple web based game. You should find the fox among other animals and click on it and get points.
You can register on it and also change the name after submitting and start playing.
You have 30 seconds to find all foxes that appears randomly.

This application designed based on Desktop First design approach, but also, supports mobile devices.

It has 3 screens:
- Welcome
- Play
- Scoreboard

You can register on Welcome screen and start playing and after 30 seconds you will be redirected to 
scoreboard screen automatically and see your rank.

The main URL of the application is:
> [host]/


![Demo](https://user-images.githubusercontent.com/4962803/140739694-8e1a5ca1-0a38-4aca-b364-e258d4a3239c.gif)

## Building

Building The Click the Fox! Game requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

The technology used for developing this application is:
- React
- Redux toolkit
- Redux Persist
- Material-UI

And also used some libraries like **Axios**, **Styled Component**, **Notistack**.

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## How to Start Locally
For starting the project locally, after cloning the project, go to the project dicretory and run the following command:
> npm install

It takes some times, after it finishes, run the below command:
>npm start

The project automatically runs on **localhost:3000**, if the specified port is busy, it asks you to run it
on another port.

## Deployment

This application has two profiles: *development* and *production*, and it handles using 
**env-cmd** library.

For local deployment (the steps for the server deployment are the same in most cases),
you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Also, if you have profiling for different stages, you can use below command as an example 
for production:

  > npm run build:production

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf
  like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/click-the-fox/build_

- In the conf file, change server part like below:

```text
server {

    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/click-the-fox/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```

Done. Start the Nginx.

The application is accessible from the following location:
> localhost:5050