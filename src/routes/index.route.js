// index.route.js
import express from "express";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Hello World"})
  })

  app.use(
    express.json(),
    // novas rotas
  )
}

export default routes;