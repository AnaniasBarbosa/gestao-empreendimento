import express, { Request, Response }  from 'express';
import servicoRoutes from './routers/servico.routes';
import atendimentoRoutes from './routers/atendimento.routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/servicos', servicoRoutes);
app.use('/atendimentos', atendimentoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo à API de Manicure Empreendedora!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;