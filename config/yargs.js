const description = {
	demand: true,
	alias: 'd',
	desc: 'Descripcion de la tarea por hacer',
};

const completado = {
	alias: 'c',
	default: true,
	type: 'boolean',
	desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
	.command('crear', 'Crea un elemento por hacer', {
		description,
	})
	.command('actualizar', 'Actualizar el estado de un todo', {
		description,
		completado,
	})
	.command('borrar', 'Borra un elemento por hacer', {
		description,
	})
	.help().argv;

module.exports = {
	argv,
};
