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
public class atvi14 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        //o user irá inserir uma String, onde a mesma é armazenada em 'word'
        System.out.println("Digite a palavra para verificar se ela e um palindromo");
        String word = s.nextLine();

        //transformar a palavra escrita em toda minúscula
        word = word.toLowerCase();

        //estamos armazenado o tamanho da palavra em 'lenWord'
        int lenWord = word.length();

        //declarando as 'char(s)', que serão comparadas posteriormente
        char charLast, charFirst;

        boolean pal = true;

        //esse 'for' usará a variável 'i' e a variável onde está armazenada o tamanho da palavra que o user inseriu (lenWord)
        for (int i = 0; i < lenWord; i++) {
            //Aqui abaixo, temos que o valor de i é igual a primeira letra da palavra, ou seja, i = 0, como mencionado nos parênteses.
            charLast = word.charAt(i);
            //Abaixo, temos que a última letra da palavra é calculado pelo seu próprio tamanho, subtraindo o valor de i - 1.
            charFirst = word.charAt(lenWord - i - 1);

            System.out.println("====================");
            System.out.println(charLast + " - " + charFirst);

            // Esse 'if' serve para fazer uma verficação na primeira e última letra da palavra, sendo assim, se charLast for !=(diferente) de charFirst, então, não é um palíndromo.
            if (charLast != charFirst) {
                pal = false;
                break;
            }
        }

        //Após a checagem acima, temos a reposta do processo... Se verdadeiro (System.out.println("A palavra " + word + " e uma palindromo!");)...
        //                                                                                            Caso contrário (System.err.println("A palavra " + word + " nao e uma palindromo!");)
        if (pal) {
            System.out.println("====================");
            System.out.println("A palavra " + word + " e uma palindromo!");
        } else {
            System.out.println("====================");
            System.err.println("A palavra " + word + " nao e uma palindromo!");
        }
    }
}
