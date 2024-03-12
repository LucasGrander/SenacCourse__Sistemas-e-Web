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
public class atv4 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int num1, num2, res, type;

        //só para fins de menu o print abaixo, onde o user poderá vizualizar as opções de conta
        System.out.println("Selecione a operacao \n"
                + "1 - Soma\n"
                + "2 - Subtracao\n"
                + "3 - Multiplicacao\n"
                + "4 - Divisao\n");

        //o num da conta irá ser armazenado aqui
        type = s.nextInt();

        //se o num for maior que 4 ou menor que 0, então o sistema irá ser finalizado, pois, não há essas opções
        if (type > 4 || type < 0) {
            System.out.println("Erro de digitação ou você escolheu uma sigla inexistente!");
            System.exit(0);
        }

        //valor1 para a conta
        System.out.println("Escolha o 1o numero:");
        num1 = s.nextInt();

        //valor2 para a conta
        System.out.println("Escolha o 2o numero:");
        num2 = s.nextInt();

        //agora temos 4 verficações, onde, se 1 é soma, 2 - subtração, 3 multipliic e 4- divisão, conforme o tipo, irá realizar sua conta
        if (type == 1) {
            res = num1 + num2;
            System.out.println("O resultado é: " + res);
        } else if (type == 2) {
            res = num1 - num2;
            System.out.println("O resultado é: " + res);
        } else if (type == 3) {
            res = num1 * num2;
            System.out.println("O resultado é: " + res);
        } else if (type == 4) {
            res = num1 / num2;
            System.out.println("O resultado é: " + res);
        }
    }
}
