# Mechanical Keyboards Group Buy Tracker

### Jenny Tran Diep, jtdiep@uci.edu, 63894135


# Set up

## Install Node JS
## Install the following:

    npm install -g @angular/cli  # to install angular
    npm install -g ionic # to install ionic

## Install dependencies
    cd mkgroupbuy-tracker
    npm install

## Run app within mkgroupbuy-tracker folder
    ionic serve

---

## Overview
For my final project I created a website that keeps track of mechanical keyboard group buy dates. For context, the mechanical keyboard community has a similar culture to sneakerheads where enthusiasts like to collect limited time/custom mechanical keyboards/keycaps. Group buys are usually run by community members where they design a product and open a time frame for consumers to purchase a spot in the group buy to gage interest and receive enough funds to manufacture their product.

The issue with group buys is there is no one specific place to post group buys except on the r/mechanicalkeyboards reddit which posts can get drowned by non group buy posts.
Therefore, the website’s purpose is to track upcoming group buys and their time limits in a clean and consistent website where all information about certain group buys are clearly displayed.

---

### Core Content
Product Page
- Have product page listing upcoming and live group buys
- Each product on page must contain:
    - Dates
    - Picture of product
    - Information about product ex: price, end/start date, type of product
- Be able to click on product that leads to single product page
- Be able to filter and sort through product page
    - Sort by date
    - Sort by price
    - Filter by type of product
- Implement search bar to search by group buy name

Single Product Page
- Single product page must contain:
    - Picture of Product
    - All information from product page
    - Vendor information/hyperlink to vendor website
    - Additional information about group buy

Works on mobile



---
# Resources
https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
https://ionicframework.com/blog/customizing-ionic-apps-for-web-mobile/
https://www.positronx.io/ionic-angular-responsive-grid-tutorial-with-examples/
https://ionicframework.com/docs/api/chip
https://www.youtube.com/watch?v=5bPTI7mQbSQ
https://www.youtube.com/watch?v=MUvDM55PN9k
https://ionicframework.com/docs/api/back-button
https://stackoverflow.com/questions/11078913/how-to-set-max-width-of-an-image-in-css
https://www.w3schools.com/js/js_dates.asp
https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/
https://stackoverflow.com/questions/42143031/filter-json-by-key-value/42143070
https://stackoverflow.com/questions/54576359/how-to-reset-ion-select-form-field-in-ionic-3