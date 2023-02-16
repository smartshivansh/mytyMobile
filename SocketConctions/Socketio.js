import { io } from "socket.io-client";



// const url = api;
const url = `https://locallearn.in`;
// const url = `http://doornextshop.com`;

class WSconnection {
  constructor() { }

  async init() {
    try {
      this.socket = io(url);

      this.socket.on("connect", (data) => {
        console.log("socket connected");

        this.socket.on("msgres", (args)=>{
            console.log(args)
        })
      });

      this.socket.emit("msgres","hello");

      this.socket.on("disconnect", (data) => {
        console.log("socket disconnected, reconneting...");
        this.socket.connect();
      });

      this.socket.on("error", (data) => {
        console.log("socekt error", data);
      });
    } catch (error) { }
  }

  async send(message) {
    try {
      this.socket.emit("SendMessage", { text: message });


    } catch (error) { }
  }

  async receive(receiver) {
    try {
      this.socket.on("send-msg-response", (data) => {
        receiver(data);
      });
    } catch (error) { }
  }
}

const ws = new WSconnection();
ws.init();

export default ws;



