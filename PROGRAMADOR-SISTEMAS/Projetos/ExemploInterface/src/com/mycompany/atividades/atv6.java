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
public class atv6 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
       
        int i, num;
        
        System.out.println("Escolha um numero parar descobrir sua tabuada");
        num = s.nextInt();
        
        System.out.println("===============================================");
         System.out.println("Tabuada do numero: " + num);
         System.out.println("===============================================");
        for(i = 0; i <= 10; i++){
            int res;
            res = num * i;
            System.out.println(num + " x "  + i  + " = " + res);
        }
    }
}