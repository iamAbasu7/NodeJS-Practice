const EventEmitter = require("events");

const event = new EventEmitter();
event.on('sayMyName', ()=>{
    console.log("My name is Antar");
})
event.on('sayMyName', ()=>{
    console.log("My name is Kumar");
})
event.on('sayMyName', ()=>{
    console.log("My name is Bose");
})

event.emit('sayMyName');

event.on('checkpage',(code,status)=>{
    console.log(`${code} is ${status}`)
})

event.emit("checkpage",200,"ok");