let shoppingCart = [200.86, 150.12, '33.90', 99.99, 'not defined', 0, ''];

export function totalize(values: (string | number)[]) {
    return values
    .map(value => typeof value === 'number' ? value : parseFloat(value))
    .filter(value => !isNaN(value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(totalize(shoppingCart));