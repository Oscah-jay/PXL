// ============================================
// GARMENT PRINTING BUSINESS - MAIN APP
// ============================================

// Product Database
const products = {
  shirts: [
    {
      id: 'shirt-001',
      name: 'Premium Cotton T-Shirt',
      category: 'Shirts',
      price: 12.99,
      image: '👕',
      description: 'High-quality 100% cotton t-shirt perfect for custom branding',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Navy', 'Gray', 'Red'],
      specs: {
        material: '100% Cotton',
        weight: '180gsm',
        care: 'Machine wash cold, lay flat to dry',
        warranty: 'Quality guaranteed for 2 years'
      }
    },
    {
      id: 'shirt-002',
      name: 'Polo Shirt',
      category: 'Shirts',
      price: 18.99,
      image: '👔',
      description: 'Classic polo shirt for professional branding',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Navy', 'Red', 'Green'],
      specs: {
        material: '65% Polyester, 35% Cotton',
        weight: '200gsm',
        care: 'Machine wash warm, tumble dry medium',
        warranty: 'Quality guaranteed for 2 years'
      }
    },
    {
      id: 'shirt-003',
      name: 'Performance Dry-Fit Shirt',
      category: 'Shirts',
      price: 16.99,
      image: '🏃',
      description: 'Moisture-wicking fabric for active wear',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'White', 'Gray'],
      specs: {
        material: '100% Polyester',
        weight: '150gsm',
        care: 'Machine wash cold, tumble dry low',
        warranty: 'Quality guaranteed for 1 year'
      }
    }
  ],
  hoodies: [
    {
      id: 'hoodie-001',
      name: 'Classic Pullover Hoodie',
      category: 'Hoodies',
      price: 29.99,
      image: '🧥',
      description: 'Comfortable pullover hoodie with kangaroo pocket',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'White', 'Charcoal'],
      specs: {
        material: '80% Cotton, 20% Polyester',
        weight: '280gsm',
        care: 'Machine wash cold, hang to dry',
        warranty: 'Quality guaranteed for 2 years'
      }
    },
    {
      id: 'hoodie-002',
      name: 'Zip-Up Hoodie',
      category: 'Hoodies',
      price: 34.99,
      image: '🧥',
      description: 'Full zip hoodie with multiple pockets',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Gray', 'Red'],
      specs: {
        material: '80% Cotton, 20% Polyester',
        weight: '300gsm',
        care: 'Machine wash cold, hang to dry',
        warranty: 'Quality guaranteed for 2 years'
      }
    }
  ],
  hats: [
    {
      id: 'hat-001',
      name: 'Baseball Cap',
      category: 'Hats',
      price: 9.99,
      image: '🧢',
      description: 'Classic baseball cap for everyday wear',
      sizes: ['One Size', 'Adjustable'],
      colors: ['Black', 'White', 'Navy', 'Red', 'Green', 'Khaki'],
      specs: {
        material: '100% Cotton',
        closure: 'Adjustable buckle back',
        visor: '3D embroidered',
        warranty: 'Quality guaranteed for 1 year'
      }
    },
    {
      id: 'hat-002',
      name: 'Beanie',
      category: 'Hats',
      price: 12.99,
      image: '🎿',
      description: 'Warm knit beanie perfect for winter campaigns',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Gray', 'White', 'Burgundy'],
      specs: {
        material: '100% Acrylic',
        weight: '150gsm',
        care: 'Hand wash, lay flat to dry',
        warranty: 'Quality guaranteed for 1 year'
      }
    }
  ],
  cups: [
    {
      id: 'cup-001',
      name: 'Ceramic Mug',
      category: 'Cups & Drinkware',
      price: 7.99,
      image: '☕',
      description: 'Classic white ceramic mug with glossy finish',
      sizes: ['11oz', '15oz'],
      colors: ['White'],
      specs: {
        material: 'Ceramic',
        capacity: '11oz or 15oz',
        print: 'Full wrap around',
        care: 'Dishwasher safe, microwave safe'
      }
    },
    {
      id: 'cup-002',
      name: 'Travel Tumbler',
      category: 'Cups & Drinkware',
      price: 14.99,
      image: '🥤',
      description: 'Insulated tumbler with lid',
      sizes: ['16oz', '20oz'],
      colors: ['Black', 'White', 'Stainless Steel'],
      specs: {
        material: 'Double Wall Stainless Steel',
        capacity: '16oz or 20oz',
        print: 'Full color printing',
        care: 'Hand wash, do not microwave'
      }
    }
  ],
  mugs: [
    {
      id: 'mug-001',
      name: 'Standard Coffee Mug',
      category: 'Mugs',
      price: 6.99,
      image: '☕',
      description: 'Durable white ceramic mug',
      sizes: ['11oz'],
      colors: ['White'],
      specs: {
        material: 'Ceramic',
        capacity: '11oz',
        print: 'Custom design area',
        care: 'Dishwasher safe'
      }
    },
    {
      id: 'mug-002',
      name: 'Color Changing Mug',
      category: 'Mugs',
      price: 11.99,
      image: '☕',
      description: 'Reveals design when filled with hot liquid',
      sizes: ['11oz'],
      colors: ['White'],
      specs: {
        material: 'Ceramic with heat-reactive coating',
        capacity: '11oz',
        print: 'Thermochromic design',
        care: 'Dishwasher safe'
      }
    }
  ],
  bottles: [
    {
      id: 'bottle-001',
      name: 'Stainless Steel Water Bottle',
      category: 'Water Bottles',
      price: 18.99,
      image: '💧',
      description: 'Keeps drinks cold for 24 hours',
      sizes: ['18oz', '24oz', '32oz'],
      colors: ['White', 'Black', 'Teal', 'Rose Gold'],
      specs: {
        material: 'Double Wall Stainless Steel',
        capacity: '18oz, 24oz, or 32oz',
        print: 'Powder coat finish',
        care: 'Hand wash recommended'
      }
    },
    {
      id: 'bottle-002',
      name: 'Bamboo Water Bottle',
      category: 'Water Bottles',
      price: 22.99,
      image: '💧',
      description: 'Eco-friendly bamboo and stainless steel',
      sizes: ['16oz', '25oz'],
      colors: ['Natural', 'Black'],
      specs: {
        material: 'Bamboo & Stainless Steel',
        capacity: '16oz or 25oz',
        print: 'Eco-friendly UV print',
        care: 'Hand wash only'
      }
    }
  ]
};

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
    <div class="product-image">${product.image}</div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-description">${product.description}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="product-actions">
        <button class="btn btn-primary btn-small" onclick="viewProduct('${product.id}')">View</button>
        <button class="btn btn-secondary btn-small" onclick="quickAdd('${product.id}')">Add to Cart</button>
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
