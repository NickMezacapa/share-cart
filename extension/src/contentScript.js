// Function to extract items from the Amazon cart page
function getCartItems() {
    const items = [];
    
    // Amazon cart item elements - class name may change, need to inspect current DOM
    const cartElements = document.querySelectorAll('.sc-list-item');

    cartElements.forEach(item => {
        const title = item.querySelector('.sc-product-title').innerText;
        const price = item.querySelector('.sc-product-price').innerText;
        const link = item.querySelector('.sc-product-link').href;
        const quantity = item.querySelector('.sc-quantity-textfield').value;
        
        items.push({
            title: title.trim(),
            price: price.trim(),
            link: link.trim(),
            quantity: quantity.trim()
        });
    });

    return items;
}

// Send cart items back to the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "get_cart_items") {
        const cartItems = getCartItems();
        sendResponse({items: cartItems});
    }
});

