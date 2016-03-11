Template.image.helpers({
	images: function () {
		return['../img/image.jpg']
	}
});

Template.badge.helpers({
	badges: function () {
		return['../img/toyota.jpg',
			   '../img/merc.jpg',
			   '../img/honda.jpg',
			   '../img/volks.jpg',
			   '../img/caddi.jpg',
			   '../img/ford.jpg']
	}
});

Template.text.helpers({
	texts: function () {
		return['Toyota', 'Mercedes-Benz', 'Honda', 'Volkswagen', 'Cadillac', 'Ford']
	}
});