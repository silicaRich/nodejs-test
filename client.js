<script src="https://cdn.socket.io/socket.io-1.1.0.js"></script>
<script>
  var socket = io('http://localhost');
  socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });
</script>