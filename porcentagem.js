function porcentagem(x = 1, y = 1){
    let a = x
    let b = y * 100
    let result = b / a 
    return result.toFixed(2)
}

console.log(porcentagem(12, 2))