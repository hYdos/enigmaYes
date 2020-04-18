const socket = new WebSocket("localhost:34095")

let debugConnection = false;

socket.onopen = function (event) {
  const msg = {
    username: "e",
    password: "f",
  };

  socket.send(JSON.stringify(msg));
};

socket.onclose = function (ev){
  close()
}

socket.onmessage = function (event) {
  if(debugConnection)console.log(event.data);
  parse(event.data);
}
