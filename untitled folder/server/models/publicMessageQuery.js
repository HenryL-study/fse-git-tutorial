const Message = require("./publicMessage");

class PublicMessageQuery {

	static getAllMessages(req, res) {
		Message.find()
		.then(messages => {
			//res.status(200).send(messages);
			console.log('model publicMessage getAllMessages');
			return messages;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static getMessageByUser(req, res) {
		//Message.find({ user: 'test' })
		Message.find({ user: req.body.user })
		.then(messages => {
			//res.status(200).send(messages);
			console.log('model publicMessage getMessageByUser' + req.body.user);
			return messages;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static createMessage(req, res) {
		let newMessage = new Message();
		//newMessage.user = 'test';
		//newMessage.time = '2163216378163781';
		//newMessage.content = 'sadasdasdasdasdasdasdasdasdads';
		newMessage.user = req.body.user;
		newMessage.time = req.body.time;
		newMessage.content = req.body.content;
		newMessage.save()
		.then(message => {
			//res.status(200).send(message);
			console.log('model publicMessage createMessage ' + message.user);
			return message;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	} 

}

module.exports = PublicMessageQuery;
