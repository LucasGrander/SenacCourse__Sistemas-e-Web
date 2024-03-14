package com.mycompany.fonte.array;

import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author grander.3993
 */
public class exemploArray2 {

    public static void main(String[] args) {

        //Scanner para que o responsavel pela pesquisa possa verificar se aquela pessoa está autorizada
        Scanner s = new Scanner(System.in);
        System.out.println("Nome do convidado");
        String convidado = s.nextLine();

        //Array criada somente para fins de verificação
        String[] nomes = {"Lucas", "Ana", "Bia"};

        //esse laço serve para passarmos pela lista de nomes e realizar a comparação da Array com o nome do Convidade procurado
        for (int i = 0; i < nomes.length; i++) {
            if (nomes[i].equals(convidado)) {
                System.out.println(nomes[i] + " Nao e penetra!");
                System.exit(0);
            }
        }
        //caso passe por toda a lista e não encontre o convidade, ele será considerado penetra
        System.out.println(convidado + " e penetra!");
    }
}
