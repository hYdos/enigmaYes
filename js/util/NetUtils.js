const socket = new WebSocket("localhost:34095")

let debugConnection = false;

socket.onopen = function (event) {
  $("#connectionalert").show()
  const msg = {
    username: "user",
    password: "pass",
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
