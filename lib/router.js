Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	path: '/',
	name: 'registerPage'
});

Router.route('/', {
	path: '/login',
	name: 'loginPage'
});

Router.route('/', {
	path: '/main',
	name: 'mainPage'
});

Router.route('/', {
	path: '/search',
	name: 'searchPage'
});