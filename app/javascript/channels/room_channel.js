import consumer from "./consumer"

consumer.subscriptions.create( {channel: "RoomChannel", room_id: 5} , {
	connected() {
		console.log("connected")
	},

 



  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    const user_element = document.getElementById('user-id');
      const user_id = Number(user_element.getAttribute('data-user-id'));
  }
});
