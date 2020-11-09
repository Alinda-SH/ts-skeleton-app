let myName = "Alinda";
const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
function getSum() {
    let total = 0;
    for (let i = 0; i < productPrices.length; i++) {
        total += productPrices[i];
    }
    return total;
}
console.log(getSum());
//# sourceMappingURL=app.js.map