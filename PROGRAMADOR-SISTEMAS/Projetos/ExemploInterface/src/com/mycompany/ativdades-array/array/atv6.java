/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ativdades.array;

/**
 *
 * @author grander.3993
 */
public class atv6 {

    public static void main(String[] args) {
        int[] arrNumb = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        for (int i = 0; i < arrNumb.length; i++) {
            int div = arrNumb[i] % 2;
            if (div != 0) {
                System.out.println(arrNumb[i]);
            }
        }
    }
}
