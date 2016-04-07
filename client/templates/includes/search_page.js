Template.searchPage.onCreated(function () {
  this.brand = new ReactiveVar('');
  this.model = new ReactiveVar('');
  Meteor.subscribe('Cars');
  Meteor.subscribe('Models');
});

Template.searchPage.helpers({
  cars: function () {
    return Cars.find();
  },
  models: function () {
    if (!Template.instance().brand.get()) {
      return false
    }
    var car = Cars.findOne({name: Template.instance().brand.get()})._id;
    return Models.find({id: car});
  },
  years: function () {
    if (!Template.instance().model.get()) {
      return false
    }
    return Models.findOne({name: Template.instance().model.get()}).years;
  }
});

Template.searchPage.events({
  'change #brand': function (e, tpl) {
    tpl.find('#years').selectedIndex = 0;
    var sel = tpl.find('#brand');
    tpl.brand.set(sel.options[sel.selectedIndex].text);
  },
  'change #model': function (e, tpl) {
    var sel = tpl.find('#model');
    tpl.model.set(sel.options[sel.selectedIndex].text);
  }
});
