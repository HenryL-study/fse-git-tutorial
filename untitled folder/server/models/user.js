const mongoose = require('./db.js');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.pre("save", function(next) {
	md5.update(this.password + this.name);
	this.password = md5.digest('base64');
	next();
});

userSchema.pre("findOneAndUpdate", function(next) {
	md5.update(this._update.password + this._update.name);
	this._update.password = md5.digest('base64');
	next();
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
