import express, { Request, Response }  from 'express';
import servicoRoutes from './routers/servico.routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/servicos', servicoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;