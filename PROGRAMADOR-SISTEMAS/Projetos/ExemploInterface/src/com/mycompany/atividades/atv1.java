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
public class atv1 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int x, y, res;
        System.out.println("Informe o 1o numero:");
        x = s.nextInt();
        
        System.out.println("Informe o segundo numero:");
        y = s.nextInt();
                
        res = x + y;
        
        System.out.println("A soma e igual a: " +  res);
    }
}
