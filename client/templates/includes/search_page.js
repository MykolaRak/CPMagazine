Template.searchPage.events({
	'click div#backBtn': function (e, tmpl) {
		e.preventDefault();
		Router.go('mainPage');
	}
});

Template.cars.helpers({
	car: function () {
		return['car1', 'car2', 'car3', 'car4', 'car5']
	}
});

Template.models.helpers({
	model: function () {
		return[]
	}
});

Template.years.helpers({
	year: function () {
		return[]
	}
});

Meteor.subscribe('cars');



