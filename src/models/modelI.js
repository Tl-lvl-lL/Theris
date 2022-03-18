class ModelI extends Figure {
    constructor(color, name) {
        super(color, name);
    }

    get Info() {
        return `${this.name} - ${this.color}`;
    }
}
