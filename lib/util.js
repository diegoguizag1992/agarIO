class Util {

  // Normaliza la longitud del vector a 1, manteniendo la dirección.
  dir (vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  }
  // Encuentra la distancia entre dos puntos.
  dist (pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  }

  // Encuentra la longitud del vector.
  norm (vec) {
    return Util.dist([0, 0], vec);
  }

  // Devuelve un vector orientado aleatoriamente con la longitud dada.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  genVec (length) {
    const deg = 2 * Math.PI;
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  // Escala la longitud de un vector por la cantidad dada
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}

module.exports = Util;
