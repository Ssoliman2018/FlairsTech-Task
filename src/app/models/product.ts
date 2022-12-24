export class Product {
    
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];

    constructor(product: Product) {
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.discountPercentage = product.discountPercentage;
        this.rating = product.rating;
        this.stock = product.stock;
        this.brand = product.brand;
        this.category = product.category;
        this.thumbnail = product.thumbnail;
        this.images = product.images
    }
}
