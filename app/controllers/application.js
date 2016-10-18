import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didCreateEditor(editor) {
      this._editor = editor;
    },
    insertText() {
      if (!this._editor) { return; }
      this._editor.insertText('some text...');
    },
    insertTextAtEnd() {
      if (!this._editor) { return; }
      this._editor.run(postEditor => {
        let tail = this._editor.post.tailPosition();
        postEditor.insertText(tail, 'text at the end...');
      });
    }
  }
});
