const express = require('express');
const router = express.Router();


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const name = req.body?.name?.toString().trim();
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "Por favor, forneça um nome válido" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, person: newPerson });
};

const createPersonPostman = (req, res) => {
    const name = req.body?.name?.toString().trim();
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "Por favor, insira um nome correto" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, data: people });
  };

const updatePerson = (req, res) => {
    const id = Number(req.params.id);
    const name = req.body?.name?.toString().trim();
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "Por favor, forneça um valor de nome" });
    }
    const personIndex = people.findIndex((p) => p.id === id);
    if (personIndex === -1) {
      return res
        .status(404)
        .json({ success: false, msg: `Nenhuma pessoa com id ${id}` });
    }
    people[personIndex].name = name;
    res.status(200).json({ success: true, data: people });
  };

const deletePerson = (req, res) => {
    const id = Number(req.params.id);
    const person = people.find((p) => p.id === id);
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `Nenhuma pessoa com id ${id}` });
    }
    people = people.filter((p) => p.id !== id);
    res.status(200).json({ success: true, data: people });
  };

module.exports = { 
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
 }