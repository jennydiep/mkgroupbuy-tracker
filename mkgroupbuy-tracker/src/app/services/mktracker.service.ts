import { Injectable } from '@angular/core';
import { ProductData } from '../data/product-data'
import { VendorData } from '../data/vendor-data';

@Injectable({
  providedIn: 'root'
})
export class MktrackerService {
  private jsonData:any[];
  private data:ProductData[];

  constructor() {
    this.initializeJSONData();
    this.data = this.toObject();
    
   }

  initializeJSONData(){
    // TODO: link from db
    // information in json format of list of products
    this.jsonData = [
      {
        'name': "GMK Thai Tea",
        "start": "11/20/2020",
        "end": "12/19/2020",
        "type": "Keycaps",
        "price": "135",
        "image": "https://i.imgur.com/mRMXAqh.png",
        "vendors": [{
            "name": "Panc Interactive",
            "url" : "https://panc.co/",
            "proxy": "US"
          },
          {
            "name": "Deskhero",
            "url" : "https://www.deskhero.ca/",
            "proxy": "CA"
          },
          {
            "name": "MyKeyboard",
            "url" : "https://mykeyboard.eu/",
            "proxy": "EU"
          },
          {
            "name": "Prototypist",
            "url" : "https://prototypist.net/",
            "proxy": "UK"
          },
          {
            "name": "ZFrontier",
            "url" : "https://www.zfrontier.com/",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "NK65 Olivia Edition",
        "start": "11/23/2020",
        "end": "12/20/2020",
        "type": "Keyboard",
        "price": "200",
        "image": "https://preview.redd.it/zxgh8otk04361.png?width=1024&auto=webp&s=d31f29138f180dbaedec32bebd9e7a5cf1c0aa4d",
        "vendors": [{
            "name": "CannonKeys",
            "url" : "https://cannonkeys.com/collections/featured/products/gb-gmk-pink-on-navy",
            "proxy": "US"
          },
          {
            "name": "DeskHero",
            "url" : "https://www.deskhero.ca/collections/open-group-buys/products/gmk-pink-on-navy",
            "proxy": "CAN"
          }]
      },
      {
        'name': "Monarch 65",
        "start": "12/5/2020",
        "end": "12/20/2020",
        "type": "Keyboard",
        "price": "500",
        "image": "https://i.imgur.com/sNtFC6p.jpeg",
        "vendors": [{
            "name": "Worldwide Form",
            "url" : "https://docs.google.com/forms/d/1vkEi35L5diBy2GQ0TUMvpM7qaRk9B7jSk5FA_qUyiv0/viewform?edit_requested=true",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "Panc40",
        "start": "11/23/2020",
        "end": "12/20/2020",
        "type": "Keyboard",
        "price": "320",
        "image": "https://preview.redd.it/xoxmtxund9161.png?width=703&auto=webp&s=ee40a131af85961be351da8680bbc3d21a78d5bb",
        "vendors": [{
            "name": "Panc Interactive",
            "url" : "https://panc.co/",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "babyV",
        "start": "11/30/2020",
        "end": "12/21/2020",
        "type": "Keyboard",
        "price": "120",
        "image": "https://i.imgur.com/iRUm9I5.jpg",
        "vendors": [{
            "name": "Worldwide Form",
            "url" : "https://docs.google.com/forms/d/e/1FAIpQLSclhZASVqYrAz9hR8QWxKX411fhBok37absbl2qfifdhuBTAQ/viewform",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "Discipad",
        "start": "12/9/2020",
        "end": "12/22/2020",
        "type": "Keyboard",
        "price": "79.99",
        "image": "https://cdn.shopify.com/s/files/1/0470/9249/8582/products/Edit-02_e42e5af9-22c9-4772-8d98-3ba7dfe0bb6d_1024x1024@2x.jpg?v=1607535264",
        "vendors": [{
            "name": "Last Padawan",
            "url" : "https://lastpadawan.store/",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "Melgeek MG Monster",
        "start": "12/16/2020",
        "end": "12/31/2020",
        "type": "Keycaps",
        "price": "99.99",
        "image": "https://preview.redd.it/jyq6rrqegt561.png?width=1024&auto=webp&s=1e4fc1c3e38538851a597cc2458dbff88db84c32",
        "vendors": [{
            "name": "melgeek",
            "url" : "https://www.melgeek.com/",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "Rama Kara HHKB",
        "start": "11/12/2020",
        "end": "12/31/2020",
        "type": "Keyboard",
        "price": "160",
        "image": "https://cdn.shopify.com/s/files/1/2689/3156/products/RW-KARA.2277_900x900.png?v=1605600824",
        "vendors": [{
            "name": "ramaworks",
            "url" : "https://ramaworks.store/",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "GMK 80082",
        "start": "12/6/2020",
        "end": "1/1/2021",
        "type": "Keycaps",
        "price": "99.99",
        "image": "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/1_Standard_1000x.png?v=1607048152",
         "vendors": [{
            "name": "Dixie",
            "url" : "https://dixiemech.store/",
            "proxy": "US"
          },
          {
            "name": "Oblotzky Industries",
            "url" : "https://oblotzky.industries/",
            "proxy": "EU"
          },
          {
            "name": "deskhero",
            "url" : "https://www.deskhero.ca/",
            "proxy": "CA"
          },
          {
            "name": "Prototypist",
            "url" : "https://prototypist.net/",
            "proxy": "UK"
          },
          {
            "name": "ZFrontier",
            "url" : "https://www.zfrontier.com/",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "GMK Aurora Polaris",
        "start": "12/1/2020",
        "end": "1/1/2021",
        "type": "Keycaps",
        "price": "134.99",
        "image": "https://i.imgur.com/6h1Fzf3.png",
         "vendors": [{
            "name": "MechsandCo",
            "url" : "https://mechsandco.com/products/gmk-aurora-polaris",
            "proxy": "US"
          },
          {
            "name": "Oblotzky Industries",
            "url" : "https://oblotzky.industries/",
            "proxy": "EU"
          },
          {
            "name": "deskhero",
            "url" : "https://www.deskhero.ca/collections/open-group-buys/products/gmk-aurora-polaris",
            "proxy": "CA"
          },
          {
            "name": "MyKeyboard",
            "url" : "https://mykeyboard.eu/catalogue/category/group-buys/gmk-aurora-polaris_383/",
            "proxy": "EU"
          },
          {
            "name": "KBDFans",
            "url" : "https://kbdfans.com/collections/new-arrival/products/gb-gmk-aurora-polaris",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "MT3 Extended 2048",
        "start": "12/2/2020",
        "end": "1/2/2021",
        "type": "Keycaps",
        "price": "85",
        "image": "https://media.biipmk.com/mt3_extended2048/MT3_Extended-2048-Renders_Zenith-01.jpg",
         "vendors": [{
            "name": "Drop",
            "url" : "https://drop.com/buy/drop-biip-mt3-extended-custom-keycap-set?mode=guest_open",
            "proxy": "Worldwide"
          }]
      },
      {
        'name': "GMK Pink On Navy",
        "start": "12/1/2020",
        "end": "1/2/2021",
        "type": "Keycaps",
        "price": "134.99",
        "image": "https://cdn.discordapp.com/attachments/706883566151270483/708376776799289404/Pon_basekit_updated_v4.png",
         "vendors": [{
            "name": "CannonKeys",
            "url" : "https://cannonkeys.com/collections/featured/products/gb-gmk-pink-on-navy",
            "proxy": "US"
          },
          {
            "name": "DeskHero",
            "url" : "https://www.deskhero.ca/collections/open-group-buys/products/gmk-pink-on-navy",
            "proxy": "CA"
          },
          {
            "name": "deskhero",
            "url" : "https://prototypist.net/collections/gmk-pink-on-navy/products/group-buy-gmk-pink-on-navy",
            "proxy": "EU"
          },
          {
            "name": "Prototypist",
            "url" : "https://mykeyboard.eu/catalogue/category/group-buys/gmk-aurora-polaris_383/",
            "proxy": "EU"
          },
          {
            "name": "Ilumkb",
            "url" : "https://ilumkb.com/collections/groupbuy",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "GMK Serika R2",
        "start": "12/3/2020",
        "end": "1/8/2021",
        "type": "Keycaps",
        "price": "110",
        "image": "https://zambumon.files.wordpress.com/2020/09/zambumon-gmk_serika_2-kit_01-hiragana_core-portfolio.png",
         "vendors": [{
            "name": "NovelKeys",
            "url" : "https://novelkeys.xyz/collections/frontpage/products/gmk-serika-2",
            "proxy": "US"
          },
          {
            "name": "DeskHero",
            "url" : "https://www.deskhero.ca/",
            "proxy": "CA"
          },
          {
            "name": "IlumKB",
            "url" : "https://ilumkb.com/collections/groupbuy/products/gb-gmk-serika-2",
            "proxy": "SEA"
          },
          {
            "name": "Oblotzky Industries",
            "url" : "https://oblotzky.industries/products/gmk-serika-2",
            "proxy": "EU"
          },
          {
            "name": "ZFrontier",
            "url" : "https://en.zfrontier.com/",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "DSA Paperwork",
        "start": "12/10/2020",
        "end": "1/10/2021",
        "type": "Keycaps",
        "price": "100",
        "image": "https://i.imgur.com/SkImSSf.png",
         "vendors": [{
         "name": "Trashman",
            "url" : "https://trashman.club/dsa-paperwork",
            "proxy": "worldwide"
          }]
      },
      {
        'name': "ROTR Macro Pad",
        "start": "12/11/2020",
        "end": "1/12/2021",
        "type": "Keyboard",
        "price": "223",
        "image": "https://i.imgur.com/6Bxeyzx.jpeg",
         "vendors": [{
         "name": "Mechboards",
            "url" : "https://mechboards.co.uk/shop/group-buy/polarity-works-rotr/",
            "proxy": "worldwide"
          }]
      },
      {
        'name': "GMK Alpine",
        "start": "11/30/2020",
        "end": "1/13/2021",
        "type": "Keycaps",
        "price": "139.99",
        "image": "https://i.imgur.com/RvqglFy.jpg",
         "vendors": [{
            "name": "Kono",
            "url" : "https://kono.store/collections/new/products/gmk-alpine?variant=37691980775623",
            "proxy": "US"
          },
          {
            "name": "AshKeebs",
            "url" : "https://www.ashkeebs.com/shop/",
            "proxy": "CA"
          },
          {
            "name": "CandyKeys",
            "url" : "https://candykeys.com/group-buys",
            "proxy": "EU"
          },
          {
            "name": "ProtoTypist",
            "url" : "https://prototypist.net/collections/gmk-alpine/products/group-buy-gmk-alpine",
            "proxy": "UK"
          },
          {
            "name": "KBDFans",
            "url" : "https://kbdfans.com/collections/new-arrival/products/gb-gmk-alpine",
            "proxy": "ASIA"
          }]
      },
      {
        'name': "Boop 65",
        "start": "12/14/2020",
        "end": "1/14/2021",
        "type": "Keyboard",
        "price": "309",
        "image": "https://preview.redd.it/rxh16snti9561.png?width=908&auto=webp&s=229befb2615c4188652ac0c3e804cd0bd629eaeb",
         "vendors": [{
         "name": "KBDFans",
            "url" : "https://kbdfans.com/products/ickbdfans-x-biip-gasket-boop-65-mechanical-keyboards-diy-kit?variant=34395620999307",
            "proxy": "Worldwide"
          }]

        },
        {
          'name': "GMK Stealth",
          "start": "12/16/2020",
          "end": "1/16/2021",
          "type": "Keycaps",
          "price": "100",
          "image": "https://i.imgur.com/Oc2ZtyG.png",
           "vendors": [{
              "name": "ProjectKeyboard",
              "url" : "https://store.projectkeyboard.com/collections/gmk-stealth/products/gb-gmk-stealth",
              "proxy": "US"
            },
            {
              "name": "DeskHero",
              "url" : "https://www.deskhero.ca/collections/open-group-buys",
              "proxy": "CA"
            },
            {
              "name": "CandyKeys",
              "url" : "https://candykeys.com/group-buys",
              "proxy": "EU"
            },
            {
              "name": "Switchkeys",
              "url" : "https://www.switchkeys.com.au/collections/keycap-collections/products/gmk-stealth-group-buy",
              "proxy": "AUS"
            },
            {
              "name": "ZFrontier",
              "url" : "https://www.zfrontier.com/",
              "proxy": "ASIA"
            }]
        },
        {
          'name': "GMK Avanguardia",
          "start": "12/15/2020",
          "end": "1/16/2021",
          "type": "Keycaps",
          "price": "120",
          "image": "https://i.imgur.com/Gw4huDM.jpeg",
           "vendors": [{
              "name": "ValaSupply",
              "url" : "https://vala.supply/products/gmk-avanguardia?variant=37071766159512",
              "proxy": "US"
            },
            {
              "name": "DeskHero",
              "url" : "https://www.deskhero.ca/collections/open-group-buys",
              "proxy": "CA"
            },
            {
              "name": "CandyKeys",
              "url" : "https://candykeys.com/group-buys",
              "proxy": "EU"
            },
            {
              "name": "Switchkeys",
              "url" : "https://www.switchkeys.com.au/collections/keycap-collections/products/gmk-avanguardia-group-buy",
              "proxy": "OCE"
            },
            {
              "name": "Ilumkb",
              "url" : "https://ilumkb.com/collections/groupbuy",
              "proxy": "ASIA"
            }]
        },
        {
          'name': "Grid 650",
          "start": "12/10/2020",
          "end": "1/18/2021",
          "type": "Keyboard",
          "price": "365",
          "image": "https://i.imgur.com/wDPxgqa.jpg",
           "vendors": [{
           "name": "ZFrontier",
              "url" : "https://en.zfrontier.com/collections/grid-650",
              "proxy": "Worldwide"
            }]
        },
        {
          'name': "GMK Gregory",
          "start": "12/10/2020",
          "end": "1/10/2021",
          "type": "Keycaps",
          "price": "134.99",
          "image": "https://i.imgur.com/FTux4CB.jpeg",
           "vendors": [{
              "name": "TXKeyboards",
              "url" : "https://www.us.txkeyboards.com/",
              "proxy": "US"
            },
            {
              "name": "DailyClack",
              "url" : "https://dailyclack.com/collections/group-buys",
              "proxy": "OCE"
            },
            {
              "name": "Monokei",
              "url" : "https://monokei.co/collections/current/groupbuy",
              "proxy": "SEA"
            },
            {
              "name": "MyKeyboard",
              "url" : "https://mykeyboard.eu/",
              "proxy": "EU"
            },
            {
              "name": "ZFrontier",
              "url" : "https://en.zfrontier.com/collections/gmk",
              "proxy": "ASIA"
            }]
        },
        {
          'name': "GMK Hanami Dango",
          "start": "12/8/2020",
          "end": "1/27/2021",
          "type": "Keycaps",
          "price": "134.99",
          "image": "https://i.imgur.com/D11EIz0.png",
           "vendors": [{
              "name": "Kono",
              "url" : "https://kono.store/collections/keycap-sets/products/gmk-hanami-dango",
              "proxy": "US"
            },
            {
              "name": "DeskHero",
              "url" : "https://www.deskhero.ca/collections/open-group-buys",
              "proxy": "CA"
            },
            {
              "name": "DailyClack",
              "url" : "https://dailyclack.com/collections/group-buys",
              "proxy": "OCE"
            },
            {
              "name": "MyKeyboard",
              "url" : "https://mykeyboard.eu/",
              "proxy": "EU"
            },
            {
              "name": "ZFrontier",
              "url" : "https://en.zfrontier.com/collections/gmk",
              "proxy": "ASIA"
            }]
        },
        {
          'name': "SA Silent Assassin",
          "start": "12/15/2020",
          "end": "1/29/2021",
          "type": "Keycaps",
          "price": "134.99",
          "image": "https://preview.redd.it/mdwlkhcwwg561.png?width=1024&auto=webp&s=baeed8e88402a2347eb6f6a78baa55bf84dba735",
           "vendors": [{
              "name": "Kono",
              "url" : "https://kono.store/collections/keycap-sets/products/sp-sa-silent-assassin?variant=37816031150279",
              "proxy": "US"
            },
            {
              "name": "DeskHero",
              "url" : "https://www.deskhero.ca/collections/open-group-buys",
              "proxy": "CA"
            },
            {
              "name": "CandyKeys",
              "url" : "https://candykeys.com/",
              "proxy": "EU"
            }]
        },
        {
          'name': "Monstargear ALU XO V3",
          "start": "12/15/2020",
          "end": "unknown",
          "type": "Keyboard",
          "price": "435",
          "image": "https://i.imgur.com/ovsdADG.jpg",
           "vendors": [{
           "name": "Monstar",
              "url" : "https://www.monstargears.com/51/?idx=308",
              "proxy": "Worldwide"
            }]
        },
        {
          'name': "E7-V2",
          "start": "12/11/2020",
          "end": "unknown",
          "type": "Keyboard",
          "price": "458",
          "image": "https://cdn.shopify.com/s/files/1/0109/5149/1643/products/1_1080x.jpg?v=1606924928",
           "vendors": [{
           "name": "Exclusive",
              "url" : "https://exclusive.run/collections/current-run",
              "proxy": "Worldwide"
            }]
        },
        {
          'name': "Obliterated75 SE",
          "start": "12/9/2020",
          "end": "unknown",
          "type": "Keyboard",
          "price": "300",
          "image": "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/DSC_5744_540x.jpg?v=1607475007",
           "vendors": [{
           "name": "CannonKeys",
              "url" : "https://cannonkeys.com/collections/featured/products/obliterated75-se",
              "proxy": "Worldwide"
            }]
        },
        {
          'name': "Mode80",
          "start": "11/16/2020",
          "end": "unknown",
          "type": "Keyboard",
          "price": "470",
          "image": "https://preview.redd.it/wnbzkz7fyxz51.png?width=793&auto=webp&s=b90f857b1d217ddcd90a3f30583809f21f16eba1",
           "vendors": [{
           "name": "ModeDesigns",
              "url" : "https://shop.modedesigns.com/collections/eighty"
            }]
        },
]
  }


  toObject():ProductData[]{
    // make json into list of product objects
    let products = [];
    for (let i = 0; i < this.jsonData.length; i++) {
      let vendors = [];
      for (let j = 0; j < this.jsonData[i]["vendors"].length; j++) {
        let vendor = new VendorData(this.jsonData[i]["vendors"][j]["name"], this.jsonData[i]["vendors"][j]["url"], this.jsonData[i]["vendors"][j]["proxy"]);
        // console.log(vendor.link);
        vendors.push(vendor);
      }

      products.push(new ProductData(this.jsonData[i]["name"], this.jsonData[i]["start"], this.jsonData[i]["end"], this.jsonData[i]["type"], this.jsonData[i]["price"], this.jsonData[i]["image"], vendors));
    }
    return products;
  }

  getProduct(id:string) {
    // return product 
    // return this.data[id];
    for (let i = 0; i < this.data.length; i++) {
      if (id === this.data[i].getName()) {
        return this.data[i];
      }
    }
  }

  // https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/
  filterItems(serachTerm:string) {
    // filter items for search
    this.initializeJSONData();
    this.jsonData = this.jsonData.filter(item => {
      return item.name.toLowerCase().indexOf(serachTerm.toLowerCase()) > -1;
    });
    return this.toObject();
  }

  filterItemsbyType(term:string){
    // filter by type to select either keycaps or keyboards
    this.initializeJSONData();
    this.jsonData = this.jsonData.filter(item => {
      return item.type.toLowerCase() == term.toLowerCase();
    });
    this.data = this.toObject();
    return this.toObject();
  }

  sortByPrice(type:string) {
    if (type === "price-high") {
      this.jsonData = this.jsonData.sort((a,b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
      return this.toObject();
    }
    else if (type === "price-low") {
      this.jsonData = this.jsonData.sort((a,b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
      return this.toObject();
    }
    else if (type === "start") {
      this.jsonData = this.jsonData.sort((a,b) => {
        let starta = new Date(a.start);
        let startb = new Date(b.start)
        return starta > startb ? 1 : -1;
      });
      return this.toObject();
    }
    else if (type === "end") {
      this.data = this.data.sort((a,b) => {
        return a.getEnd() > b.getEnd() ? 1 : -1;
      });
    }
    
  }

}
