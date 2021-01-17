const express = require('express');
const bodyParsert = require('body-parser');
const cors = require('cors');

const { 
    listarTarefaId,
    listarTarefas 
} = require('./controllers/gerenciador-tarefas');

const app = express();
const port = '3001';

//- Midleware que vai permitir que duas requisições aconteçam de urls diferentes.
app.use(cors());
//- Midleware para trabalhar com resposta de arquivo do tipo JSON.
app.use(bodyParsert.json());

function funcaoNaoImplementada(req, res) {
    res.status(501).json({ erro: 'Função não implementada' });
};

app.get('/gerenciador-tarefas', listarTarefas);
app.get('/gerenciador-tarefas/:id', listarTarefaId);
app.post('/gerenciador-tarefas', funcaoNaoImplementada);
app.put('/gerenciador-tarefas/:id', funcaoNaoImplementada);
app.delete('/gerenciador-tarefas/:id', funcaoNaoImplementada);
app.put('/gerenciador-tarefas/:id/concluir', funcaoNaoImplementada);

app.listen(port, () => console.log(`entrou ${port}`));