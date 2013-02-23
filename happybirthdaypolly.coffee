if Meteor.isClient
  Template.hello.rendered = ->
    $(".cs-text").lettering("words").children("span").lettering()
if Meteor.isServer
  Meteor.startup ->


# code to run on server at startup
