import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; 
import { GoldApiService } from '../services/goldapi.service';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goldPrice: number | undefined;
  error: string | undefined;
  isBrowser: boolean;

  nrings = [
    { name: 'Ring 1', price: 'Rs. 9,000', image: './assets/Image/38.jpg' },
    { name: 'Ring 2', price: 'Rs. 12,000', image: './assets/Image/bg-2.jpg' },
    { name: 'Ring 3', price: 'Rs. 10,000', image: './assets/Image/product.jpg' },
    { name: 'Ring 4', price: 'Rs. 11,000', image: './assets/Image/bg-3.jpg' }
];
  // Data Arrays
  bangles = [
    { name: 'Bangle 1', price: 'Rs. 9,000', image: './assets/Image/OIP.jpg' },
    { name: 'Bangle 2', price: 'Rs. 12,000', image: './assets/Image/31.jpg' },
    { name: 'Bangle 3', price: 'Rs. 10,000', image: './assets/Image/product.jpg' },
    { name: 'Bangle 4', price: 'Rs. 28,000', image: './assets/Image/28.jpg' }
  ];

  gchains = [
    { name: 'Chain 1', price: 'Rs. 9,000', image: './assets/chain/OIP (5).jpg' },
    { name: 'Chain 2', price: 'Rs. 12,000', image: './assets/chain/OIP (1).jpg' },
    { name: 'Chain 3', price: 'Rs. 10,000', image: './assets/chain/OIP (4).jpg' },
    { name: 'Chain 4', price: 'Rs. 11,000', image: './assets/chain/5.webp' }
  ];

  gpendants = [
    { name: 'Gold Pendant V1', price: 'Rs. 9,000', image: 'assets/pendant/1.jpg' },
    { name: 'Diamond Drop', price: 'Rs. 12,000', image: 'assets/pendant/2.jpg' },
    { name: 'Classic Heart', price: 'Rs. 10,000', image: 'assets/pendant/3.jpg' },
    { name: 'Royal Emerald', price: 'Rs. 11,000', image: 'assets/pendant/R.jpg' }
  ];

  rings = [
    { name: 'Ring 1', price: 'Rs. 9,000', image: './assets/erings/OIP (6).jpg' },
    { name: 'Ring 2', price: 'Rs. 12,000', image: './assets/erings/0.webp' },
    { name: 'Ring 3', price: 'Rs. 10,000', image: './assets/erings/7.webp' },
    { name: 'Ring 4', price: 'Rs. 11,000', image: './assets/erings/2.jpg' }
  ];

  earrings = [
    { name: 'Earring 1', price: 'Rs. 9,000', image: './assets/earrings/OIP.jpg' },
    { name: 'Earring 2', price: 'Rs. 12,000', image: './assets/earrings/59297_1.jpg' },
    { name: 'Earring 3', price: 'Rs. 10,000', image: './assets/earrings/OIP (2).jpg' },
    { name: 'Earring 4', price: 'Rs. 11,000', image: './assets/earrings/DazzlingPearls2.webp' }
  ];

  bracelets = [
  { name: 'Bracelet 1', price: 'Rs. 9,000', image: './assets/dbracelet/1.webp' },
  { name: 'Bracelet 2', price: 'Rs. 12,000', image: './assets/dbracelet/2.jpg' },
  { name: 'Bracelet 3', price: 'Rs. 10,000', image: './assets/dbracelet/4.jpg' },
  { name: 'Bracelet 4', price: 'Rs. 11,000', image: './assets/dbracelet/3.jpg' }
];

  
  chains = [
    { name: 'Chain 1', price: 'Rs. 9,000', image: './assets/chain/08e.jpg' },
    { name: 'Chain 2', price: 'Rs. 12,000', image: './assets/chain/OIP.jpg' },
    { name: 'Chain 3', price: 'Rs. 10,000', image: './assets/chain/ch.webp' },
    { name: 'Chain 4', price: 'Rs. 11,000', image: './assets/chain/OIP (3).jpg' }
  ];
  
    coins = [
    { name: '5 Gram Coin', price: 'Rs. 9,000', image: './assets/coins/50g1.jpg' },
    { name: '10 Gram Coin', price: 'Rs. 12,000', image: './assets/coins/50g2.jpg' },
    { name: '50 Gram Coin', price: 'Rs. 45,000', image: './assets/coins/100g1.jpg' },
    { name: '100 Gram Coin', price: 'Rs. 89,000', image: './assets/coins/100g2.jpg' }
  ];


  nbracelets = [
    { name: 'Bracelet 1', price: 'Rs. 9,000', image: './assets/bracelet/OIP.jpg' },
    { name: 'Bracelet 2', price: 'Rs. 12,000', image: './assets/bracelet/OIP (1).jpg' },
    { name: 'Bracelet 3', price: 'Rs. 10,000', image: './assets/bracelet/HTB1VezanGmWQ1JjSZPhq6xCJFXas__54914.jpg' },
    { name: 'Bracelet 4', price: 'Rs. 11,000', image: './assets/bracelet/0378c11f67eed9c946c63e63a08e8c9f.jpg' }
];
  pendant = [
  { name: 'Diamond Pendant 1', price: 'Rs. 9,000', image: './assets/dpendant/2.jpg' },
  { name: 'Diamond Pendant 2', price: 'Rs. 12,000', image: './assets/dpendant/1.jpg' },
  { name: 'Diamond Pendant 3', price: 'Rs. 10,000', image: './assets/dpendant/3.jpg' },
  { name: 'Diamond Pendant 4', price: 'Rs. 11,000', image: './assets/dpendant/4.jpg' }
];

  // Inside your HomeComponent class...

  drings = [
    { name: 'Ring 1', price: 'Rs. 9,000', image: './assets/Image/38.jpg' },
    { name: 'Ring 2', price: 'Rs. 12,000', image: './assets/Image/bg-2.jpg' },
    { name: 'Ring 3', price: 'Rs. 10,000', image: './assets/Image/product.jpg' },
    { name: 'Ring 4', price: 'Rs. 11,000', image: './assets/Image/bg-3.jpg' }
  ];

  nosepins = [
    { name: 'Nosepin 1', price: 'Rs. 9,000', image: './assets/nosepin/2.jpg' },
    { name: 'Nosepin 2', price: 'Rs. 12,000', image: './assets/nosepin/3.webp' },
    { name: 'Nosepin 3', price: 'Rs. 10,000', image: './assets/nosepin/5.jpg' },
    { name: 'Nosepin 4', price: 'Rs. 11,000', image: './assets/nosepin/9.jpg' }
];

  necklace = [
  { name: 'Necklace 1', price: 'Rs. 9,000', image: './assets/necklace/ons23015_1.jpg' },
  { name: 'Necklace 2', price: 'Rs. 12,000', image: './assets/necklace/R.jpg' },
  { name: 'Necklace 3', price: 'Rs. 10,000', image: './assets/necklace/il_570xN.677939224_77jy.jpg' },
  { name: 'Necklace 4', price: 'Rs. 11,000', image: './assets/necklace/bridal-gold-jewellery-designs.jpg' }
];
// Use the existing setSelectedItem(ring) and addToCart(ring) methods
  selectedItem: any = null;
  buttonWidth = 240;

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [{
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: { gateway: "example", gatewayMerchantId: "exampleGatewayMerchantId" }
      }
    }],
    merchantInfo: { merchantId: "1234567890", merchantName: "Pranav Jewellery" },
    transactionInfo: { totalPriceStatus: "FINAL", totalPrice: "100.00", currencyCode: "INR", countryCode: "IN" }
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private goldApiService: GoldApiService,
    private cartService: CartService,
    private jewelleryService: JewelleryService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.fetchGoldPrice();
    }
  }

   ngAfterViewInit(): void {
    if (this.isBrowser) {
      const carouselElement = document.querySelector('#heroCarousel');
      if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
          interval: 3000, // 3 seconds
          ride: 'carousel'
        });
      }
    }
  }

  fetchGoldPrice(): void {
    this.goldApiService.getGoldPrice().subscribe({
      next: (data) => this.goldPrice = data.price,
      error: (err) => this.error = 'Error fetching gold price'
    });
  }

  // Use this ONE method for all product selections
  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert('Added to cart!');
  }

 confirmOrder(orderData: any) {
  if (this.selectedItem) {
    orderData.itemName = this.selectedItem.name;
    orderData.itemPrice = this.selectedItem.price;
    
    this.jewelleryService.addOrder(orderData).subscribe({
      next: (res) => {
        alert('Order Placed Successfully for ' + this.selectedItem.name);
      },
      error: (err) => alert('Error: ' + err.message)
    });
  }
}

  onLoadPaymentData(event: any) {
    console.log("Payment Success", event);
  }
}