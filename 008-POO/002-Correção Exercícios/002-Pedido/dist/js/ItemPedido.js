"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    constructor(cod, descricao, valor, qtd) {
        this.cod = cod;
        this.descricao = descricao;
        this.valor = valor;
        this.qtd = qtd;
    }
    //Métodos de Acesso 
    getCod() {
        return this.cod;
    }
    getDescricao() {
        return this.descricao;
    }
    getValor() {
        return this.valor;
    }
    getQtd() {
        return this.qtd;
    }
    setCod(cod) {
        this.cod = cod;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setValor(valor) {
        this.valor = valor;
    }
    setQtd(qtd) {
        this.qtd = qtd;
    }
}
exports.ItemPedido = ItemPedido;
