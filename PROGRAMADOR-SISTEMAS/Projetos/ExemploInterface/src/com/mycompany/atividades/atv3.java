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
public class atv3 {
    public static void main(String[] args) {
        Scanner s = new Scanner (System.in);
        
        int numVerif, verif;
        
        System.out.println("Escolha um numero para verificar se e impar ou par");
        numVerif = s.nextInt();
        verif = numVerif % 2;
        
        if(verif == 0){
            System.out.println("o numero e par");
        }
        else{
            System.out.println("o numero e impar");
        }
    }
}
