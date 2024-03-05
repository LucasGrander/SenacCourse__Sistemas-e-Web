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
public class atv5 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        int num, i;
        
        System.out.println("Escolha um numero para a contagem regressiva!");
        num  = s.nextInt();
        System.out.println("Contagem: -->");
        
        for(i = num; num >= 0 ; num--){
            System.out.println(num);
        }
    }
}
