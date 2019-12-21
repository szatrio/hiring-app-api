# hiring-app-api

## Table of Contents
- [Introduction](#introduction)
- [Tools](#Tools)
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [Route](#Route)
---
 
## Introduction
hiring-app-express-api an app for connecting between company and engineer on hiring transactions. the main features are: 
- CRUD Company
- CRUD Engineer
- CRUD User
- Search engineer by skill
- Sort engineer by name
- Pagination
- Login and Register With JWT
---

## Tools
- XAMPP
- Visual Studio Code
- Node.js
- Terminal
- Postman
---

## Installation

### Clone
```bash
$ git clone https://github.com/szatrio/hiring-app-express-api.git
$ cd hiring-app-express-api
$ npm install
```
---

### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
---
### Start Development Server
```bash
$ npm start
```
--- 

## Dependencies

| Plugin |
| ------ |
| express |
| mysql |
| bcryptjs |
| body-parser |
| dotenv |
| jsonwebtoken |
| morgan |

## API Route URL

- Users
  - (POST)    http://localhost:8000/user/register Register users
  - (POST)    http://localhost:8000/user/login Login users
  - (GET)     http://localhost:8000/user Get data users
  - (PUT)     http://localhost:8000/user/:id_user Update data user
  - (DELETE)  http://localhost:8000/user/:id_user Delete data user
  
- Company
  - (POST)    http://localhost:8000/company/ Create data companies
  - (GET)     http://localhost:8000/company/ Get data companies
  - (PUT)     http://localhost:8000/company/:id_company Update data company
  - (DELETE)  http://localhost:8000/company/:id_company Delete data company

- Engineer
  - (POST)    http://localhost:8000/engineer/ Create data engineers
  - (GET)     http://localhost:8000/engineer/ Get data engineers
  - (PUT)     http://localhost:8000/engineer/:id_engineer Update data engineer
  - (DELETE)  http://localhost:8000/engineer/:id_engineer Delete data engineer
  - (GET)    http://localhost:8000/engineer/search Search data engineers by name
  - (GET)    http://localhost:8000/engineer/sort Sort data engineers by name
  - (GET)    http://localhost:8000/engineer/ create data engineers
