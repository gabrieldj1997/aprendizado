// 6M quadrados equivale a 1L de tinta. acrescente 10% de folga
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações;
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// lata de tinta 18L e $80;
// galão de tinta 3.2L e $25;

let metros = 120
let litros = Math.ceil(metros/6)
litros += (litros/100) * 100
let latas = Math.ceil(litros/18)
let galoes = Math.ceil(litros/3.2)
let sobra = Math.floor(litros%18)
console.log(`Somente latas: você usará ${latas} latas de tinta e ${litros} litros de tinta por $${latas*80}`)
console.log(`Somente galões: você usará ${galoes} galões de tinta e ${litros} litros de tinta por $${galoes*25}`)
console.log(`Misturado: você usará ${Math.floor(litros/18)} latas e ${Math.ceil(sobra/3.2)} galões de tinta e ${litros} litros de tinta por $${(Math.floor(litros/18)* 80) + (Math.ceil(sobra/3.2)*25)}`)