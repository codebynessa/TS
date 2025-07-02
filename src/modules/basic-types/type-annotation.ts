let product = 'Microondas';
let price = 647.52;

export function display(product: string, price:number){
    console.log(`Produto: ${product}, Preço: R$ ${price.toFixed(0)}`);
}
display(product, price);