# PrintBrand - Custom Garment & Cup Printing Website

A fully responsive, vanilla HTML/CSS/JavaScript website for a garment and cup printing business. Perfect for brands, startups, and organizations looking to customize apparel and drinkware.

## 🎯 Features

### Pages
- **Home** - Hero section with service overview and featured products
- **Shop** - Complete product catalog with category and price filtering
- **Product Detail** - Detailed view with size/color selection and specifications
- **Cart** - Shopping cart with add/remove/quantity management
- **Checkout** - Order form with email submission system
- **Contact** - Contact form with FAQ section and business information

### Functionality
- ✅ Responsive mobile-first design (works on all screen sizes)
- ✅ Product filtering by category and price
- ✅ Shopping cart with localStorage persistence
- ✅ Size and color selection
- ✅ Order summary with tax and shipping calculation
- ✅ Email-based checkout (sends order via email client)
- ✅ Hamburger mobile menu
- ✅ Smooth animations and transitions
- ✅ 7 product categories with 14 total products
- ✅ Professional Black, White, and Gold color scheme

## 📁 Project Structure

```
public/
├── index.html              # Home page
├── shop.html              # Product catalog with filters
├── product-detail.html    # Individual product page
├── cart.html              # Shopping cart
├── checkout.html          # Order form and checkout
├── contact.html           # Contact form and support
├── styles.css             # Complete styling
├── app.js                 # Core functionality (cart, filtering, etc.)
└── README.md              # This file
```

## 🚀 Getting Started

### View Locally
The site is already set up to run! To view it:

```bash
cd public
python3 -m http.server 3000
# Or use: python -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

### Files
All files are in the `public/` directory:
- HTML files for each page
- `styles.css` for all styling
- `app.js` for JavaScript functionality

## 📦 Products Included

### Shirts
- Premium Cotton T-Shirt ($12.99)
- Polo Shirt ($18.99)
- Performance Dry-Fit Shirt ($16.99)

### Hoodies
- Classic Pullover Hoodie ($29.99)
- Zip-Up Hoodie ($34.99)

### Hats
- Baseball Cap ($9.99)
- Beanie ($12.99)

### Drinkware
- Ceramic Mug ($7.99)
- Travel Tumbler ($14.99)
- Standard Coffee Mug ($6.99)
- Color Changing Mug ($11.99)
- Stainless Steel Water Bottle ($18.99)
- Bamboo Water Bottle ($22.99)

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#1a1a1a)
- **Secondary**: White (#ffffff)
- **Accent**: Gold (#D4AF37)
- No gradients - solid colors only

### Responsive Breakpoints
- Desktop: Full grid layout (4 columns)
- Tablet: 2-3 column grid
- Mobile: 1-2 column grid with hamburger menu

### Typography
- Sans-serif font throughout
- Proper heading hierarchy (h1-h6)
- Readable line heights (1.4-1.6)

## 💡 How to Use

### For Customers
1. **Browse**: Visit the Shop page to see all products
2. **Filter**: Use category buttons or price range selector
3. **View Details**: Click "View" on any product for full details
4. **Select Options**: Choose size and color if applicable
5. **Add to Cart**: Click "Add to Cart" button
6. **Review**: Go to cart to review items
7. **Checkout**: Click "Proceed to Checkout"
8. **Order**: Fill out your information and submit
9. **Email**: Your default email client opens with the order details

### For Business Owners
1. **Edit Products**: Modify products in `app.js` (products object)
2. **Change Prices**: Update price values in product definitions
3. **Add Products**: Follow the existing product structure in `app.js`
4. **Customize Business Info**: Update contact info throughout HTML files
5. **Modify Colors**: Change CSS variables in `styles.css` root section

## ⚙️ Customization Guide

### Adding a New Product
In `app.js`, find the products object and add:

```javascript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'Category Name',
  price: 19.99,
  image: '👕', // emoji or unicode
  description: 'Product description',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['Black', 'White', 'Navy'],
  specs: {
    material: '100% Cotton',
    weight: '180gsm',
    care: 'Machine wash cold',
    warranty: 'Quality guaranteed for 2 years'
  }
}
```

### Changing Business Information
Update these in all HTML files:
- Company name: "PrintBrand"
- Email: "info@printbrand.com"
- Phone: "(555) 123-4567"
- Address: "123 Printing Lane, Design District, CA 90210"

### Adjusting Colors
Edit the root CSS variables in `styles.css`:

```css
:root {
  --primary-black: #1a1a1a;
  --primary-white: #ffffff;
  --accent-gold: #D4AF37;
  --light-gray: #f5f5f5;
  --dark-gray: #333333;
  --border-gray: #e0e0e0;
  --success-green: #27ae60;
  --error-red: #e74c3c;
}
```

## 🔄 Cart System

- **Storage**: Uses browser localStorage to persist cart between sessions
- **Cart Count**: Shows badge with item count in header
- **Calculations**: Automatic tax (8%) and shipping ($10 for orders under $100)
- **Persistence**: Cart survives page refreshes

## 📧 Email Integration

The checkout uses a mailto: link which opens the user's default email client with:
- Pre-filled subject line
- Complete order details
- Customer information
- Product list with prices
- Special instructions

*Note: For production, consider using a service like Formspree or EmailJS for backend email handling.*

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Touch-friendly buttons and inputs
- Proper font sizing for readability
- Flexible grid layouts
- Optimized for all screen sizes from 320px to 1920px

## ⚡ Performance

- Vanilla JavaScript (no frameworks)
- No external dependencies
- Fast loading times
- Smooth CSS transitions (no excessive animations)
- Lightweight codebase

## 🐛 Troubleshooting

### Cart Not Saving
- Make sure localStorage is enabled in your browser
- Clear browser cache if experiencing issues

### Images Not Showing
- The site uses emoji for product images (no image files needed)
- To use actual images, replace emoji with `<img>` tags

### Styling Issues
- Check that `styles.css` is in the same directory as HTML files
- Verify CSS file path in HTML `<link>` tag

## 🔐 Security Notes

For production:
1. Add SSL/HTTPS
2. Implement proper backend email system
3. Add form validation on server-side
4. Consider payment gateway integration (Stripe, PayPal)
5. Implement proper session management

## 📄 License

Free to use and modify for your business.

## 🎉 Ready to Deploy

This site is ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service
- Traditional web hosting with FTP

Simply upload the `public/` folder contents to your hosting provider.

---

**Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and simplicity.**
