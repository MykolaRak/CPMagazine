Template.brandPage.events({
	'click div#backBtn': function (e, tmpl) {
		e.preventDefault();
		Router.go('mainPage');
	}
});