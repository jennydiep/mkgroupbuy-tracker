import { generate } from 'shortid';
import { VendorData } from './vendor-data';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export class ProductData {
    // class that stores data for products
    private id:string;
    private name:string;
    private start:Date;
    private end:Date;
    private type:string;
    private price:number;
    private image:string;
    private vendors:VendorData[];


    constructor(name:string, start:Date, end:Date, type:string, price:number, image:string, vendors:VendorData[]) {
        this.id = generate();
        this.name = name; // name of product
        this.start = new Date(start); // start time of group buy
        this.end = new Date(end); // end time of group buy
        this.type = type; // type of product: keyboard or keycaps
        this.price = price; // price of product
        this.image = image; // link to image
        this.vendors = vendors;
    }

    getName():string {
        return this.name;
    }

    getId():string {
        return this.id;
    }

    getType():string {
        return this.type;
    }

    getPrice():number {
        return this.price;
    }

    getImage():string {
        return this.image;
    }

    getStart():Date {
        return this.start;
    }

    getEnd():Date {
        return this.end;
    }

    getDaysLeft():string {
        // returns days left in groupbuy
        if (this.start == null || this.end == null) {
            return "Unknown";
        }
        else {
            var nowDate = new Date();
            let nowTime = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
            const endTime = Date.UTC(this.end.getFullYear(), this.end.getMonth(), this.end.getDate());

            const timeDifference = Math.floor((endTime - nowTime) / _MS_PER_DAY); // difference in days
            return timeDifference + "";
        }
    }

    getVendors():VendorData[] {
        return this.vendors;
    }
}