const express = require('express');
const ExpHandlebars = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connections');

const PORT = process.env.PORT || 3001;
const app = express();

const SequelizeStore = require('connect-session-sequelize')(session.Store);//Initializing Sequelize with session store

const handlebars = ExpHandlebars.create({});

//Setting up connection to Sequelize database
const sess = {
    secret: 'Super secret secret',
    cookie: {},
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
//it will be connecting to front-end files through "public" folder  
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('PORT ACTIVATED'));
  });