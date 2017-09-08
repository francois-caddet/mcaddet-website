import './triangleButton.html';

Template.triangleButton.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.triangleButton.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.triangleButton.events({
  'click a'(event, instance) {
    // increment the counter when button is clicked
    event.preventDefault();
    instance.counter.set(instance.counter.get() + 1);
  },
});
