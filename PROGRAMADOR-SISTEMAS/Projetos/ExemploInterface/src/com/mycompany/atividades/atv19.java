/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.atividades;

import java.util.Scanner;

/**
 *
 * @author lucas
 */
public class atv19 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        Float nota1, nota2, nota3;
        Float peso1, peso2, peso3;
        Float media,mediaPonderada;
        
        System.out.println("Digite a nota de Exatas:");
        nota1 = s.nextFloat();
        System.out.println("Qual o peso da nota de Exatas?");
        peso1 = s.nextFloat();
        
        System.out.println("Digite a nota de Humanas:");
        nota2 = s.nextFloat();
        System.out.println("Qual o peso da nota de Humanas?");
        peso2 = s.nextFloat();
        
        System.out.println("Digite a nota da Redacao:");
        nota3 = s.nextFloat();
        System.out.println("Qual o peso da nota de Exatas?");
        peso3 = s.nextFloat();
        
        media = (nota1 + nota2 + nota3) / 3;
        
        mediaPonderada = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3)) / (peso1 + peso2 + peso3);
        System.out.println("===============================================");
         System.out.println("O valor da media simples e de : " + media + " !!");
         System.out.println("--------------------------------------------------------------------");
         System.out.println("O valor da media ponderada e de : " + mediaPonderada + " !!");
         System.out.println("===============================================");
    }
}
