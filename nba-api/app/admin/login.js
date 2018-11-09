let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'get on login works!'});
});

module.exports = router;