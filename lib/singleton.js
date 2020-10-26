
class Comida {
    constructor(FOOD) {

        this.FOOD = FOOD;

        if (typeof Comida.instance === 'object') {
            return Comida.instance;
        }

        Comida.instance = this;
        return this;
    }
}

module.exports = Comida;
