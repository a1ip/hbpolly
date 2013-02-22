if (Meteor.isClient) {
Template.hello.letters = function () {
    $(".cs-text").lettering('words').children('span').lettering();
    if (typeof console !== 'undefined')
        console.log("You pressed the button");
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
