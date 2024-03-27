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
public class atv6 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int i, num;

        //o user poderá escolher qual tabuada irá ser projetada
        System.out.println("Escolha um numero parar descobrir sua tabuada");
        num = s.nextInt();

        //abaixo é somente estilo para deixar mais legal
        System.out.println("===============================================");
        System.out.println("Tabuada do numero: " + num);
        System.out.println("===============================================");

        //temos um loop, onde, enquanto 'i', que é 0, for menor que 10, ele ganhará +1 de valor
        for (i = 0; i <= 10; i++) {

            //int para o resultado e a conta do resultado, como é um loop, posso mostrar todas as contas realizada para o user, ou seja, (numEscolhido) x i... indo de 0 à 10
            int res;
            res = num * i;
            System.out.println(num + " x " + i + " = " + res);
        }
    }
}
