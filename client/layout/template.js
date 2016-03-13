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

Router.route('mainpage', {
	path: '/'
});

Router.route('badgespage', {
	path: '/badges'
});

Template.mainpage.events({
	'click button#badges_link': function (e, tmpl) {
		e.preventDefault();
		Router.go('badgespage');
	}
});