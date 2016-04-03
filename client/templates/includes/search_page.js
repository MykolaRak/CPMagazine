Template.cars.helpers({
	car: function () {
		return['car1', 'car2', 'car3', 'car4', 'car5']
	}
});

Template.models.helpers({
	model: function () {
		return
	}
});

Template.years.helpers({
	year: function () {
		return
	}
});

Meteor.subscribe('cars');

Template.searchPage.events({
	'change #brand': function() {
		var sel = document.getElementById("brand");
		var select = sel.options[sel.selectedIndex].text;
	}
});

