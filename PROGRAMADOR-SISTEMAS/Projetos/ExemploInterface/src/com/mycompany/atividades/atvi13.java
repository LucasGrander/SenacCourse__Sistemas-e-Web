/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.atividades;

import java.text.Normalizer;
import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class atvi13 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        //as vogais para a verificação estão armazenada nesse array, onde, para a criação de um ARRAY, devemos colocar [], e, após, declarar os itens do ARRAY dentro de {}
        char[] vogais = {'a', 'e', 'i', 'o', 'u'};
        System.out.println("------------------------------------------");
        System.out.println("Escreva uma palavra para contar suas vogais!");
        System.out.println("------------------------------------------");

        //Aqui é um armazenamento básico da palavra que o usuário quer verificar
        String wordChoosed = s.nextLine();
        //aqui foi apenas passado a palavra que o user colocou, para outra variavel String
        String texto = wordChoosed;

        // Nessa parte do código temos um componente chamado Normalizer, ou seja, ele transforma qualquer caractere com acento em um caractere "limpo". Ex: á ---> a
        texto = Normalizer.normalize(texto, Normalizer.Form.NFD);

        //contagem de vogais para ser aprensentada no final do code para o user
        int contVogais = 0;

        //Sistema de repetição para verificar se o 'i', que é representado pelo tamnho do texto... e 'j', que é representado pelo tamanho da array são iguais ou possuem divergencia
        for (int i = 0; i < texto.length(); i++) {
            for (int j = 0; j < vogais.length; j++) {

                //após os 2 "for" declarados, vamos fazer uma verficação para eles, assim, colocando em funcionamento o laço de repetição ao nosso favor
                if (texto.toLowerCase().charAt(i) == vogais[j]) {
                    //conforme escrito em 'if', se 'i' for igual a 'j', teremos a adição de + 1 no contVogais
                    contVogais++;
                    //Esse break impede de que mesmo que sejam iguais os valores, o code continue rodando para fazer as outras verficações. Ex: se A é igual à A, por que vou verficar se A é igual a E
                    break;
                }
            }
        }

        //mostrar o resultado final para o user, ou seja, quantia das vogais da palavra que ele desejou saber
        System.out.println("------------------------------------------");
        System.out.println("Total de vogais da palavra " + wordChoosed + " e: " + contVogais);
    }
}
