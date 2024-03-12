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
public class atv3 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int numVerif, verif;
        //entrada de dados do user, onde ele irá escolher um número para verficar se o mesmo é ímpar ou par
        System.out.println("Escolha um numero para verificar se e impar ou par");
        numVerif = s.nextInt();

        //essa verficação é feita usando '%', que calcula o resto da divisão... Se o resto for 0, o número pode ser dividido por 2, logo, ele é par
        verif = numVerif % 2;

        if (verif == 0) {
            System.out.println("o numero e par");
        } //caso o resto não seja 0, o num escolhido é ímpar
        else {
            System.out.println("o numero e impar");
        }
    }
}
