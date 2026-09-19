// ================================
// PRODUCT
// ================================

class Product {
  static currentId = 1;

  constructor(name, price) {
    this.id = Product.currentId++;
    this.name = name;
    this.price = price;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error("Invalid ID");
    }

    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Invalid name");
    }

    this._name = value.trim();
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
      throw new Error("Invalid price");
    }

    this._price = value;
  }
}

// ================================
// ORDER
// ================================

class Order {
  constructor() {
    this.products = [];
    this.status = "NEW";
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  getProducts() {
    return this.products;
  }

  getSubtotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

// ================================
// DISCOUNTS
// ================================

class NoDiscount {
  apply(subtotal) {
    return subtotal;
  }
}

class PercentageDiscount {
  constructor(percent) {
    this.percent = percent;
  }

  apply(subtotal) {
    return subtotal - (subtotal * this.percent) / 100;
  }
}

class FixedDiscount {
  constructor(amount) {
    this.amount = amount;
  }

  apply(subtotal) {
    return Math.max(0, subtotal - this.amount);
  }
}

// ================================
// PAYMENT
// ================================

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid $${amount} using Credit Card`);

    return true;
  }
}

// ================================
// NOTIFICATION
// ================================

class EmailNotification {
  send(order) {
    console.log("Email notification sent");
  }
}

// ================================
// ORDER REPOSITORY
// ================================

class OrderRepository {
  constructor() {
    this.orders = [];
  }

  save(order) {
    this.orders.push(order);

    console.log("Order saved");
  }

  getOrders() {
    return this.orders;
  }
}

// ================================
// CHECKOUT
// ================================

class Checkout {
  constructor(payment, notification, repository) {
    this.payment = payment;
    this.notification = notification;
    this.repository = repository;
  }

  process(order, discount) {
    // 1. Check if order has products
    if (order.getProducts().length === 0) {
      throw new Error("Cannot pay for an empty order");
    }

    const subtotal = order.getSubtotal();

    console.log(`Subtotal: $${subtotal}`);

    const finalPrice = Math.max(0, discount.apply(subtotal));

    console.log(`Final price: $${finalPrice}`);

    const paymentSuccessful = this.payment.pay(finalPrice);

    if (!paymentSuccessful) {
      throw new Error("Payment failed");
    }

    order.status = "PAID";

    this.notification.send(order);

    this.repository.save(order);

    return order;
  }
}

// ==================================================
// USER FLOW
// ==================================================

const products = [
  new Product("iPhone", 1000),
  new Product("Samsung Galaxy", 800),
  new Product("MacBook", 1500),
  new Product("AirPods", 250),
  new Product("Charger", 50),
  new Product("Phone Case", 30),
];

console.log(products);
