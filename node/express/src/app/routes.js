const { Router } = require('express');
const ContactController = require('./controllers/ContactController');


const router = Router();
router.get('/contacts', ContactController.index);
router.


module.exports = router;


