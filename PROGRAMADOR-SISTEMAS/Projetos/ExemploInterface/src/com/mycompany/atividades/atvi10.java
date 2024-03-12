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
public class atvi10 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        //celsius é a entrada de dados do user e fahren é o valor da entrada convertido para fahreheit
        Float celsius, fahren;

        //entrada de temp dem Celsius
        System.out.println("Digite a temperatura em Celsius");
        celsius = s.nextFloat();

        //conta para a conversão
        fahren = (celsius * 9 / 5) + 32;

        //retornar resposta
        System.out.println("a temperatura em Fahreheit é: " + fahren + "F");
    }
}
