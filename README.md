# Unite Framework (v2)

## Prerequisite

- Node, NPM, loopback-v3 (nodejs framework) and MongoDB should be installed on the system.
 
## Setup on localhost

1. **Clone** - Clone this repo 
2. **Install server dependencies** - change directory to the server folder and run ```npm install``` command. This will install all the server dependencies.
3. **Verify MongoDB is active** - Verify MongoDB server is active/running with command ```service mongod status```. This should show status active. If not, start the MongoDB with command ```sudo service mongod start```.
4. **Import temporary data** - [Instructions](tree/v2/temp-data/sunbird)
4. **Start loopback server** - run command ```node .``` to start the server.
5. Once the server is active, one can access ```http://localhost:3002/explorer``` URL to add application data (Such as Menu, Widget, WidgetAssignment, Source) using post service from loopback. refer Database Design Diagram for more clarification on relationship between the collections.
6. **Install Angular dependencies** - Next, change directory to the web folder and run ```npm install``` command to install the Angular dependencies.
7. **Start Angular application** - run command ```ng serve --open``` and check running application on ```http://localhost:4200```.

## Unite Documentation Link

-  link - https://docs.google.com/document/d/1cin9yFF5QIiw02xFJVsFWsmwnbd5cHSquZ-HUIuxzDQ/edit?usp=sharing

## Database Design Diagram

-  link - <a href="https://app.quickdatabasediagrams.com/#/schema/kgDNgaLMYESb-suRwpJeGw" target="_blank">Database design</a>

![unite database design](unite-database-design.png)

## Misc

- [MongoDB Compass](https://www.mongodb.com/products/compass) - Something similar to phpMyAdmin but is for MongoDB.