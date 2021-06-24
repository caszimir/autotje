class Car{
    constructor(carX, carY){
        this.brain = new NeuralNetwork(12, 6, 3);
        let pos = createVector(carX, carY);
    }
    denk() {
        let inputs = [];
        inputs[0]= afstandlijst[0];
        inputs[1]= afstandlijst[1];
        inputs[2]= afstandlijst[2];
        inputs[3]= afstandlijst[3];
        inputs[4]= afstandlijst[4];
        inputs[5]= afstandlijst[5];
        inputs[6]= afstandlijst[6];
        inputs[7]= afstandlijst[7];
        inputs[8]= afstandlijst[8];
        inputs[9]= afstandlijst[9];
        inputs[10]= afstandlijst[10];
        inputs[11]= afstandlijst[11];
        let output = this.brain.predict(inputs);
        let outputboven = output[1];
        let outputonder = output[2];
        let outputmiddle = output[0];
        if (outputmiddle< outputonder&& outputmiddle< outputboven){
            console.log("vooruit");
        }
        if (outputboven> outputonder){
            up();
        } else if (outputboven< outputonder){
            down();
        }
        voor();
        
    }
}