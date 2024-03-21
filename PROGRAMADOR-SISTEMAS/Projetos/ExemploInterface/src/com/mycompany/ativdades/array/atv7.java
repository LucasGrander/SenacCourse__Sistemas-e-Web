/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ativdades.array;

/**
 *
 * @author grander.3993
 */
public class atv7 {

    public static void main(String[] args) {

        int[] listOne = {1, 2, 3, 4, 5};

        int[] listTwo = {6, 7, 8, 9, 10};

        int[] listFinal = new int[listOne.length + listTwo.length];

        int x = 0;

        for (int i = 0; i < listOne.length; i++) {
            listFinal[x] = listOne[i];
            System.out.println(listFinal[x]);
            x++;
        }

        for (int j = 0; j < listTwo.length; j++) {
            listFinal[x] = listTwo[j];
            System.out.println(listFinal[x]);
            x++;
        }
    }
}
