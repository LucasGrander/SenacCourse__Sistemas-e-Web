
package com.mycompany.produtos;

public class Produto {
    private int id;
    private String descricao;
    private Double preco;
    
    public Produto(int id, String descricao, Double preco) {
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

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public Double getPreco() {
        return preco;
    }
    
    @Override
    public String toString() {
        return "Produto{" + "id=" + id + ", descricao=" + descricao + ", preco=" + preco + '}';
    }
}