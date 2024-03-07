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
public class atv8 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        int num, verif, verif2;
        
        System.out.println("Digite um numero para saber se ele e primo");
        
        num = s.nextInt();
        
        verif = num % 2;
        verif2 = num % 3;
        
        if(num == 2){
            System.out.println("Esse numero e primo!");
        }
        else if(verif == 0 || verif2 == 0){
            System.out.println("Esse numero nao e primo!");
        }
        else{
            System.out.println("Esse numero e primo!");
        }
    }
}