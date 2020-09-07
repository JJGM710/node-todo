const fs = require('fs');

let toDoList = [];

const saveDB = () => {
	let data = JSON.stringify(toDoList);

	fs.writeFile('db/data.json', data, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
};

const loadDB = () => {
	try {
		toDoList = require('../db/data.json');
	} catch (error) {
		toDoList = [];
	}
};

const crear = (description) => {
	loadDB();

	let toDo = {
		description: description,
		completado: false,
	};

	toDoList.push(toDo);
	saveDB();
	return toDo;
};

const getListado = () => {
	loadDB();

	return toDoList;
};

const update = (desc, update = true) => {
	loadDB();

	let index = toDoList.findIndex((tarea) => desc === tarea.description);

	if (index >= 0) {
		toDoList[index].completado = update;
		saveDB();
		return true;
	} else {
		return false;
	}
};

const remove = (desc) => {
	loadDB();

	let removeToDos = toDoList.filter((tarea) => desc !== tarea.description);

	if (removeToDos.length < toDoList.length) {
		toDoList = removeToDos;
		saveDB();
		return true;
	} else {
		return false;
	}
};

module.exports = {
	crear,
	getListado,
	update,
	remove,
};
