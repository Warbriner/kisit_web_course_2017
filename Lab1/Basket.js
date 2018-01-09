var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

class ProductLineItem {
    constructor(product) {
        this.name = product.name;
        this.quantity = 1;
        this.price = product.price * this.quantity;
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity;
    }

    getPrice() {
        return this.price;
    }

    setQuantity(quantity) {
        this.price /= this.quantity;
        this.quantity = quantity;
        this.price *= this.quantity;
    }
}

var basket = (function () {
    var container = [];

    return {
        addProduct: function (PrId) {
            var exists = false;

            container.forEach(function (item, i, container) {
                exists = (item.getName() == products[PrId].name)
            });
            if (exists) alert("Товар уже существует в корзине");
            else 
                var pushed = container.push(new ProductLineItem(products[PrId]))
        },
        removeProduct: function (PrId) {
            container.forEach(function (item, i, container) {
                if (item.getName() == products[PrId].name) container.splice(i, 1);
            })
        },
        updateProductQuantity: function (PrId, quantity) {
            container.forEach(function (item, i, container) {
                if (item.getName() == products[PrId].name) {
                    item.setQuantity(quantity);
                }
            })
        },
        getTotalPrice: function () {
            var totalPrice = 0;

            container.forEach(function (item, i, container) {
                totalPrice += item.getPrice();
            })
            return totalPrice;
        }
    }
})();