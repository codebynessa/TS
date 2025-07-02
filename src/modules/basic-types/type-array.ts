let films = ['O Senhor dos Anéis', 'Harry Potter', 'Star Wars'];

export function toUpperCaseStrings(arr: Array<string>) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films))