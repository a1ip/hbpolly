root = global ? window
 
if root.Meteor.is_client
  root.Template.greetings.rendered = ->
    $(".cs-text").lettering("words").children("span").lettering();