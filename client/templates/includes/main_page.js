Template.mainPage.events({
	'click button#badges_link': function (e, tmpl) {
		e.preventDefault();
		Router.go('searchPage');
	}
});

Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('loginPage');
    }
});