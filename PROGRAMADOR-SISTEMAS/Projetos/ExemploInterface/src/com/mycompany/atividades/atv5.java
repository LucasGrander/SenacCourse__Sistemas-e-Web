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
public class atv5 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int num, i;

        //a lógica implatanda nesse code é: o user entrará com um Número para ser subtraído de forma constate até 0
        System.out.println("Escolha um numero para a contagem regressiva!");
        num = s.nextInt();

        //estilização no console
        System.out.println("Contagem: -->");

        //igual explicado acima, enquanto 'i', que recebe o valor que o user inserir, for maior ou igual a 0, iremos subtrair ele
        for (i = num; num >= 0; num--) {
            System.out.println(num);
        }
    }
}
