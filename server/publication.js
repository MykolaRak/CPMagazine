Meteor.publish('cars', function () {
	return cars.find();
});