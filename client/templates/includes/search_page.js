Template.cars.helpers({
	cars: function() {
    return cars.find();
  }
});

Template.models.helpers({
	model: function() {
    var model = cars.findOne({name: Session.get('select')});
    return model.models;
  }
});

Template.years.helpers({
	year: function() {
    var model = cars.find({name: Session.get('select')}, {"models.name": 1}).fetch();
    for(var k in model[0].models) {
      if(model[0].models.hasOwnProperty(k)) {
        if (model[0].models[k].name === Session.get('model')) {
          return model[0].models[k].year;
        }
      }
    }
  }
});

Meteor.subscribe('cars');

Template.searchPage.events({
  'change #brand': function() {
    var sel = document.getElementById("brand");
    Session.set('select', sel.options[sel.selectedIndex].text)
  },
  'change #model': function() {
    var sel = document.getElementById("model");
    Session.set('model', sel.options[sel.selectedIndex].text)
  }
});

