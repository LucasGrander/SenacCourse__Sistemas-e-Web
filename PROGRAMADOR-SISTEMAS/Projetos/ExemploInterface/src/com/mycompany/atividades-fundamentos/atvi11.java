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
public class atvi11 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        // nesse code pegamos 2 ints para compararmos seus valores (declarados pelo user), e, verficar se eles possuem valores iguais, ou diferentes, sendo diferentes... Qual deles é maior
        int a, b;

        System.out.println("Num 1 da lista:");
        a = s.nextInt();

        System.out.println("Num 2 da lista:");
        b = s.nextInt();
        System.out.println("======================================");

        //Aqui se A for maior que B, então... print na resposta
        if (a > b) {
            System.out.println(a + " e maior que " + b);
        } //Aqui se A for menor que B, então... print na resposta
        else if (a < b) {
            System.out.println(a + " e menor que " + b);
        } //como na 1a explicação, se ninguém for maior... são iguais
        else {
            System.out.println("Os valores sao iguais!");
        }
    }
}
