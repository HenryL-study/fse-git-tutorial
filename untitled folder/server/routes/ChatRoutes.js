var express = require('express');
var PublicChatController = require('../controllers/PublicChatController'); // PublicChatController

var routes = function (Message) {

    var messageRouter = express.Router();

    messageRouter.route('/')
        .get( //would later pass the control to the controller
            function (request, response) {
            response.type('json');
            response.json('{userslist: users}');
            
        })
        .post(function (request, response) {
            
            response.status(201).json('ok');
        });

    return messageRouter;
}

module.exports = routes;