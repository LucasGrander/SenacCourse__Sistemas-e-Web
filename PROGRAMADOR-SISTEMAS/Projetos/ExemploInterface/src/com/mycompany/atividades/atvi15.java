/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.atividades;

import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class atvi15 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int nota1, nota2, nota3, nota4;
        int media, soma;

        //entrada de dados
        System.out.println("Digite a nota de matematica:");
        nota1 = s.nextInt();

        System.out.println("Digite a nota de portugues:");
        nota2 = s.nextInt();

        System.out.println("Digite a nota de historia:");
        nota3 = s.nextInt();

        System.out.println("Digite a nota de geografia:");
        nota4 = s.nextInt();

        soma = nota1 + nota2 + nota3 + nota4;

        //realização da media normal
        media = soma / 4;

        
        //devolução da respostas e verficar se ele passa de ano, ou seja, meida maior ou igual que 7
        if (media >= 7) {
            System.out.println("O aluno passou de ano com a media de : " + media + " !!");
        } else {
            System.out.println("O aluno reprovou de ano com a media de : " + media + " !!");
        }

    }
}
