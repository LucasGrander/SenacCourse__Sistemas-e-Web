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
public class atv2 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        //para calcularmos a média de notas, teremos 3 entradas de nota e a outra será devolvida de forma automática, sendo ela a media
        int num1, num2, num3, media;

        //entrada de notas 1, 2 e 3
        System.out.println("escolha o 1o numero:");
        num1 = s.nextInt();

        System.out.println("escolha o 2o numero:");
        num2 = s.nextInt();

        System.out.println("escolha o 3o numero:");
        num3 = s.nextInt();

        // aqui a média foi calculada com a soma das notas dividida pela quantia de notas somadas, logo abaixo foi aprensetado o resultado delas
        media = (num1 + num2 + num3) / 3;
        System.out.println("A média dos numeros e: " + media);
    }
}
