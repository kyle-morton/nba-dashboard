let router = require('express').Router(),
    userHandler = new (require('./handler'))();

router.get('/', async (req, res) => {
    try {
        res.json(await userHandler.get());
    }catch(ex) {
        res.json({message: 'error: ' + ex});
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await userHandler.getByID(req.params.id));
    }catch(ex) {
        res.json({message: 'error: ' + ex});
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await userHandler.create(req.body));
    }catch(ex) {
        res.json({message: 'error: ' + ex});
    }
});

module.exports = router;