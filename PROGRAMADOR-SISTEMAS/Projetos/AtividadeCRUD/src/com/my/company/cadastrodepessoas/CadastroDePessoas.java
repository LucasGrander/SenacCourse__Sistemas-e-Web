package com.my.company.cadastrodepessoas;

public class CadastroDePessoas {
        private String nome;
        private String cpf;
        private String rg;
        private String bairro;
        private String rua;
        private int numCasa;
        private int idade;

    public CadastroDePessoas(String nome, String cpf, String rg, String bairro, String rua, int numCasa, int idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.bairro = bairro;
        this.rua = rua;
        this.numCasa = numCasa;
        this.idade = idade;
    }
    
//getter
    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getRg() {
        return rg;
    }

    public String getBairro() {
        return bairro;
    }

    public String getRua() {
        return rua;
    }

    public int getNumCasa() {
        return numCasa;
    }

    public int getIdade() {
        return idade;
    }
    
//setter
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public void setNumCasa(int numCasa) {
        this.numCasa = numCasa;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
    
//personalized messages
    public String toString() {
        return "Nome=" + nome + " | CPF=" + cpf + " | RG=" + rg + " | Idade=" + idade + " | Bairro=" + bairro + " | Rua=" + rua + " | Numero da Casa=" + numCasa + '}';
    }
    
    public String infomationPerson() {
        return "Nome=" + nome + " | CPF=" + cpf + " | RG=" + rg + " | Idade=" + idade + '}';
    }
    
    public String nomeOnly() {
        return nome;
    }
    
    public String locationPerson() {
        return "CadastroDePessoas{" + "Bairro=" + bairro + " | Rua=" + rua + " | Numero da Casa=" + numCasa + '}';
    }

  public CadastroDePessoas() {
    }
}