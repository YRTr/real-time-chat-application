# a real time chatting application using websocket (socket.io)
running test cases on the 'real time chat application'

> Preamble :

server (emit) -> client (receive) -> acknowledgement -> server

client (emit) -> server (receive) -> acknowledgement -> client


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
