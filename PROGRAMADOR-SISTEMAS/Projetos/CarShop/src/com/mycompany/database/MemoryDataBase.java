/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.database;

import com.mycompany.veiculo.Veiculo;
import java.util.ArrayList;

/**
 *
 * @author grander.3993
 */
public class MemoryDataBase {
    public static ArrayList<Veiculo> listaVeiculos = new ArrayList<>();
    
    public static void veiculosExemplos(){
        listaVeiculos.add(new Veiculo(0, "A9SD123", "bmw", "320i", 300000.05));
        listaVeiculos.add(new Veiculo(1, "J9ZX30", "Wolksvagem", "Gol", 50000.32));
        listaVeiculos.add(new Veiculo(2, "N9JH19", "mercedes", "GLS", 250004.00));
        listaVeiculos.add(new Veiculo(3, "SADN23", "Peugeot", "208", 70023.00));
        listaVeiculos.add(new Veiculo(4, "8719EDS", "Ferrari", "Spider", 2120000.00));
        listaVeiculos.add(new Veiculo(5, "92JDW92", "Ferrari", "F40", 2500000.00));
        listaVeiculos.add(new Veiculo(6, "72DSS141", "Toyota", "Hilux", 210000.00));

                

    }
}
