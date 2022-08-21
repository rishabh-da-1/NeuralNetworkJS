class v_preceptron{
    constructor(p_type,p_value,unit){
        this.radius = 4;

        this.p_type = p_type;
        this.p_value = p_value;
        
        if(this.p_type = "INPUT"){
            this.x = 20;
            this.y = 40*unit;
        }

        this.draw();
    }

    draw(){
        ctx.fillStyle =`rgb(${Math.random() * 255 },${Math.random() * 255 },${Math.random() * 255 })`;
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
    }
}