let cartItems = 0;

function addToCart(productName) {
    cartItems++;
    updateCartCount();
    showNotification(`${productName} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cartItems;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function filterProducts(category) {
    // Filter products logic
}

function submitForm(e) {
    e.preventDefault();
    showNotification('Message sent successfully!');
    document.getElementById('contactForm').reset();
}

// Add more interactive features