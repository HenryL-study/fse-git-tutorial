const mongoose = require('mongoose');

//DB_URL = 'mongodb+srv://server:Lbj.65259315@fseteam6-picji.mongodb.net/fse?retryWrites=true';
DB_URL = 'mongodb+srv://server:Lbj.65259315@fseteam6-picji.mongodb.net/fse?retryWrites=true';

/* connect to mongodb */
mongoose.connect(DB_URL, { useNewUrlParser: true });

/* connect successfully */
mongoose.connection.on('connected', () => {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    

/* connect error */
mongoose.connection.on('error', (err) => {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/* connect close */
mongoose.connection.on('disconnected', () => {    
    console.log('Mongoose connection disconnected');  
});    

module.exports = mongoose;
