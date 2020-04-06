var http = require('http');

/* 200405 partie 4*/
var url = require('url');

/* 200406 partie 6*/
var querystring = require('querystring');

var server = http.createServer(function(req, res){
	/* 200403 partie 1
	res.writeHead(200);
	res.end('Salut tout le monde !');*/

	/* 200405 partie 2
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>')*/

	/* 200405 partie 3
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html>'+
'<html>'+ 
'	<head>'+
'		<meta charset="utf-8"/>'+ 
'		<title>Ma page Node.js !</title>'+ 
'	</head>'+ 
'	<body>'+ 
'		<p>Voici un paragraphe <strong>HTML</strong> !</p>'+ 
'	</body>'+ 
'</html>');
	res.end();*/

	/* 200405 partie 4 
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write('Bien le bonjour');
	res.end();*/

	/* 200405 partie 5
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain"});
	if(page == '/'){
		res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
	}
	else if(page == '/sous-sol'){
		res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
	}
	else if(page == '/etage/1/chbre'){
		res.write('Hé ho, c\'est privé ici !');
	}
	res.end();*/

	/* 200406 partie 6
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200, {"Content-Type": "text/plain"});
	if('prenom' in params && 'nom' in params){
		res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
	}
	else{
		res.write('Vous devez bien avoir un prénom et un nom, non ?');
	}
	res.end();*/

	/* 200406 partie 7
	Afficher un message d'erreur si le visiteur demande une page inconnue.
	Ne pas oublier de renvoyer un code d'erreur 404 !
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain"});
	if(page == '/sous-sol'){
		res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
	}
	else if(page == "/rez-de-chausse"){
		res.write('Vous êtes au rez de chaussé');
	}
	else{
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.write(" !!!!! ERREUR 404 La page n'existe pas !!!!!!");
	}
	res.end();*/

	/* 200406 partie 8 */
	res.writeHead(200);
	res.end('Salut tout le monde !');

});

server.on('close', function(){
	console.log('Bye bye !');
})
server.listen(3000);

server.close();