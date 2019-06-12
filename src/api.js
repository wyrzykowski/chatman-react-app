import * as socketIo from 'socket.io-client';
const socket = socketIo("http://localhost:3001");

function communicateWithServerChat(callback){

}
function receiveMessage(callback){
    socket.on('message', (message) => {
    callback(message);

});
}

function sendMessage(message,callback){
        socket.emit('sendMessage', message, (error) => {

        if (error) {
            console.log(error)
        }
        callback();
        console.log('Message delivered!')
    })
}

const logIn=(loginData,callback)=>{
    const {name:username,room:room}=loginData;
    socket.emit('join',{username,room},(error)=> {

        if (error) {
            callback(false);
        }


    });
    callback(true);

};

function getUsersList(callback){
    socket.on('roomData',({room,users})=>{
        callback(users);
    });
}

function sendOnType(callback){
    socket.emit('typing', window.username,(error) => {
        if (error) {
            console.log(error)
        }
        callback();
        console.log('Typing send!')
    })
}

function getType(callback){
    socket.on('typing',(user)=>{
        callback(user);
    });
}
export { logIn,receiveMessage,sendMessage,getUsersList,getType,sendOnType };