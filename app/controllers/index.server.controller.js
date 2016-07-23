/*This file was made to render the index page, reason being the EJS requires
to be rendered and can't be sent like regular html*/
exports.render = function(req, res) {
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);//recollect time visited
	}

	req.session.lastVisit = new Date();//record new time

	res.render('index', {
		title: 'Hello World',//title to be passed along to the EJS file
		name: 'Jonathan Beltran',//Name for welcome message
		userFullName: req.user ? req.user.fullName: ''
	});
};
