const argv = require('./config/yargs').argv;
const color = require('colors');
const toDo = require('./to-dos/to-dos');

let comando = argv._[0];

// console.log(argv);
switch (comando) {
	case 'crear':
		let task = toDo.crear(argv.description);
		console.log(task);
		break;

	case 'listar':
		let listado = toDo.getListado();

		for (let tarea of listado) {
			console.log('=================ToDos=============='.red);
			console.log(color.green(tarea.description));
			console.log('Estado: ', tarea.completado);
			console.log('===================================='.red);
		}

		break;

	case 'actualizar':
		let updateTask = toDo.update(argv.description, argv.completado);

		console.log(updateTask);

		break;

	case 'borrar':
		let borrar = toDo.remove(argv.description);
		console.log(borrar);
		break;

	default:
		console.log('comando no reconocido');
		break;
}
