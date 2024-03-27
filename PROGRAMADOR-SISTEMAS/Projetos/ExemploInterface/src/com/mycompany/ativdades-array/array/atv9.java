/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.ativdades.array;

import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class atv9 {

    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        String[] mesesDoAno = {"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"};

        System.out.println("Escolha um mes do ano para retornamos sua posicao no array");
        String choosed = s.nextLine();
        choosed = choosed.toLowerCase();

        for (int i = 0; i < mesesDoAno.length; i++) {
            if (choosed.equals(mesesDoAno[i].toLowerCase())) {
                System.out.println("O mes de " + choosed.toUpperCase() + " esta na posicao " + i + " do array");
            }
        }
    }
}
