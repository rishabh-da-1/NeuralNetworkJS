class NeuralNetwork{
    constructor(input_data , hidden_layer_info,output_preceptrons){
        this.input_data = input_data;
        this.hidden_layers = [];

        for(let i = 0 ; i <= hidden_layer_info.length ; i++)
        {
            if( i != 0){
                this.hidden_layers[i] = new Layer("HIDDEN",hidden_layer_info[i],this.p_input(i-1),i+1);
            
            }
            else{
                this.hidden_layers[i] = new Layer("HIDDEN",hidden_layer_info[i],this.input_data,i+1);
            }
        }

        
        this.output_layer = new Layer("OUTPUT",output_preceptrons,this.hidden_layers[hidden_layer_info.length-1].output,"end")
        
    }
    
    p_input(unit){
        return this.hidden_layers[unit].feedforward();

    }
    output(){
        return this.output_layer.feedforward()

    }
}

const brain = new NeuralNetwork([4,4,2,3,4],[3,3,2,3,2,3],2);
brain.output()