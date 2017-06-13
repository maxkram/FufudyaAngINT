"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.pageTitle = 'Ассортимент';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = 'тележка';
        this.products = [
            {
                "productId": 1,
                "productName": "Грабли",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Грабли с 1.5-метровой рукояткой.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Садовая тележка",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "Садовая тележка вместимостью 60 литров",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Молоток",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Стальной молоток с гвоздедером",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 8,
                "productName": "Пила",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "40-см стальная ручная пила",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 10,
                "productName": "Пульт для видеоигр",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Стандартный пульт управления с 2-мя кнопками",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        console.log('In OnInit');
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map