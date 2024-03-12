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
public class atv8 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        //bem simples, 3 ints, para serem usadas no code
        int num, verif, verif2;

        //o user entrará com o valor de num
        System.out.println("Digite um numero para saber se ele e primo");
        num = s.nextInt();

        //aqui temos 2 verficações, onde a primeira verifica se o valor inserido pelo user pode ser par (resto 0 na divisão por 2)
        verif = num % 2;

        //e a segunda verifica se o valor inserido pelo user pode ser ímpar (resto 0 na divisão por 3)
        verif2 = num % 3;

        //como esses 2 números são os menores multiplos comuns dos demais numeros, essas verificação se torna possível
        //essa verificação foi bem específica, pois, o 2 é o ÚNICO numero PAR que é primo...
        if (num == 2) {
            System.out.println("Esse numero e primo!");
        } //se verif for 0 OU verif2 for 0, Não será primo.
        else if (verif == 0 || verif2 == 0) {
            System.out.println("Esse numero nao e primo!");
        } //caso ele chegue até aqui... não é o próprio 2 e nem pode ser simplificado por 2 e nem por 3... Teremos um num primo
        else {
            System.out.println("Esse numero e primo!");
        }
    }
}
