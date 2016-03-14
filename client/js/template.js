Template.image.helpers({
	images: function () {
		return['../img/image.jpg']
	}
});







Router.route('mainPage', {
	path: '/'
});

Router.route('brandPage', {
	path: '/brand'
});

Template.mainPage.events({
	'click button#badges_link': function (e, tmpl) {
		e.preventDefault();
		Router.go('brandPage');
	}
});

Template.brandPage.events({
	'click div#backBtn': function (e, tmpl) {
		e.preventDefault();
		Router.go('mainPage');
	}
});