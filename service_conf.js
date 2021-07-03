var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço

var svc = new Service({
	//Nome do servico
	name: process.argv[3],
	//Descricao que vai aparecer no Gerenciamento de serviço do Windows
	description: process.argv[3],
	//caminho absoluto do seu script
	script: process.argv[4],
	scriptOptions: process.argv[5]
});

if(process.argv[2] == 'install'){
	svc.on('install',function(){
		svc.start();
	});

	// instalando o servico
	svc.install();
} else {
	svc.uninstall();
}