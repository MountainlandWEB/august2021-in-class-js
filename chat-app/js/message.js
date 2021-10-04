class Message {
  constructor(content, user) {
    this.id = Util.newGuid('message');
    this.content = content;
    this.user = user;
  }
}
