const user1 = new User('crazyWaffles');
const user2 = new User('fresh4days');

const chats = [];

let currentChat = new Chat('PoGo');
currentChat.addMessage(new Message('Hi!', user1.username));
currentChat.addMessage(new Message('Hello!', user2.username));

chats.push(currentChat);

function render() {
    
}
