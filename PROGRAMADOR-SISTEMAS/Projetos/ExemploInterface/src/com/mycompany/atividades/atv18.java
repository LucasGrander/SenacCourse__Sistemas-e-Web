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
public class atv18 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String month;
        int[] intArray = {31, 28, 30};
        
        
        // Usar (String).equals("termo para comparar")
        System.out.println("Qual mes voce gostaria de saber a quantidade de dias?");
        month = s.nextLine();
        if(month.equals("Janeiro") || month.equals("Março") || month.equals("Maio") || month.equals("Julho") || month.equals("Agosto") || month.equals("Outubro") || month.equals("Dezembro")){
            System.out.println("O mes de " + month + " tem " + intArray[0] + " dias");
        }
        else if(month.equals("Abril") || month.equals("Junho") || month.equals("Setembro") || month.equals("Novembro")){
            System.out.println("O mes de " + month + " tem " + intArray[2] + " dias");
        }
        else{
            System.out.println("O mes de " + month + " tem " + intArray[1] + " dias");
        }
    }
}
