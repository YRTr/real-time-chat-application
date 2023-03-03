const socket = io();

// Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $shareLocationButton = document.querySelector('#share-location');
const $messages = document.querySelector('#messages');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML;

// Options
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})


socket.on('message', (message) => {
    console.log(message);
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

socket.on('locationMessage', (message) => {
    console.log(message)
    const html = Mustache.render(locationMessageTemplate, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //disable the button
    $messageFormButton.setAttribute('disabled', 'disabled');

    const message = e.target.elements.message.value;

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value='';
        $messageFormInput.focus();

        if(error){
            return console.log(error)
        } 
        console.log('The message was delivered');
    });
});

$shareLocationButton.addEventListener('click', () => {
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by you browser');
    }
    $shareLocationButton.setAttribute('disabled', 'disabled');
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            $shareLocationButton.removeAttribute('disabled')
            console.log('Location shared!');
        })
    })
})

socket.emit('join', { username, room }, (error) => {
    if(error){
        alert(error);
        location.href = '/'
    }
});