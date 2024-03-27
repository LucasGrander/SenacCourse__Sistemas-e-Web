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
public class atv7 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int fatorial, i, fatorialRes;

        //entrada de num para o user ver sua fatoração
        System.out.println("Escolha um numero para fatora-lo:");

        fatorial = s.nextInt();

        //atribuido uma nova 'var' para o valor do user
        fatorialRes = fatorial;
        System.out.println("O fatorial de " + fatorialRes + " e: ");
        System.out.println("===============================");

        //verficação do tipo: i é igual ao num que o user inseriu - 1, se i foi maior que 0, então subtrai  1 de i
        for (i = fatorial - 1; i > 0; i--) {

            //conta do fatorial, exemplicada
            fatorial *= i;

            //retorno de resultado para o user, de forma simplicada
            System.err.println(fatorial);
        }
    }
}
