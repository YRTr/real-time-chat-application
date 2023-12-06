# a real time chatting application using websocket (socket.io)
running test cases on the 'real time chat application'

> Preamble :

server (emit) -> client (receive) -> acknowledgement -> server

client (emit) -> server (receive) -> acknowledgement -> client

> libraries :
- https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.1/mustache.min.js
- https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js
- https://cdnjs.cloudflare.com/ajax/libs/qs/6.11.2/qs.min.js

> npm modules/packages :

production dependencies =>
- express
- moment
- path
- socket.io
- bad-words

development dependencies =>
- mocha
- expect (Jest)
- nodemon
