import { createWidget } from 'discourse/widgets/widget';
createWidget('my-widget', {
  tagName: 'div.hello',
  html() {
    return "hello world";
  }
});