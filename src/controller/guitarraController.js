import { Router } from "express";
import {alterarinformacoes, buscarPorId, buscarPorModelo, inserirGuitarra, listarGuitarras, removerguitarra } from "../repository/guitarraRepository.js";

const server = Router();

server.post('/guitarra', async (req, resp) => {
    try {
        const novaguitarra = req.body;
        
        const guitarraInserida = await inserirGuitarra(novaguitarra);
        resp.send(guitarraInserida);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/guitarra', async (req, resp) => {
    try {
        const resposta = await listarGuitarras();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/guitarra/busca', async (req, resp) => {
    try {
      const { modelo } = req.query;
        
      const resposta = await buscarPorModelo(modelo);
  
      resp.send(resposta);
      
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  })
 
  server.get('/guitarra/:id', async (req, resp) => {
    try {
      const id = Number(req.params.id);
      
      const resposta = await buscarPorId(id);
  
      resp.send(resposta);
  
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  })

server.put('/guitarra/:id', async (req, resp) => {
    try {

        const { id } = req.params;
        const guit = req.body;
       
        const resposta = await alterarinformacoes(id, guit);
        
        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
  



server.delete('/guitarra/:id', async (req, resp) => {
    try {
      const { id } = req.params;
  
      const resposta = await removerguitarra(id);
        
      resp.status(204).send();
      
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  })

  export default server;