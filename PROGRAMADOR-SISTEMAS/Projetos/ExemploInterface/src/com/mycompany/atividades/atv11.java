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
public class atv11 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        int a, b;
        
        System.out.println("Num 1 da lista:");
        a = s.nextInt();
        
        System.out.println("Num 2 da lista:");
        b = s.nextInt();
       System.out.println( "======================================");
        if(a > b){
            System.out.println( a + " e maior que " +  b);
        }
        else if(a < b){
            System.out.println( b + " e maior que " +  a);
        }
        else{
            System.out.println("Os valores sao iguais!");
        }
    }
}
