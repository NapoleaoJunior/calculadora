let numero1 = parseFloat(prompt('digite um numero'));
let numero2 = parseFloat(prompt('digite outro numero'));

function operacoes(numero1,numero2,operacao) {
    let resultado = 0;
    if(operacao === '+'){
        resultado = numero1 + numero2;
        alert('resultado : soma ' + resultado);
    } 
    if(operacao === '-'){
        resultado = numero1 - numero2;
        alert('resultado : subtração ' + resultado);
    }
    if(operacao === '*'){
        resultado = numero1 * numero2;
        alert('resultado : mutiplicação ' + resultado);
    }
    if(operacao === '/'){
        resultado = numero1 / numero2;
        alert('resultado : divisão ' + resultado);
    }
}
operacoes(numero1,numero2,'+');
operacoes(numero1,numero2,'-');
operacoes(numero1,numero2,'*');
operacoes(numero1,numero2,'/');