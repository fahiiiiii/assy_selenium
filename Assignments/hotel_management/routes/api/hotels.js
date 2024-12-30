const express = require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const Hotel = require('./../../models/Hotel');
const Room = require('./../../models/Room');


router.post('/',[
    ("title","title must not be empty").notEm
],)