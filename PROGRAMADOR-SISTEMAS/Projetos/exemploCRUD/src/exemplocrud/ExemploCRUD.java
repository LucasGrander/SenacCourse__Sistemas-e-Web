
import com.mycompany.produto.Produto;
import java.util.ArrayList;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Scanner;

public class ExemploCRUD {

    public static void main(String[] args) {
        ArrayList<Produto> listaProdutos = new ArrayList<>();

        Scanner s = new Scanner(System.in);

        boolean continuar = true;
        int opcaoMenu;

        while (continuar) {
            System.out.println("------------------------------------");
            System.out.println("""
                               Selecione uma opcao:
                               1 - Cadastrar
                               2 - Alterar
                               3 - Deletar
                               4 - Listar
                               5 - Sair
                               """);
            System.out.println("------------------------------------");
            opcaoMenu = s.nextInt();
            s.nextLine();

            if (opcaoMenu == 1) {
                cadastrar(listaProdutos);
            }
            
            else if (opcaoMenu == 2) {
                if(listaProdutos.size() > 0){
                alterar(listaProdutos);
                }
                else{
                    System.out.println("");
                    System.err.println("Nenhum produto cadastrado");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            else if (opcaoMenu == 3) {
                if(listaProdutos.size() > 0){
                    deletar(listaProdutos);
                }
                else{
                    System.out.println("");
                    System.err.println("Nenhum produto cadastrado");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            else if (opcaoMenu == 4) {
                if(listaProdutos.size() > 0){
                    listar(listaProdutos);
                }
                else{
                    System.out.println("");
                    System.err.println("Nenhum produto cadastrado");
                    System.out.println("");
                    System.out.println("------------------------------------");
                }
            }
            
            else {
                continuar = false;
            }
        }
    }

    public static void cadastrar(ArrayList<Produto> lista) {
        Scanner s = new Scanner(System.in);

        try {
            int id = 0;
            String descricao;
            Double preco;

            System.out.println("=============================================");
            System.out.println("-CADASTRO-");
            System.out.println("=============================================");
            try {
                id = lista.get(lista.size() - 1).getId() + 1;
            } catch (IndexOutOfBoundsException e) {
                id = 0;
            }
            System.out.println("Informe a descricao do produto");
            descricao = s.nextLine();

            System.out.println("");
            System.out.println("Informe o preco do produto");
            preco = Double.parseDouble(s.nextLine());

            lista.add(new Produto(id, descricao, preco));
            System.out.println("-----------------------------------------------");
            System.out.println("Produto cadastrado com sucesso!");
            System.out.println("-----------------------------------------------");
        } catch (NumberFormatException e) {
            System.err.println("O preço deve ser um valor numerico");
        }
    }

    public static void alterar(ArrayList<Produto> lista) {
        Scanner s = new Scanner(System.in);
        
        try{
            String descricao;
            Double preco;
            
            
            System.out.println("=============================================");
            System.out.println("-ALTERACAO-");
            System.out.println("=============================================");
            System.out.println("");
            System.out.println("Qual produto deseja alterar? (selecione pelo 'id' do produto)");
            System.out.println("");
            System.err.println("Lista de Produtos:");
            
            for(Produto p : lista){
                System.out.println(p.toString());
                System.out.println("");
                System.out.println("----------------------------------------------------------------------------");
            }
            
            int idSelected = s.nextInt();
            s.nextLine();
            
            Optional<Produto> prodSel = lista.stream().filter(p -> p.getId() == idSelected).findFirst() ;
            System.out.println("Produto selecionado: " + prodSel.get().toString());
            
            int indice = lista.indexOf(prodSel.get());
            
            descricao = prodSel.get().getDescricao();
            preco = prodSel.get().getPreco();
            System.out.println("-----------------------------------------");
            System.out.println("Nova descricao:");
            String descAux = s.nextLine();
            
            if(!descAux.equals("")){
                descricao = descAux;
            }
            
            System.out.println("Novo Preco:");
            String precoAux = s.nextLine();
            
            if(!precoAux.equals("")){
                preco = Double.parseDouble(precoAux);
            }
            
            lista.set(indice, new Produto(idSelected, descricao, preco));
            System.out.println("");
            System.err.println("Produto alterado com sucesso!");
            System.out.println("");
        }
        catch(NumberFormatException e){
            
        }
        catch(NoSuchElementException e){
            
        }
        catch(Exception e){
            
        }
    }

    public static void deletar(ArrayList<Produto> lista) {
        Scanner s = new Scanner(System.in);

        try {
            System.out.println("=============================================");
            System.out.println("-REMOCAO-");
            System.out.println("=============================================");
            System.out.println("");
            System.out.println("Qual produto deseja remover? (selecione pelo 'id' do produto)");
            System.out.println("");
            System.err.println("Lista de Produtos:");
            
            for(Produto p : lista){
                System.out.println(p.toString());
                System.out.println("");
                System.out.println("----------------------------------------------------------------------------");
            }
            
            int idSelected = s.nextInt();
            s.nextLine();
            
            Optional<Produto> prodSel = lista.stream().filter(p -> p.getId() == idSelected).findFirst() ;
            System.out.println("Deseja realmente remover o produto: " + prodSel.get().getDescricao() + "? ( S / N )");
            String opcao = s.nextLine();
            
            if(opcao.toLowerCase().equals("s")){
                lista.remove(prodSel.get());
                System.out.println("Produto '" + prodSel.get().getDescricao() + "' removido com sucesso!");
            }
            else{
                System.out.println("");
            }
            
        } catch (NoSuchElementException e) {
            System.out.println("Esse item nao foi encontrado");
        }
        catch (Exception e) {
            System.out.println("Erro ao tentar executar a acao de deletar");
        }
    }

    public static void listar(ArrayList<Produto> lista) {
        System.out.println("=============================================");
        System.out.println("LISTAGEM --->");
        
        for (Produto p : lista) {
            System.out.println("");
            System.out.println(p.toString());
        }
    }
}
