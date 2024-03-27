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
public class atvi12 {

    public static void main(String[] args) {
        //declaração de 3 ints
        int x, num1, num2;
        Scanner s = new Scanner(System.in);
        //entrada de dados do user, para 'X'
        System.out.println("Escolha um valor para X !");
        x = s.nextInt();

        //para o 'int X' ter uma alteração, ou seja, variar, o user vai escolher um núm para ser somado com esse 'X'
        System.out.println("Escolha um valor para somar com  X !");
        num1 = s.nextInt();
        x = x + num1;

        //mesma finalidade que acima, porém, agora vamos pegar a soma anterior e realizar uma outra soma, fazendo com que 'X' seja alterado novamente.
        System.out.println("Escolha um valor para somar novamente !");
        num2 = s.nextInt();
        x = x + num2;

        //o 'X' agora será apresentado da forma que o user escolheu manipular o seu valor
        System.out.println("O valor final de X e: " + x);
    }
}
