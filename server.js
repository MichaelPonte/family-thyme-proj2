const express = require('express');
const ExpHandlebars = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const fs = require('fs');//add path here to fs when needed

const routes = require('./controllers');
// const helpers = require('./utils/auth'); //add path here to helpers when needed
const sequelize = require('./config/connections');
//add path here to database when needed

const SequelizeStore = require('connect-session-sequelize')(session.Store);//Initializing Sequelize with session store

const PORT = process.env.PORT || 3001;
const app = express();

const handlebars = ExpHandlebars.create({});

//Setting up connection to Sequelize database
const sess = {
    secret: 'Super secret secret',
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        //Can add "maxAge" for cookie expiration
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });