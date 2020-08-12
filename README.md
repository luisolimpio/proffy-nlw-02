<p align="center">
   <img src="web/src/assets/images/landing.svg" width="200"/>
</p>


[![Author](https://img.shields.io/badge/author-luisolimpio-D54F44?style=flat-square)](https://github.com/luisolimpio)
[![Languages](https://img.shields.io/github/languages/count/luisolimpio/proffy-nlw-02?color=%23D54F44&style=flat-square)](#)


> Proffy is a platform that allows teachers and students to meet, creating connections and spreading knowledge to everyone.

<br />

<p align="center"><img src=".github/web.gif?raw=true"/></p>

---

# :pushpin: Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)


# :rocket: Features

* :heart_eyes: Explore the platform and connect with your favoite proffys.
* :calendar: Register as a proffy and enter your avatar image, name, bio and available hours to teach.
* :clock130: filter teachers who are available at the times you need.
* :earth_americas: Track the total number of connections already made in the application
* :purple_heart: Favorite the proffys to find them whenever you want  

**Obs: The goal of proffy is keeping evolving and getting better.**

# :construction_worker: Installation

**You need to install [Node.js + NPM](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/) if you prefer Yarn and [Expo CLI](https://docs.expo.io/get-started/installation/), then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/luisolimpio/proffy-nlw-02```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:luisolimpio/proffy-nlw-02.git```

**Running the server module**

- Run ```yarn install``` or ```npm install``` in the server folder to install all the required dependencies.

**Running migrations**

- After install the dependencies, still in the ```server``` folder, run ```yarn knex:migrate``` to create the tables in the database.
- To start the server run ```yarn start``` or ```npm run start```.

**Running the web module**

- Run ```yarn install``` or ```npm install``` in the web folder to install all the required dependencies.
- Change the base url of your api in ```services/axios.ts``` file if necessary. 
- To start the web module run ```yarn start``` or ```npm run start```.

**Running the mobile module**

- Run ```yarn install``` or ```npm install``` in the mobile folder to install all the required dependencies.
- Change the base url of your api in ```services/axios.ts``` file if necessary. Change to your IP adress.
- To start the mobile module run ```yarn start``` or ```npm run start```.

# :question: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [NodeJS](https://nodejs.org/en/) + [Express Framework](http://expressjs.com/en/) to handle the server, [React](https://pt-br.reactjs.org) to develop the web application, [React Native](https://reactnative.dev) in the mobile app, [KnexJS](http://knexjs.org) to help build queryes for the database and [Typescript](https://www.typescriptlang.org) at all to help the development by adding types to JavaScript.
##

Made with 💜 by [Luis Olimpio](https://github.com/luisolimpio), thanks to [Rocketseat](https://github.com/rocketseat) 🚀

