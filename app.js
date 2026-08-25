// Product Database
let products = {};
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();

        // Render products after loading
        renderProducts(getAllProducts(), 'featured-products');
    } catch (error) {
        console.error('Failed to load products:', error);
    }
}

// Cart Management
class Cart {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product, quantity, options) {
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
      options: options
    };

    this.items.push(cartItem);
    this.saveCart();
    return cartItem;
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.saveCart();
  }

  updateQuantity(itemId, quantity) {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  clear() {
    this.items = [];
    this.saveCart();
  }
}

// Initialize Cart
const cart = new Cart();

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  
  loadProducts();

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Update cart count on page load
  cart.updateCartCount();
});

// Product Filtering
function filterProducts(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  productCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Product Card Creation
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category.toLowerCase();

  card.innerHTML = `
    <div class="product-image">
    <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-description">${product.description}</div>
      <div class="product-price">Ksh${product.price.toFixed(2)}</div>
      <div class="product-actions">
        <button class="btn btn-primary btn-small" onclick="viewProduct('${product.id}')">Get It Now</button>
      </div>
    </div>
  `;

  return card;
}

// Quick Add to Cart
function quickAdd(productId) {
  const product = findProduct(productId);
  if (product) {
    cart.addItem(product, 1, {});
    showNotification('Product added to cart!');
  }
}

// Find Product by ID
function findProduct(productId) {
  for (const category in products) {
    const found = products[category].find(p => p.id === productId);
    if (found) return found;
  }
  return null;
}

// View Product Detail
function viewProduct(productId) {
  localStorage.setItem('selectedProduct', productId);
  window.location.href = 'product-detail.html';
}

// Show Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #27ae60;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Render Products Grid
function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  productsArray.forEach(product => {
    container.appendChild(createProductCard(product));
  });
}

// Get All Products
function getAllProducts() {
  let all = [];
  for (const category in products) {
    all = all.concat(products[category]);
  }
  return all;
}

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Category carousel scroll function
function scrollCategories(direction) {
  const container = document.getElementById('categories-container');
  if (container) {
    const scrollAmount = 320;
    container.scrollLeft += direction * scrollAmount;
  }
}

// Navigate to shop page with category filter
function navigateToShop(category) {
  const categoryMap = {
    'shirts': 'shirts',
    'polos': 'shirts',
    'sports': 'shirts',
    'hats': 'hats',
    'uniforms': 'shirts',
    'outerwear': 'hoodies',
    'cups': 'cups & drinkware',
    'mugs': 'mugs',
    'bottles': 'water bottles'
  };
  
  const mappedCategory = categoryMap[category.toLowerCase()] || category;
  window.location.href = `shop.html?category=${mappedCategory}`;
}

// FAQ accordion toggle function
function toggleFAQ(button) {
  const faqItem = button.closest('.faq-item');
  
  // Close other open items
  document.querySelectorAll('.faq-item.active').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current item
  faqItem.classList.toggle('active');
}

// Carousel navigation
let currentCarouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalCarouselItems = carouselItems.length;

function showCarouselItem(index) {
  // Wrap around
  if (index >= totalCarouselItems) {
    currentCarouselIndex = 0;
  } else if (index < 0) {
    currentCarouselIndex = totalCarouselItems - 1;
  } else {
    currentCarouselIndex = index;
  }

  // Hide all items
  carouselItems.forEach(item => {
    item.classList.remove('active');
  });

  // Show current item
  if (carouselItems[currentCarouselIndex]) {
    carouselItems[currentCarouselIndex].classList.add('active');
  }
}

function nextCarousel() {
  showCarouselItem(currentCarouselIndex + 1);
}

function prevCarousel() {
  showCarouselItem(currentCarouselIndex - 1);
}

// Auto-advance carousel
let carouselAutoPlayInterval;

function startCarouselAutoPlay() {
  carouselAutoPlayInterval = setInterval(() => {
    nextCarousel();
  }, 3000); 
}

function stopCarouselAutoPlay() {
  if (carouselAutoPlayInterval) {
    clearInterval(carouselAutoPlayInterval);
  }
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const carouselItemsInit = document.querySelectorAll('.carousel-item');
    if (carouselItemsInit.length > 0) {
      carouselItemsInit[0].classList.add('active');
      startCarouselAutoPlay();
      setupCarouselHoverPause();
    }
  });
} else {
  const carouselItemsInit = document.querySelectorAll('.carousel-item');
  if (carouselItemsInit.length > 0) {
    carouselItemsInit[0].classList.add('active');
    startCarouselAutoPlay();
    setupCarouselHoverPause();
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('mobile-menu-toggle');
  
  if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
    mobileMenu.style.display = 'block';
    hamburger.classList.add('active');
  } else {
    mobileMenu.style.display = 'none';
    hamburger.classList.remove('active');
  }
}

// Mobile Search Toggle
function toggleSearch() {
  const mobileSearch = document.getElementById('mobile-search');
  
  if (mobileSearch.style.display === 'none' || mobileSearch.style.display === '') {
    mobileSearch.style.display = 'flex';
    mobileSearch.querySelector('input').focus();
  } else {
    mobileSearch.style.display = 'none';
  }
}

// Close mobile menu when a link is clicked
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('mobile-menu-toggle');
  
  if (mobileMenu && mobileMenu.style.display === 'block') {
    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
      mobileMenu.style.display = 'none';
      hamburger.classList.remove('active');
    }
  }
});
