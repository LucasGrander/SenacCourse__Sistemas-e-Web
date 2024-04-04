package atividadecrud;

import com.my.company.cadastrodepessoas.CadastroDePessoas;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Scanner;

public class AtividadeCRUD {
    public static void main(String[] args) {
        ArrayList<CadastroDePessoas>cadasterList =  new ArrayList<>();
        
        Scanner s = new Scanner(System.in);
        
        boolean again = true;
        int selectAction;
        
        while(again){
            System.out.println("-------------------------------");
            System.out.println("");
            System.out.println("""
                               Selecione uma opcao abaixo:
                               
                               1 - Administar clientes.
                               
                               2 - Informacoes completas dos clientes.
                               
                               3 - Somente informacoes pessoais do cliente.
                               
                               4 - Somente informacoes de endereco do cliente.
                               
                               5 - Sair do sistema.
                               """);
            System.out.println("");
            System.out.println("-------------------------------");
            selectAction = s.nextInt();
            s.nextLine();
            
            // 1 - Administar clientes. ---------------------------------------
            if (selectAction == 1) {
                int admAction;
                System.out.println("");
                System.out.println("***ADMINISTRATIVO***");
                System.out.println("");
                System.out.println("""
                                   Seleciona uma acao abaixo:
                                   
                                   1 - Cadastrar Cliente
                                   
                                   2 - Alterar dados do cliente
                                   
                                   3 - Remover cliente 
                                   
                                   4 - Voltar
                                   
                                   5 - Sair do sistema
                                   """);
                admAction = s.nextInt();
                s.nextLine();
                
                if(admAction == 1){
                    cadastrar(cadasterList);
                }
                
                else if(admAction == 2){
                    if(cadasterList.size() > 0){
                        alterar(cadasterList);
                    }
                    else{
                        System.out.println("Nao ha pessoas cadastradas para alterar");
                    }
                    
                }
                else if(admAction == 3){
                      if(cadasterList.size() > 0){
                          remover(cadasterList);
                      }
                      else{
                          System.out.println("Nao ha pessoas cadastradas para remover");
                      }
                  }
                  
                else if(admAction == 4){
                       break;
                }
                   else{
                       System.exit(0);
                   }
            }
            
            // 2 - Informacoes completas dos clientes. -----------------------
            else if (selectAction == 2) {
                if(cadasterList.size() > 0){
                fullCadaster(cadasterList);
                }
                else{
                    System.out.println("");
                    System.err.println("Ainda nao ha registros de clientes");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            // 3 - Informacoes pessoais dos clientes. -----------------------
            else if (selectAction == 3) {
                if(cadasterList.size() > 0){
                    personalCadaster(cadasterList);
                }
                else{
                    System.out.println("");
                    System.err.println("Ainda nao ha clientes cadastrados");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            // 4 - informacoes de endereco do cliente
            else if (selectAction == 4){
                if(cadasterList.size() > 0){
                    addresCadaster(cadasterList);
                }
                else{
                    System.out.println("");
                    System.err.println("Ainda nao ha clientes cadastrados");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            //caso nao seja nada
            else{
                again = false;
            }
        }
    }
    
    // acoes do cadastro 
    
    public static void cadastrar(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        
        try{
            String nome;
            String cpf;
            String rg;
            String bairro;
            String rua;
            int numCasa;
            int idade;
            System.out.println("");
            System.out.println("""
                               ***CADASTRO DE CLIENTE***
                               
                               
                               """);
            
            System.out.println("------------------");
            System.out.println("***informacoes pessoais:***");
            System.out.println("");
            System.out.println("Nome completo:");
            nome = s.nextLine();
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("Idade:");
            idade = s.nextInt();
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("CPF (somente numeros):");
            cpf = s.nextLine();
            s.nextLine();
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("RG (somente numeros):");
            rg = s.nextLine();
            System.out.println("");
            
            System.out.println("");
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("***informacoes de endereco***");
            System.out.println("");
            System.out.println("Nome do bairro que mora:");
            bairro = s.nextLine();
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("Nome da rua que mora:");
            rua = s.nextLine();
            System.out.println("");
            
            System.out.println("------------------");
            System.out.println("Numero da casa ou apartamento:");
            numCasa = s.nextInt();
            System.out.println("");
            System.out.println("------------------");
            
            lista.add(new CadastroDePessoas(nome, cpf, rg, bairro, rua, numCasa, idade));
            
            System.err.println("Pessoa cadastrada com sucesso!");
        }
        catch(Exception e){
            System.out.println("Error...");
        }
    }
    
    
    
    public static void alterar(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        
        try{
            String nomeSelected;
            
            System.out.println("""
                               ***ALTERACAO DE INFORMACOES***
                               
                               Selecione uma pessoa pelo seu nome completo:
                               """);
            System.out.println("Lista de nomes:");
            for(CadastroDePessoas select : lista){
                System.out.println("");
                System.out.println(select.nomeOnly());
                System.out.println("");
            }
            nomeSelected = s.nextLine();
            
            Optional<CadastroDePessoas> choosedPerson = lista.stream().filter(select -> select.getNome().toLowerCase().equals(nomeSelected.toLowerCase())).findFirst() ;
            System.out.println("Pessoa selecionada: " + choosedPerson.get().nomeOnly());
            System.out.println("-------------------------------------");
            System.out.println("");
            
            int indice = lista.indexOf(choosedPerson.get());
            
            String nome = choosedPerson.get().getNome();
            String cpf = choosedPerson.get().getCpf();
            String rg = choosedPerson.get().getRg();
            int idade = choosedPerson.get().getIdade();
            
            String bairro = choosedPerson.get().getBairro();
            String rua = choosedPerson.get().getRua();
            int numCasa = choosedPerson.get().getNumCasa();
            
            System.out.println("""
                               
                               novas informacoes pessoais:
                               
                               """);
            System.out.println("-----------------------------------------");
            System.out.println("Novo nome:");
            String newName = s.nextLine();
            
            if(!newName.equals("")){
                nome = newName;
            }
            
            System.out.println("-----------------------------------------");
            System.out.println("Nova idade:");
            int newIdade = s.nextInt();
            s.nextLine();
            
            if(!newName.equals("")){
                idade = newIdade;
            }
            
            System.out.println("-----------------------------------------");
            System.out.println("Novo CPF:");
            String newCpf = s.nextLine();
            
            if(!newName.equals("")){
                cpf = newCpf;
            }
            
            System.out.println("-----------------------------------------");
            System.out.println("Novo RG:");
            String  newRg = s.nextLine();
            
            if(!newName.equals("")){
                rg = newRg;
            }
            
            System.out.println("""
                               ***novas informacoes de endereco:***
                               """);
            System.out.println("");
            System.out.println("-----------------------------------------");
            System.out.println("Novo bairro:");
            String newBairro = s.nextLine();
            
            if(!newName.equals("")){
                bairro = newBairro;
            }
            
            System.out.println("-----------------------------------------");
            System.out.println("Nova rua:");
            String newRua = s.nextLine();
            
            if(!newName.equals("")){
                rua = newRua;
            }
            
            System.out.println("-----------------------------------------");
            System.out.println("Novo numero de casa ou apartamento:");
            int newNum = s.nextInt();
            
            if(!newName.equals("")){
                idade = newNum;
            }
            
            
            lista.set(indice, new CadastroDePessoas(nome, cpf, rg, bairro, rua, numCasa, idade));
             System.out.println("");
            System.err.println("as Infos dessa pessoa foram alteradas com sucesso!");
            System.out.println("");
        }
        catch(Exception e){
            System.out.println("Error");
        }
    }
    
    public static void remover(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        System.out.println("removendo...");
    }
    
    // infos para printar

    public static void fullCadaster(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        System.out.println("full infos...");
    }
    
    public static void personalCadaster(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        System.out.println("pessoal infos...");
    }
    
    public static void addresCadaster(ArrayList<CadastroDePessoas> lista) {
        Scanner s = new Scanner(System.in);
        System.out.println("endereco infos...");
    }
}
