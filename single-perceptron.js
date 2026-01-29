function SinglePerceptron() {
    var network = this;
    this.bias = 0;
    this.weights = [];
    this.learningRate = 0.15;
    this.iterations = 1000;

    // Função de Ativação (Sigmoide) corrigida
    this.sigmoid = function (x) {  
        return (1 / (1 + Math.exp(-x)));
    };

    this.init = function (learningRate, iterations) {
        network.learningRate = learningRate;
        network.iterations = iterations;
    };

    this.initializeWeights = function (num) {
        // Inicializa bias e pesos com valores aleatórios pequenos
        network.bias = Math.random() - 0.5;
        network.weights = [];
        for (var i = 0; i < num; i++) {
            network.weights.push(Math.random() - 0.5);
        }
    };

    this.train = function (data) {
        network.initializeWeights(data[0].inputs.length);
        var currentIteration = 0;
        var hasError = true;

        while (hasError && currentIteration < network.iterations) {
            hasError = false;
            var totalError = 0;

            for (var i = 0; i < data.length; i++) {
                var result = network.run(data[i].inputs);
                var errorValue = data[i].output - result;

                // Se o erro for significativo, ajusta os pesos
                if (Math.abs(errorValue) > 0.01) {
                    hasError = true;
                    network.updateWeights(errorValue, data[i].inputs);
                }
                totalError += Math.abs(errorValue);
            }
            
            currentIteration++;
            if (currentIteration % 100 === 0) {
                console.log("Iteração: " + currentIteration + " Erro Médio: " + (totalError / data.length).toFixed(6));
            }
        }
    };

    this.updateWeights = function (error, inputs) {
        for (var i = 0; i < network.weights.length; i++) {
            // Regra do Perceptron: novo_peso = peso + (taxa * erro * entrada)
            network.weights[i] += network.learningRate * error * inputs[i];
        }
        network.bias += network.learningRate * error;
    };

    this.run = function (inputs) {
        var sum = 0;
        for (var i = 0; i < inputs.length; i++) {
            sum += inputs[i] * network.weights[i];
        }
        sum += network.bias;
        return network.sigmoid(sum);
    };
}