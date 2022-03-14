import { EventEmitter } from "events";

let eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log("Yo Yo YO");
});

eventEmitter.emit('start');

// .emit is to trigger an event
// .on takes event name & a callback, this is like what to do when event has been triggered
// NOTE : Without emit there's no .on gonna work since noone is triggering the event