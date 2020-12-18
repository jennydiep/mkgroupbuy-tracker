export class VendorData {
    // class to store data about vendors, to be stored within productdata
    name:string;
    link:string;
    proxy:string;

    constructor(name:string, link:string, proxy:string) {
        this.name = name;
        this.link = link;
        this.proxy = proxy;
     }


}