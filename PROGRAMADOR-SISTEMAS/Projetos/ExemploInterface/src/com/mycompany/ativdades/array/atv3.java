package com.mycompany.ativdades.array;

import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author grander.3993
 */
public class atv3 {
    public static void main(String[] args) {
        
        int[] list = {10, 200, 30, 40, 100};
        int maior = list[0];
        
        for(int i = 0; i < list.length; i++){
            if(list[i] > maior){
                maior = list[i];
            }
        }
        
        System.out.println(maior); // Movido para fora do loop
    }
}
