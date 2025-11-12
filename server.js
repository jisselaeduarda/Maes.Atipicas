import express from 'express';
import dotenv from 'dotenv';
import connection from './src/db.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor do projeto Mães Atípicas está rodando 💜');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
});
