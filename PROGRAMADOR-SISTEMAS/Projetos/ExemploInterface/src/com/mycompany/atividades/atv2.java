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
        
        int num1, num2, num3, media;
        
        System.out.println("escolha o 1o numero:");
        num1 = s.nextInt();
        
        System.out.println("escolha o 1o numero:");
        num2 = s.nextInt();
        
        System.out.println("escolha o 1o numero:");
        num3 = s.nextInt();
        
        media = (num1 + num2 + num3) / 3;
        System.out.println("A média dos numeros e: " + media);
    }
}
