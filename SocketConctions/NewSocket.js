import { io } from "socket.io-client"

const socket = io("http://doornextshop.com");

const IPv4 = "fferf";
const value = ""

const formSubmitHandler = (e) => {
    e.preventDefault();

    socket.emit("msgTextReq", {IPv4: IPv4, msg:value, text: "Human:" + value + " " + "AI:"})
}


socket.on("msgTextRes", function(data){

    response = data.response;
})
