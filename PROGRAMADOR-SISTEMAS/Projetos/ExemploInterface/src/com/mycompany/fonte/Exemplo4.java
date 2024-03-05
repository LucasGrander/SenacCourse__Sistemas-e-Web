/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.fonte;

import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class Exemplo4 {
    public static void main (String args[]){
        Scanner s = new Scanner (System.in);
        
        int num1, num2;
        
        System.out.println("Infome o 1o  numero:");
        num1 = s.nextInt();
        
        System.out.println("informe o 2o numero:");
        num2 = s.nextInt();
        
        int soma = num1 + num2;
        
        System.out.println("O num1 informado foi: " + num1 + "\nO num2 informado foi: " + num2 + "\nA soma deles resultam em: "  + soma);
    }
}
