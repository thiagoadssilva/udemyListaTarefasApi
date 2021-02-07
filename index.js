const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa,
    removerTarefa,
    concluirTarefa
} = require('./controllers/gerenciador-tarefas');

const { 
    finalizarCompra,
    obterCidadePorEstado
 } = require('./controllers/mini-ecommerce.js');

const app = express();
const port = '3002';

//- Midleware que vai permitir que duas requisições aconteçam de urls diferentes.
app.use(cors());
//- Midleware para trabalhar com resposta de arquivo do tipo JSON.
app.use(bodyParser.json());

app.get('/gerenciador-tarefas', listarTarefas);
app.get('/gerenciador-tarefas/:id', listarTarefaId);
app.post('/gerenciador-tarefas', cadastrarTarefa);
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
app.delete('/gerenciador-tarefas/:id', removerTarefa);
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadePorEstado);

app.listen(process.env.PORT || port, () => console.log(`entrou ${port}`));