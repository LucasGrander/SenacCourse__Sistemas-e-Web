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
public class atvi17 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        //calculo de imc com floats, pois, altura e peso podem possuir decimais
        float peso, altura, alturax2, imc;

        System.out.println("Qual e sua altura?");
        altura = s.nextFloat();

        System.out.println("Qual e o seu peso?");
        peso = s.nextFloat();

        //realizando uma potencia simples
        alturax2 = altura * altura;

        //calculo da formula de imc
        imc = peso / alturax2;

        //resultado final do IMC
        System.out.println("O seu IMC e: " + imc);
    }
}
