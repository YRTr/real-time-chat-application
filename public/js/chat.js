let socket = io();
let submission = document.querySelector('#message-form');

socket.on('message', (message) => {
    console.log(message);
})

submission.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = e.target.elements.message.value;
    socket.emit('sendMessage', message);
})

