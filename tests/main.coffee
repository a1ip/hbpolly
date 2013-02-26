if Meteor.isClient
  Template.greetings.rendered = ->
    $(".cs-text").lettering("words").children("span").lettering()
  Meteor.flush
if Meteor.isServer
  Meteor.startup ->

