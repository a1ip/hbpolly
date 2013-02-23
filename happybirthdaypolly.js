if (Meteor.isClient) {
Template.hello.rendered = function() {
  return $(".cs-text").lettering("words").children("span").lettering();
};
}

if (Meteor.isServer) {
Meteor.startup(function() {});
}
