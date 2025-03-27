function pricePrettier(price) {
    return String(price)
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})/g, '$1 ')
    .split('')
    .reverse()
    .join('')
    .trim();
}


export {pricePrettier}