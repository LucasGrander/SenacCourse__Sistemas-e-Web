package com.mycompany.produto;

public class Produto {
    private int id;
    private String descricao;
    private double preco;

    public Produto(int id, String descricao, double preco) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return "Produto{" + "id=" + id + ", descricao=" + descricao + ", preco=" + preco + '}';
    }

    public Produto() {
    }
}
