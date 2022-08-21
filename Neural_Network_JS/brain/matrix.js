class Matrix {
    constructor(row, cols) {
        this.row = row   //up-down
        this.col = cols //right-left

        this.data = []

        for (let i = 0; i < this.row; i++) { this.data[i] = [] };

        this.init_values();


    }

    init_values() {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                this.data[row][col] = Math.random() * 2 - 1;//Math.floor(Math.random() * 4)
            }
        }
    }

    add_value(value) {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                this.data[row][col] += value;
            }
        }
    }

    static dot_product(input, weights ,type) {

        if (input instanceof Matrix) {
            if (input.col != weights.col) {
                console.log("invalid ")
                return "error";
            }
            else {
                let sum = new Array(input.col);

                for (let i = 0; i < input.col; i++) {
                    //console.(input.data[0][i])
                    sum[i] = 0;
                    for (let j = 0; j < weights.row; j++) {
                        sum[i] += input.data[0][i] * weights.data[j][i];
                        // weights.data[j][i]
                    }
                }

                const output = new Matrix(1, input.col);
                output.data = sum;

                return output;
            }
        }
        else {
            let sum = [];

            for (let i = 0; i < input.length; i++) {
                sum[i] = 0;
                for (let j = 0; j < weights.row; j++) {
                    sum[i] += input[i] * weights.data[j][i];
                }
            }

            const output = new Matrix(1,input.length);
            output.data = sum;

            if(type == "ARRAY"){
                return output.data;
            }
            return output;
        }
    }

    fromArray(value) {
        for (let i = 0; i < value.length; i++) {
            this.data[i][0] = value[i];
        }
    }

  

    print() { console.table(this.data) }
}
