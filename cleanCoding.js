class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(id) {
        this.id = id;
        this.products = [];
        this.isCancelled = false;
    }

    addProduct(product) {
        if (!this.isCancelled) {
            this.products.push(product);
        } else {
            console.log("Order is cancelled. Cannot add products.");
        }
    }

    removeProduct(productId) {
        if (!this.isCancelled) {
            this.products = this.products.filter(product => product.id !== productId);
        } else {
            console.log("Order is cancelled. Cannot remove products.");
        }
    }

    placeOrder() {
        if (!this.isCancelled) {
            console.log("Order placed successfully.");
        } else {
            console.log("Cannot place a cancelled order.");
        }
    }

    cancelOrder() {
        if (!this.isCancelled) {
            this.isCancelled = true;
            console.log("Order cancelled successfully.");
        } else {
            console.log("Order is already cancelled.");
        }
    }

    listAllProducts() {
        console.log("Products in the order:");
        this.products.forEach(product => {
            console.log(`- ${product.name}: $${product.price}`);
        });
    }

    static listAllOrders(orders) {
        console.log("All orders:");
        orders.forEach(order => {
            console.log(`Order ${order.id}`);
        });
    }
}

// Example usage
const product1 = new Product(1, 'Product 1', 100);
const product2 = new Product(2, 'Product 2', 200);

const order1 = new Order(1);
order1.addProduct(product1);
order1.addProduct(product2);
order1.placeOrder();

const order2 = new Order(2);
order2.addProduct(product1);
order2.addProduct(product2);
order2.cancelOrder();

Order.listAllOrders([order1, order2]);
