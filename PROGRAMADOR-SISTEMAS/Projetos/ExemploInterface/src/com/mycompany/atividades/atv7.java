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
public class atv7 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        int fatorial, i, fatorialRes;
        
        System.out.println("Escolha um numero para fatora-lo:");
        
        fatorial = s.nextInt();
        fatorialRes = fatorial;
        System.out.println("O fatorial de " + fatorialRes + " e: ");
        System.out.println("===============================");
        for (i = fatorial - 1; i > 0; i--) {
           fatorial *= i;
            System.err.println(fatorial);
        }
    }
}