/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ativdades.array;

/**
 *
 * @author grander.3993
 */
public class atv4 {

    public static void main(String[] args) {
        String[] arr = {"oi", "tudo", "bem"};

        String[] arrInvert = new String[3];

        for (int i = arr.length - 1; i >= 0; i--) {
            for (int j = 0; j < arrInvert.length; j++) {
                arrInvert[j] = arr[i];
                System.out.println(arrInvert[j]);
                break;
            }
        }
    }
}
