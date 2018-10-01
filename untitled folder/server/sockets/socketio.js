const UserQuery = require("../models/usersQuery");

var socketio = require('socket.io')(8000);

let online = new Array();
let offline = UserQuery.getAllUsers;

var socketConfig = function (socketio) {

    //client establishes connection to the server
    socketio.on('connection', function(socket){

  		console.log('!!! connected');

	  	socket.on('join', function(data){
		    let email = data.email;
		    let length = offline.length;
		    let user_obj = UserQuery(email);
		    console.log('!!! join room - name: ' + user_obj.name + ' email: ' + email);
		    socket.emit('ESN', { online : online, offline : offline });
		    socketio.emit('userLogin', { user_obj : user_obj });
		    for (var i=0;i<length;i++) {
		      	if (offline[i].email == email){
			        offline.splice(i,1);
			        break;
		      	}
		    }
		    online.push(user_obj);
  		});

	  	socket.on('leave', function(data){
		    let email = data.email;
		    let length = online.length;
		    let user_obj = UserQuery(email);
		    console.log('!!! user leave - name: ' + user_obj.name + '  email: ' + email);
		    socketio.emit('userLogout', { user_obj :    user_obj });
		    for (var i=0;i<length;i++) {
		      	if (online[i].email == email){
		        	online.splice(i,1);
		        	break;
		      	}
		    }   
		    offline.push(user_obj); 
		});

	  	socket.on('disconnect', function(){
	    	console.log('!!! disconnected');
	  	});
	});
}

module.exports = socketConfig;
