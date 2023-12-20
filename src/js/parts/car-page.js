const requestProductName = document.querySelector('#request .card__name');
const requestProductImage = document.querySelector('#request .card__img img');
const requestProductPrice = document.querySelector('#request .card__price span');
const formProductNameField = document.querySelector('#request input[name="product_name"]');
const formProductPriceField = document.querySelector('#request input[name="product_price"]');

function getProducTInfo(product) {
    if (!product) return;

    const name = product.querySelector('[data-product-name]').textContent
    const image = product.querySelector('[data-product-img]').src
    let price = product.querySelector('[data-product-price]').textContent

    price = price.replace(/[р₽.]/gi, '');

    requestProductName.textContent = name;
    requestProductPrice.textContent = price;
    requestProductImage.src = image;


    formProductNameField.value = name
    formProductPriceField.value = price + ' Р';
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.hasAttribute('data-open-popup') && targetEl.hasAttribute('data-id') && targetEl.dataset.id == 'request') {
        getProducTInfo(targetEl.closest('[data-product]'))
    }
})