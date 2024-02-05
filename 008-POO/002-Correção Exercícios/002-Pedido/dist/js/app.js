"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const ItemPedido_1 = require("./ItemPedido");
const Pedido_1 = require("./Pedido");
let nome = "Joao"; //document.getElementById(idNome).value
let cliente = new Cliente_1.Cliente(nome, "000.000.001-01", "09.098.987-2", "(47)9887-0989");
let itemPedido1 = new ItemPedido_1.ItemPedido(1, "Lapis", 2.50, 5);
let itemPedido2 = new ItemPedido_1.ItemPedido(2, "Caneta", 4.55, 3);
let itemPedido3 = new ItemPedido_1.ItemPedido(3, "Caderno", 10.76, 2);
let itemPedido4 = new ItemPedido_1.ItemPedido(4, "Borracha", 2.50, 1);
let itensPedido = [];
itensPedido.push(itemPedido1);
itensPedido.push(itemPedido2);
itensPedido.push(itemPedido3);
itensPedido.push(itemPedido4);
let pedido = new Pedido_1.Pedido(34, cliente, itensPedido);
//fetch()
console.log(JSON.stringify(pedido));
console.log('NOME CLIENTE: ' + pedido.getCliente().getNome());
console.log(pedido);
console.log('Valor Total: ' + pedido.calculaValorTotal());
let itemPedido5 = new ItemPedido_1.ItemPedido(5, "Cola Branca", 5.50, 10);
pedido.addItemPedido(itemPedido5);
console.log(pedido);
console.log('Valor Total: ' + pedido.calculaValorTotal());
