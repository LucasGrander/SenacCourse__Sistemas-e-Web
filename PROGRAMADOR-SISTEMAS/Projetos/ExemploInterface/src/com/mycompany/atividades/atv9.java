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

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        //declaramos várias coisas aqui, sendo
        // ant para antecessor
        // suc para sucessor
        //res para resultado
        // qtdd para quantidade
        // 'i' para tornar possível o uso do for de um modo mais tranquilo
        int ant, suc, res, qtdd, i;

        //aqui declaramos os valores padrões para se iniciar a sequência de Fibonatti, 0 e 1
        ant = 0;
        suc = 1;

        //aqui, o user pode escolher até quantas contas o Fibonatti terá.... Aqui também entrará em ação o 'i'
        System.out.println("Coloque um numero para limitar a sequencia de fibonatti");
        qtdd = s.nextInt();
        System.out.println("=======================================================");

        //agora, se 'i' for menor que qtdd (declaro pelo user), será acrescentado +1 em i, toda vez que o loop rodar
        for (i = 0; i < qtdd; i++) {
            //para dar start em nossas contas, precisamos de um primeiro resultado, então, antes de declararmos os demais valores, vamos dar um print nas linhas de conta
            res = ant + suc;
            System.err.println(ant + " + " + suc + " = " + res);

            //com a apresentação do valor acima, o código irá ler essas 2 linhas abaixo antes de retornar para o início, e, antes de retornar, temos reatribuições...
            //antecessor virá sucessor
            //sucessor virá resultado
            ant = suc;
            suc = res;
        }
    }
}
