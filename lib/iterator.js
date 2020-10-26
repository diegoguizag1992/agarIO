

const Builder = require('./builder');

class iterator {
    constructor() {

        this._data = [];
        this.currentPointer = 0;
    
    }

    fetchData(){

        let listaColores = new Builder()
        .setRojoIntenso()
        .setRojoOscuro()
        .setAmarilloIntenso()
        .setAmarilloOscuro()
        .setAzulClaro("#4a4dff")
        .setAzulOscuro("#2f3fcf")
        .setVioletaClaro("#6e3bb5")
        .setVioletaOscuro("#5c01a1")
        .build(); 


        this._data = [[listaColores.rojo_intenso, listaColores.rojo_oscuro],
                      [listaColores.amarillo_intenso, listaColores.amarillo_oscuro],
                      [listaColores.azul_claro, listaColores.azul_oscuro],
                      [listaColores.violeta_claro, listaColores.violeta_oscuro],
                      [listaColores.naranja_intenso, listaColores.naranja_oscuro]];

        return this._data;
    }

    next(){
        let current = this._data[this.currentPointer];
        this.currentPointer++
        return current;
    }

    hasNext(){
        return this._data[this.currentPointer]
    }

}

module.exports = iterator;