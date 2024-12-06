let num = [5, 8, 2, 9, 3]
console.log(`${num}`)
num[5]=6
console.log(`${num}`)
num.push(7)
console.log(`${num}`)
num.sort()
console.log(`${num}`)
console.log(`O tamanho é ${num.length}`)
let pos = num.indexOf(9)
if (pos == -1){
    console.log('O número não foi encotrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}