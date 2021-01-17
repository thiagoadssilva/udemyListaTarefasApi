const uuidv4 = require('uuid');

let tarefas = [
    { id: '1', nome: 'Thiago jose da silva', concluida: true },
    { id: '2', nome: 'Maria Dineia da silva', concluida: true },
    { id: '3', nome: 'Bento jose da silva', concluida: false },
    { id: '4', nome: 'DEUS acima de tudo!!', concluida: false },
];

function listarTarefaId(req, res) {
    const id = req.params.id;
    const tarefa = tarefas.filter(tarefa => tarefa.id === id);

    if (tarefa.length === 0) {
        res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.json(tarefa[0]);
}

module.exports = {
    listarTarefaId
}