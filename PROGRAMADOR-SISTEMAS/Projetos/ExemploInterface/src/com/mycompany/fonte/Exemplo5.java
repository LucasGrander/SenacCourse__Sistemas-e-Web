/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.fonte;

import java.util.Scanner;

/**
 *
 * @author grander.3993
 */
public class Exemplo5 {
    public static void main (String[] args){
        // aqui foi declarado 2 variáveis para termos a opção de escolher o meio de fazer a operação e uma outra váriavel, declarada como float para aceitar números com vírgulas, onde a mesma recebe os valores de num1, num2 e res.
        int opcao = 0;
        float num1, num2, res;
    
        // temos aqui a parte onde chamamos o Scanner (possibilita o cliente/usuário entrar com os dados desejados) --- 
        Scanner s = new Scanner (System.in);
        
        Boolean  continuar = true;
        // Nessa parte do código temos as opções de operação, onde o cliente/usuário irá selecionar através de um número ( 1 - 4 )
            while(continuar){
                    System.out.println("===================================================");
                    System.out.println("Selecione a operacao \n\n" +
                            "1 - Soma\n" +
                            "2 - Subtracao\n" +
                            "3 - Multiplicacao\n" +
                            "4 - Divisao\n");

                    System.out.println("----------------------------------------------------------------------------");


                    // Seguindo o code de cima, temos agora o valor que o usuário atribuiu a ela, lembrando que esse valor vai de 1 à 4
                    opcao = s.nextInt();


                    // Esse primeiro "if" análisa se a opção é maior que 4 ou menor que 0, assim, caso verdadeira, o código será interrompido
                    if(opcao > 4 || opcao <= 0){
                        System.err.println("Essa opcao nao existente! Digite novamente!");
                        System.out.println("===================================================");
                    System.out.println("Selecione a operacao \n\n" +
                            "1 - Soma\n" +
                            "2 - Subtracao\n" +
                            "3 - Multiplicacao\n" +
                            "4 - Divisao\n");
                    opcao = s.nextInt();
                    System.out.println("----------------------------------------------------------------------------");
                        }
                    
                // O usuário irá entrar com um valor que deseja na operação... Também logo abaixo temos a variável ( float num1 ) sendo atribuida, a mesma coisa ocorre nas linhas 46 e 47, só que com o ( float num2 )
                System.out.println("===================================================");
                System.out.println("Informe o primeiro numero: ");
                num1 = s.nextFloat();

                System.out.println("Informe o segundo numero: ");
                num2 = s.nextFloat();

                // Aqui são as condições caso a OPCAO que o usuário digitou seja entre ( 1 e 4 ), executando uma soma, subtração, multiplicação ou divisão!!
                if(opcao  == 1){
                    res = num1 + num2;
                }
                else if(opcao  == 2){
                    res = num1 - num2;
                }
                else if(opcao  == 3){
                    res = num1 * num2;
                }
                else{
                    res = num1 + num2;
                }

                //Aqui onde será mostrado o valor escolhido pelo USER e seu respectivo resultado
                System.err.println("O resultado de "+ num1 + " e " + num2 + " = " +  res);
                System.out.println("===================================================");

                System.out.println("Deseja realizar mais alguma operacao?(Sim = 1 | Nao = 0");
                opcao = s.nextInt();

                if(opcao ==  0){
                    continuar = false;
                    System.out.println("Calculo finalizado!");
                }
            }
         }
    }

