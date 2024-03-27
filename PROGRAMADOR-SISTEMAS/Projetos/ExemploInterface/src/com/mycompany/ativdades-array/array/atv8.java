/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ativdades.array;

/**
 *
 * @author grander.3993
 */
public class atv8 {

    public static void main(String[] args) {
        
        int[] numsList = {10, 8, 4, 6, 7, 3, 11, 2, 5};
        
        for (int i = 0; i < numsList.length; i++) {
            for (int j = 0; j < numsList.length - 1; j++) {
                if (numsList[j] > numsList[j + 1]) {
 
                    int teste = numsList[j];
                    numsList[j] = numsList[j + 1];
                    numsList[j + 1] = teste;
                }
            }
        }
        for (int i = 0; i < numsList.length; i++) {
            System.out.print(numsList[i] + " ");
        }
    }
}
