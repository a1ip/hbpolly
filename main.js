if (Meteor.isClient) {
Template.greetings.rendered = function() {
  return $(".cs-text").lettering("words").children("span").lettering();
};
}

if (Meteor.isServer) {
Meteor.startup(function() {});
}
