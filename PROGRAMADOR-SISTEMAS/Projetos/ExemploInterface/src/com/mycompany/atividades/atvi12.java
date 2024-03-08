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
public class atvi12 {
    public static void main(String[] args) {
         int x, num1, num2;
    Scanner s = new Scanner(System.in);
    System.out.println("Escolha um valor para X !");
    x = s.nextInt();
    
    System.out.println("Escolha um valor para somar com  X !");
    num1 = s.nextInt();
    x = x + num1;
    
    System.out.println("Escolha um valor para somar novamente !");
    num2 = s.nextInt();
    x = x + num2;
    
        System.out.println("O valor final de X e: " + x);
    }
}
