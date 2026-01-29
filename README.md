
# Perceptron Simples em JavaScript

Este projeto implementa um **Perceptron de Camada Única** (Single-Layer Perceptron) utilizando JavaScript puro. O objetivo é demonstrar como um neurónio artificial pode ser treinado para classificar dados linearmente separáveis, utilizando a função de ativação Sigmóide e o algoritmo de ajuste de pesos (Backpropagation simplificado).

## 🚀 Funcionalidades

* **Treino Iterativo**: O neurnônio ajusta os seus pesos e bias automaticamente com base num conjunto de dados de treino.
* **Função de Ativação Sigmóide**: Transforma a soma ponderada das entradas num valor entre 0 e 1, permitindo interpretação probabilística.
* **Visualização em Tempo Real**: Utiliza a biblioteca **Chart.js** para desenhar os pontos de dados e a **Linha de Decisão** que o neurónio cria para separar as classes.

## 📂 Estrutura do Código

### 1. `single-perceptron.js`

Contém a lógica central da rede neuronal:

* **`SinglePerceptron()`**: Construtor principal do objeto.
* **`train(data)`**: Executa o ciclo de treino, comparando a previsão com o resultado esperado e invocando o ajuste de pesos.
* **`updateWeights(error, inputs)`**: Aplica a regra de aprendizagem: `peso = peso + (taxa_aprendizagem * erro * entrada)`.
* **`run(inputs)`**: Calcula a saída para novos dados com base nos pesos aprendidos.

### 2. `single-perceptron.html`

A interface que consome a lógica do neurônio:

* Define o **Dataset de Treino** (ex: classificação de coordenadas X e Y).
* Configura parâmetros como a **Taxa de Aprendizagem** (Learning Rate) e o número de **Iterações**.
* Renderiza o gráfico com a fronteira de decisão (Decision Boundary).

## 🛠️ Como Usar

1. Certifique-se de que os arquivos `single-perceptron.html` e `single-perceptron.js` estão na mesma pasta.
2. Abra o arquivo `single-perceptron.html` em qualquer navegador.
3. Abra o **Console do Programador (F12)** para acompanhar o progresso do erro durante o treino.
4. O resultado final aparecerá no avegador e o gráfico mostrará como o neurônio "dividiu" os grupos de dados.

## 📊 Exemplo de Dados

O código vem pré-configurado com dados onde:

* Entradas como `[10, 100]` resultam em **0**.
* Entradas como `[30, 10]` resultam em **1**.

Após o treino, o neurônio é capaz de prever que um valor novo como `[30, 32]` pertence à classe **1**.

---

**Nota:** Este projeto é para fins educacionais sobre os fundamentos de Inteligência Artificial e Redes Neurais.