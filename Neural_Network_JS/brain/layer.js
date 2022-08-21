class Layer {
    constructor(type, preceptrons, input_data, layer_number) {
        
        this.type = type;
        this.preceptrons = preceptrons;
        this.input_data = input_data;
        this.layer_number = layer_number;

        this.weights = []

        for (let i = 0; i < this.preceptrons; i++) {
            if(this.input_data instanceof Array ){
                this.weights[i] = new Matrix(this.input_data.length, 1)
            }else{
                this.weights[i] = new Matrix(this.input_data, 1)
            }
        }
        this.output = [];
    }

   

    feedforward() {
        if (this.input_data instanceof Array) {
            for (let i = 0; i < this.preceptrons; i++) {
                this.output[i] = Matrix.dot_product(this.input_data, this.weights[i], "ARRAY");
                // 4 4           //2 2 
            }

            // values are like [69 , NAN] .. lol , 
            // this is the code to fix it  ,, ill fix the matrix part later

            let o1 = [];
            for (let i = 0; i < this.output.length; i++) {
                for (let j = 0; j < this.output[i].length; j++) {
                    if (!Number.isNaN(this.output[i][j])) {
                        o1.push(this.output[i][j]);
                    }
                }
            }
            this.output = o1;
            console.log(this.output)
            return this.output;
        } 
        else {

            console.log(this.type," ",this.layer_number, "no input found")
        }
    }
    recive_input(input) {
        this.input_data = input;
    }

}
