import express from "express"; //importando o framework express

const app = express(); // instanciando o express

app.use(express.json()); // configurando o servidor para aceitar JSON

app.listen(4000, () => {
  // função que deixa nosso servidor rodando na porta 4000
  console.log("Server up and running on port: 4000");
});
