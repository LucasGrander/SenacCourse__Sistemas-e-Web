package calculadora.orientada.objeto;

import com.mycompany.calculadora.Calculadora;
import com.mycompany.calculadora.CalculadoraCientifica;
import java.util.Scanner;

public class CalculadoraOrientadaObjeto {

    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora();
        CalculadoraCientifica cientifica = new CalculadoraCientifica();

        boolean error = true;

        Scanner s = new Scanner(System.in);

        while (error) {
            System.out.println("Digite o numero da operacao que deseja: ");
            System.out.println("-----------------------------------------------------");
            System.out.println("");
            System.out.println("Operacoes: \n"
                    + "1 - Soma\n"
                    + "2 - Subtracao\n"
                    + "3 - Multiplicacao\n"
                    + "4 - Divisao\n");
            System.out.println("");
            System.out.println("-----------------------------------------------------");
            System.out.println("");
            int op = s.nextInt();

            System.out.println("");
            if (op <= 0 || op > 4) {
                System.out.println("Digite um numero valido!");
                System.out.println("=============================");
                continue;
            }

            System.out.println("=============================");
            System.out.println("Digite o primeiro numero da conta:");
            int num1 = s.nextInt();
            System.out.println("--------------");
            System.out.println("Digite o segundo numero da conta:");
            int num2 = s.nextInt();

            System.out.println("");
            System.out.println("");
            switch (op) {
                case 1 ->
                    System.err.println("A Soma de " + num1 + " e " + num2 + " resulta em " + calculadora.somar(num1, num2));
                case 2 ->
                    System.err.println("A subtracao de " + num1 + " e " + num2 + " resulta em " + calculadora.subtrair(num1, num2));
                case 3 ->
                    System.err.println("A multiplicacao de " + num1 + " e " + num2 + " resulta em " + calculadora.multiplicar(num1, num2));
                default ->
                    System.err.println("A divisao de " + num1 + " e " + num2 + " resulta em " + calculadora.dividir(num1, num2));
            }
            System.out.println("");
            System.out.println("");
            System.out.println("=============================");
            System.out.println("Deseja fazer outra conta?");
            System.out.println("=============================");
            System.out.println("Sim = 0\n"
                    + "Nao = 1");
            System.out.println("----------------------------");
            double again = s.nextInt();
            System.out.println("");
            if (again == 1) {
                System.err.println("Contas Finalizadas!");
                error = false;
                System.out.println("----------------------------");
                System.out.println("----------------------------");
                System.out.println("----------------------------");
                System.out.println("");
            }
        }
    }
}
