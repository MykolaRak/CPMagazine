Meteor.publish('Cars', function () {
	return Cars.find();
});

Meteor.publish('Models', function () {
	return Models.find();
});