let matriz1 = [ 
    [2, 4, 3],
    [-5, 5, -1],
    [1 , -99, 4]
]
let matriz2 = [ 
    [-2, -32, 38],
    [6, 21, 38],
    [-9, 33, 12]
]
let matrizSoma = [] //Matriz que vai guardar o resultado da adição
let matrizSub = [] //Matriz que vai guardar o resultado da subtração
let matrizMult = [] //Matriz que vai guardar o resultado da multiplicação

const l1 = matriz1.length // Guardando o numero de linhas da matriz 1
const c1 = matriz1[1].length // Guardando o numero de colunas da matriz 1
const l2 = matriz2.length // Guardando o numero de linhas da matriz 2
const c2 = matriz2[1].length // Guardando o numero de colunas da matriz 2

// Estrutura de soma
    if(l1 == l2 && c1 == c2){//Condicional se numero de linhas e colunas das 2 matrizes forem iguais
    for (let i = 0; i < l1; i++){//Reptindo o laço até ser igual ao numero de linhas da matriz 1
        matrizSoma[i] = [] //Criando uma linha nova na matriz de adição
        for (let x = 0; x < c1; x++){//Repetindo o laço até ser igual ao numero de colunas da matriz 1
            matrizSoma[i][x] = 0 //Criando uma coluna nova matriz de adição
            matrizSoma[i][x] = matriz1[i][x] + matriz2[i][x]//Fazendo a soma dos elementos da matriz 1 e 2
        }
    }
    console.log('Resultado da adição:')
    matrizSoma.forEach(a => console.log(a))
}


// Estrutura de subtração
if(l1 == l2 && c1 == c2) {//Condicional se numero de linhas e colunas das 2 matrizes forem iguais
    for (let i = 0; i < l1; i++){//Reptindo o laço até ser igual ao numero de linhas da matriz 1
        matrizSub[i] = [] // Criando uma linha nova na matriz de subtração
        for (let x = 0; x < c1; x++){//Repetindo o laço até ser igual ao numero de colunas da matriz 1
            matrizSub[i][x] = 0 // Criando uma coluna nova na matriz de subtração
            matrizSub[i][x] = matriz1[i][x] - matriz2[i][x]//Fazendo a subtração dos elementos da matriz 1 e 2
        }
    }
    console.log('Resultado da subtração:')
    matrizSub.forEach(a => console.log(a))
}


// Estrutura de multiplicação
if(c1 == l2){//Condicional se colunas da matriz 1 for igual a linhas da matriz 2
    for (let i = 0; i < l1; i++){//Reptindo o laço até ser igual ao numero de linhas da matriz 1
        matrizMult[i] = [] // Criando uma linha nova na matriz de multiplicação
        for (let x = 0; x < c2; x++){//Reptindo o laço até ser igual ao numero de colunas da matriz 2
            matrizMult[i][x] = 0 // Criando uma coluna nova na matriz de subtração
            for (let z = 0; z < c1; z++){//Reptindo o laço até ser igual ao numero de colunas da matriz 1
                matrizMult[i][x] += matriz1[i][z] * matriz2[z][x] //Somando e multiplicando os elementos
            }
        }
    }
    console.log('Resultado da multiplicação:')
    matrizMult.forEach(a => console.log(a))
}