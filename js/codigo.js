const selecionarNúmeros = function (opcao) {
let resultado = document.getElementById('resultado')

switch(opcao) {
    case 'one':
        console.log('Alimento não-perecível.')
        resultado.innerHTML = "Alimento não-perecível."
    break;
    case 'two':
        console.log('Alimento perecível.')
        resultado.innerHTML = "Alimento perecível."
    break;
    case 'three':
        console.log('Vestuário.')
        resultado.innerHTML = "Vestuário."
    break;
    case 'four':
        console.log('Higiene pessoal.')
        resultado.innerHTML = "Higiene pessoal."
    break;
    case 'five':
        console.log('Limpeza e utensílios domésticos.')
        resultado.innerHTML = "Limpeza e utensílios domésticos."
    break;

    default:
    console.log('Opção inválida.')
    resultado.innerHTML = "Opção inválida."
    break;
}

}