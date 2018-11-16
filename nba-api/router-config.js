let cors = require('cors'),
    loginRouter = require('./app/features//login/router'),
    playersRouter = require('./app/features/players/router'),
    teamsRouter = require('./app/features/teams/router'),
    adminRouter = require('./app/features/admin/router');

module.exports = (app, express) => {

    //config body parser/cors & routes
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors());

    //bind to routes
    app.get('/', (req, res) => {
        res.json({message: 'api working!'});
    });

    app.use('/login', loginRouter);
    app.use('/admin', adminRouter);
    app.use('/players', playersRouter);
    app.use('/teams', teamsRouter);

};