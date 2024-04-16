/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.mycompany.telas;

import com.mycompany.database.MemoryDataBase;
import com.mycompany.outros.Forms;
import com.mycompany.outros.Temporarios;
import com.mycompany.veiculo.Veiculo;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author grander.3993
 */
public class ListVeiculos extends javax.swing.JFrame {

    /**
     * Creates new form ListVeiculos
     */
    public ListVeiculos() {
        initComponents();
        MemoryDataBase.veiculosExemplos();
        listar(MemoryDataBase.listaVeiculos);
        verifyFiltros();
        
    }
    
     public void listar(ArrayList<Veiculo> lista){
         DefaultTableModel defaultTableModel = (DefaultTableModel) jtableList.getModel();
         
         for(Veiculo v : lista){
             defaultTableModel.addRow(new Object[] {v.getId(), v.getChassi(), v.getMarca(), v.getNome(), v.getPreco()});
         }
    }
     
    private void verifyFiltros(){
        if(jcbFiltro.getSelectedIndex() == 0){
            jtfFiltro.setEnabled(false);
            jtfFiltro.setText("");
        }
        else{
            jtfFiltro.setEnabled(true);
        }
    }


    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jcbFiltro = new javax.swing.JComboBox<>();
        jtfFiltro = new javax.swing.JTextField();
        btnFiltrar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        jtableList = new javax.swing.JTable();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jcbFiltro.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "TODOS", "ID", "CHASSI", "MARCA", "NOME", "PREÇO > QUE", "PREÇO < QUE " }));

        btnFiltrar.setText("Filtrar");

        jtableList.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "ID", "CHASSI", "MARCA", "NOME", "PREÇO"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jtableList.setShowHorizontalLines(false);
        jtableList.setShowVerticalLines(false);
        jtableList.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jtableListMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(jtableList);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addComponent(jcbFiltro, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jtfFiltro)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(btnFiltrar))
            .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 975, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jcbFiltro, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jtfFiltro, javax.swing.GroupLayout.PREFERRED_SIZE, 25, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnFiltrar))
                .addGap(18, 18, 18)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 617, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jtableListMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jtableListMouseClicked
        if (evt.getClickCount() == 2){
            Veiculo veiculo = new Veiculo();
                
            veiculo.setId(Integer.parseInt(String.valueOf(jtableList.getValueAt(jtableList.getSelectedRow(), 0))));
            veiculo.setChassi(String.valueOf(jtableList.getValueAt(jtableList.getSelectedRow(), 1)));
            veiculo.setMarca(String.valueOf(jtableList.getValueAt(jtableList.getSelectedRow(), 2)));
            veiculo.setNome(String.valueOf(jtableList.getValueAt(jtableList.getSelectedRow(), 3)));
            veiculo.setPreco(Double.valueOf(String.valueOf(jtableList.getValueAt(jtableList.getSelectedRow(), 4))));
            
            Temporarios.tempObj = veiculo;
            
                if(Forms.CadVeiculos == null)
                    Forms.CadVeiculos = new CadVeiculos();
                
                ((CadVeiculos) Forms.CadVeiculos).verifyDadosTemp();
                Forms.CadVeiculos.setVisible(true);
                Forms.CadVeiculos.setExtendedState(NORMAL);
        }
    }//GEN-LAST:event_jtableListMouseClicked

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(ListVeiculos.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(ListVeiculos.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(ListVeiculos.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(ListVeiculos.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new ListVeiculos().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnFiltrar;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JComboBox<String> jcbFiltro;
    private javax.swing.JTable jtableList;
    private javax.swing.JTextField jtfFiltro;
    // End of variables declaration//GEN-END:variables
}