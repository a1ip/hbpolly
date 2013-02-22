if (Meteor.isClient) {
Template.hello.rendered = function () {
    $(".cs-text").lettering('words').children('span').lettering();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
