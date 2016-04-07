Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/register', {
	path: '/',
	name: 'registerPage'
});

Router.route('/login', {
	path: '/login',
	name: 'loginPage'
});

Router.route('/main', {
	path: '/main',
	name: 'mainPage'
});

Router.route('/search', {
	path: '/search',
	name: 'searchPage'
});