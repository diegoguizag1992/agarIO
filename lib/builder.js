class Builder {
  
  constructor() {
    this.rojo_intenso = '#ffffff';
    this.rojo_oscuro = '#ffffff';
    this.amarillo_intenso = '#ffffff';
    this.amarillo_oscuro = '#ffffff';
    this.azul_claro = '';
    this.azul_oscuro = '';
    this.violeta_claro = '';
    this.violeta_oscuro = '';
    this.naranja_intenso = '#ffab03';
    this.naranja_oscuro = '#d18d06';
    this.descripcion = "Maneja la creación de los diferentes colores de la comida del juego";
  }

  setRojoIntenso(){
    this.rojo_intenso = '#ff2033';
    return this;
  }

  setRojoOscuro(){
    this.rojo_oscuro = '#9e140f';
    return this;
  }

  setAmarilloIntenso(){
    this.amarillo_intenso = '#fff133';
    return this;
  }
  
  setAmarilloOscuro(){
    this.amarillo_oscuro = '#ffc70d';
    return this;
  }

  setAzulClaro(azul_claro){
    this.azul_claro = azul_claro;
    return this;
  }

  setAzulOscuro(azul_oscuro){
    this.azul_oscuro = azul_oscuro;
    return this;
  }

  setVioletaClaro(violeta_claro){
    this.violeta_claro = violeta_claro;
    return this;
  }

  setVioletaOscuro(violeta_oscuro){
    this.violeta_oscuro = violeta_oscuro;
    return this;
  }

  setNaranjaIntenso(){
    this.naranja_intenso = this.naranja_intenso;
    return this;
  }

  setNaranjaOscuro(){
    this.naranja_oscuro = this.naranja_oscuro;
    return this;
  }
  
  build(){
    return {
      rojo_intenso: this.rojo_intenso,
      rojo_oscuro: this.rojo_oscuro,
      amarillo_intenso: this.amarillo_intenso,
      amarillo_oscuro: this.amarillo_oscuro,
      azul_claro: this.azul_claro, 
      azul_oscuro: this.azul_oscuro,
      violeta_claro: this.violeta_claro,
      violeta_oscuro: this.violeta_oscuro,
      naranja_intenso: this.naranja_intenso,
      naranja_oscuro: this.naranja_oscuro,
      descripcion: this.descripcion
    };
  }
}

module.exports = Builder;
