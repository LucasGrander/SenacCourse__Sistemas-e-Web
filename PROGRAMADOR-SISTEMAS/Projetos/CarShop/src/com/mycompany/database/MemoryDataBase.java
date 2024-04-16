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
        listaVeiculos.add(new Veiculo(0, "A9SD123", "bmw", "320i", 300.000));
        listaVeiculos.add(new Veiculo(1, "J9ZX30", "Wolksvagem", "Gol", 50.000));
        listaVeiculos.add(new Veiculo(2, "N9JH19", "mercedes", "GLS", 250.000));
    }
}
