class Chat {
  constructor(name, messages = [], id = Util.newGuid('chat')) {
    this.id = id;
    this.name = name;
    this.messages = messages;
  }

  addMessage(message) {
    this.messages.push(message);
  }
}
