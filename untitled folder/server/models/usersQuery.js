const User = require("./user");

class UserQuery {

	static getAllUsers(req, res) {
		User.find()
		.then(users => {
			//res.status(200).send(users);
			console.log('model user getAllUsers');
			return users;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static getUserByName(req, res) {
		//User.find({ name: 'test1' })
		User.find({ name: req.body.name })
		.then(users => {
			//res.status(200).send(users);
			console.log('model user getUserByName ' + req.body.name);
			return users;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static getUserByEmail(req, res) {
		//User.findOne({ email: 'test4@gmail.com' })
		User.findOne({ email: req.body.email })
		.then(user => {
			//res.status(200).send(user);
			console.log('model user getUserByEmail ' + req.body.email);
			return user;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static createUser(req, res) {
	    User.findOne({email: req.body.email})
	    //User.findOne({email: 'test9@hotmail.com'})
	    .then(user => {
	    	if (user) {
	    		console.log('model user createUser Error!!!' + user.name);
	    		res.status(200).send(user);
	    	} else {
	    		let newUser = new User();
				//newUser.name = 'test9';
				//newUser.email = 'test9@hotmail.com';
				//newUser.password = 'test9';
				newUser.name = req.body.name;
				newUser.email = req.body.email;
				newUser.password = req.body.password;
	    		newUser.save()
				.then(user => {
					//res.status(200).send(user);
					console.log('model user createUser ' + user.name);
					return user;
				})
				.catch(err => {
					res.status(500).send(err);
				})
	    	}
	    })
	} 

	static updateUser(req, res) {
		//User.findOneAndUpdate({ email: 'test1@gmail.com' }, { name: 'max' , password: 'Lbj.' })
		User.findOneAndUpdate({ email: req.body.email }, { name: req.body.name , password: req.body.password })
		.then(user => {
			//res.status(200).send(user);
			console.log('model user updateUser ' + req.body.email);
			return user;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static deleteUser(req, res) {
		//User.findOneAndDelete({ email: 'test1@gmail.com' })
		User.findOneAndDelete({ email: req.body.email })
		.then(user => {
			//res.status(200).send(user);
			console.log('model user deleteUser ' + req.body.email);
			return user;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static getUserByEmailSocket(email) {
		//User.findOne({ email: 'test4@gmail.com' })
		User.findOne({ email: email })
		.then(user => {
			//res.status(200).send(user);
			console.log('model user getUserByEmailSocket ' + email);
			return user;
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}
	
}

module.exports = UserQuery;
