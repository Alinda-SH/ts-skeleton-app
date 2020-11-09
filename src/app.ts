let myName:string = "Alinda"

const productPrices:Array<number> = [2.10, 4.99,5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10]


function getSum():number {
    let total:number = 0;
    for (let i = 0; i < productPrices.length; i++) {
    total += productPrices[i]
    }
    return total
}
console.log(getSum())