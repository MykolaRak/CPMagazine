Template.mainPage.events({
	'click button#badges_link': function (e, tmpl) {
		e.preventDefault();
		Router.go('brandPage');
	}
});