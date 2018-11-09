let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'get on teams works!'});
});

module.exports = router;