class Message {
  constructor(text, created = Date.now()) {
      this.text = text;
      this.created = created;
    }

  set text(text) {
      if (text === 'ok') {
          this._text = text + ' okok';
        }
    }

  get text() {
      return this._text;
    }

  set created(created) {
      this._created = created;
    }

  get created() {
      return this._created;
    }

  toString() {
      return `this is a message: ${this.text}, created at: ${this.created}`;
    }
}

class ImageMessage extends Message {

}

var messageProto = {
  text: 'new',
  created: Date.now()
};

var emptyMessage = new Message('ok');
var photoMessage = new ImageMessage('ok');

console.log(emptyMessage);
console.log(photoMessage);