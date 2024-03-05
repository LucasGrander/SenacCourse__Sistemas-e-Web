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
public class atv17 {
    public static void main(String[] args) {
        Scanner s = new Scanner (System.in);
        
        float peso, altura, alturax2, imc;
        
        System.out.println("Qual e sua altura?");
        altura  = s.nextFloat();
        
        System.out.println("Qual e o seu peso?");
        peso  = s.nextFloat();
        
        alturax2 = altura * altura;
        
        imc = peso / alturax2;
        
        System.out.println("O seu IMC e: " + imc);
    }
}
