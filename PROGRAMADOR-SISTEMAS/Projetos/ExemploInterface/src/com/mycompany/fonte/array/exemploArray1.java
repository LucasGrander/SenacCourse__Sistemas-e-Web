/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.fonte.array;

import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class exemploArray1 {

    public static void main(String[] args) {

        //aqui abaxo declaramos que nossa array terão 5 itens, enumerados de 0 - 4
        int[] numbers = new int[5];

        //para fins de estudo de como funciona as 'casas' da Array, temos a exemplificação abaixo, onde, os valores dentro dessa Array estão em sequência, e a Array está respeitando sua régra
        numbers[0] = 1;
        numbers[1] = 2;
        numbers[2] = 3;
        numbers[3] = 4;
        numbers[4] = 5;
        int i = 0;

        //while serve para: Enquanto i for menor que o tamanho da Array numbers, o code continuará sendo aplicado... Mostrando o 'sout', e, após,  i++.
        while (i < numbers.length) {
            System.out.println("O numero " + numbers[i] + "esta no indice " + "[" + i + "]");
            i++;
        }
    }
}
