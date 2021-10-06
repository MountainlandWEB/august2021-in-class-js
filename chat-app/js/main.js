const CHATS = 'chats';

const existingChats = retrieve();
const user1 = new User('crazyWaffles');
const user2 = new User('fresh4days');
let chats = [];
let currentChat;
const users = [user1, user2];

if (!existingChats) {
  currentChat = new Chat('PoGo');
  currentChat.addMessage(new Message('Hi!', user1.username));
  currentChat.addMessage(new Message('Hello!', user2.username));

  chats.push(
    currentChat,
    new Chat('School', [new Message("What's up?", user1.username)])
  );
} else {
  chats = existingChats;
  currentChat = chats[0];
}

render();
save();

function render() {
  // chat name
  document.getElementById('current-chat-name').innerText = currentChat.name;
  // chats
  let chatHtml = '<ul class="list-group">';
  chats.forEach((chat) => {
    chatHtml += `<li class="list-group-item">${chat.name}</li>`;
  });
  chatHtml += '</ul>';
  document.getElementById('chats').innerHTML = chatHtml;

  let chatWindowHtml = '';
  currentChat.messages.forEach((message) => {
    chatWindowHtml += `
    <div class="chat-message">
        <div>${message.content}</div>
        <div class="message-username">${message.user}</div>
    </div>`;
  });

  document.getElementById('chat-window').innerHTML = chatWindowHtml;

  let usersHtml = '';

  users.forEach((user) => {
    usersHtml += `<div class="mt-1 mx-1">
      <label id="label-${user.username}" for="${user.username}">${user.username}</label>
      <input type="text" id="${user.username}" />
      <button class="btn btn-primary" onclick="addNewMessage('${user.username}')">Send</button>
      </div>`;
  });

  document.getElementById('users').innerHTML = usersHtml;
}

function addNewMessage(username) {
  const content = document.getElementById(username).value;
  currentChat.addMessage(new Message(content, username));
  render();
  save();
}

function save() {
  const chatsString = JSON.stringify(chats);
  localStorage.setItem(CHATS, chatsString);
}

function retrieve() {
  const chatsString = localStorage.getItem(CHATS);
  const chatsObject = JSON.parse(chatsString);

  if (chatsObject) {
    const typedObjects = chatsObject.map((chat) => {
      let typedMessages = chat.messages.map(
        (message) => new Message(message.content, message.user)
      );
      let typedChat = new Chat(chat.name, typedMessages);
      return typedChat;
    });

    return typedObjects;
  }
}
