class Chat {
  constructor(name, messages = []) {
    this.id = Util.newGuid('chat');
    this.name = name;
    this.messages = messages;
  }

  addMessage(message) {
    this.messages.push(message);
  }
}
