
package com.mycompany.bd;

import com.mycompany.produtos.Produto;
import java.util.ArrayList;

public class MemoryDataBase {
    public static ArrayList<Produto> ListaProdutos = new ArrayList<>();

    public static String size() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    public static void carregarDadosExemplos(){
        ListaProdutos.add(new Produto(0, "Celular", 150.50));
        ListaProdutos.add(new Produto(1, "Computador", 450.50));
        ListaProdutos.add(new Produto(2, "Teclado", 1050.50));
        ListaProdutos.add(new Produto(3, "Mouse", 10.50));
        ListaProdutos.add(new Produto(4, "Fone de ouvido", 200.50));
    }
}
