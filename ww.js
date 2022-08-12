function random (min , max) {

    const r = Math.random() * (max - min) + min; //meth.random  = Retorna um número pseudo-aleatório entre eles
    return Math.floor(r); //Math.floor = Retorna o numero  inteiro que é menor ou igual a um número

}

const min = 1 ;
const max = 50 ; 

let rand = random (1, 50);

while (rand !==10) { // enquanto rend for diferente de 10 continua , quando for igual para
    rand = random (min, max);
    console.log (rand);
}