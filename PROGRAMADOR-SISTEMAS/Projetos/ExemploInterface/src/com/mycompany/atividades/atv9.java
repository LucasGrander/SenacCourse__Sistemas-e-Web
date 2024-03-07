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
public class atv9 {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        
        int ant, suc, res, qtdd, i;
        ant = 0;
        suc = 1;
        
        System.out.println("Coloque um numero para limitar a sequencia de fibonatti");
        qtdd = s.nextInt();
        System.out.println("=======================================================");
        for(i = 0; i < qtdd; i++){
            res = ant + suc;
            System.err.println(ant + " + " + suc + " = " + res);
            ant = suc;
            suc = res;
        }
    }
}
