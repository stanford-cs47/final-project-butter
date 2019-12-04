import React from 'react';
import AppNavigation from './App/Navigation/AppNavigation';
import {AsyncStorage} from 'react-native';
import { Images } from './App/Themes'

let inventory = [
   {name: 'Turkish Honeycrisp Apples', price: '12', quantity: '112'},
   {name: 'Juicy Red Strawberries', price: '11', quantity: '1144'},
   {name: 'Taylor Gold Pear', price: '13', quantity: '65'},
   {name: 'Romaine Lettuce', price: '16', quantity: '440'},
   {name: 'Corn', price: '11', quantity: '4140'},
   {name: 'Cherry Tomatoes', price: '12', quantity: '40'},
]

let bookmarked = [{title:'Blue Lane Farms', image:Images.bookmark1},
               {title:'January Farms', image:Images.bookmark2},
               {title:'Aussie Farms', image:Images.bookmark3}]

let categories = [{title:'Fruit', image:Images.fruit}, 
               {title:'Vegetables', image:Images.vegetables}, 
               {title:'Grains', image:Images.grains}]

let deals = [{title:'WHITE TRUFFLES', 
            description: '$4/lb',
            image:Images.truffles}, 
            {title:'PARMESAN',
            description: '$3.30/lb',
            image:Images.parmesan}, 
            {title:'JUMBO SHISHITOS', 
            description: '$4/lb',
            image:Images.shishito}]

let apples = [
         {title:'Turkish Honeycrisp Apples', description:'$10/lb | Blue Lane Farms | 4.2 mi away'},
         {title:'Gala Valley Honeycrisp Apples', description:"$8/lb | Kauffmann's Fruit Farm | 2.4 mi away"},
         {title:"Honeycrisp Apples: Hidden Valley's Best", description:'$14/lb | Mendocino Farms | 12 mi away'},
         {title:'Hybrid Granny Smith-Honeycrisp Apples', description:'$12/lb | Happy Farms | 8.1 mi away'},
         {title:'Organic Honeycrisp Apples', description:'$18/lb | Apple Farms | 12.5 mi away'},
         {title:'Fresh Picked Honeycrisp Apples', description:'$10/lb | Aggy Farms | 22.9 mi away'},
         {title:'Jumbo Honeycrisp Apples', description:'$12/lb | Redhearts Farms | 10.1 mi away'},
      ]

let recentSearches = [
   {title:'honey'},
   {title:'hass avocados'},
   {title:'milk'},
   {title:'broccoli'},
   {title:'romaine lettuce'},
   {title:'bell peppers'},
]

AsyncStorage.setItem('inventory', JSON.stringify(inventory));
AsyncStorage.setItem('bookmarked', JSON.stringify(bookmarked));
AsyncStorage.setItem('categories', JSON.stringify(categories));
AsyncStorage.setItem('deals', JSON.stringify(deals));
AsyncStorage.setItem('apples', JSON.stringify(apples));
AsyncStorage.setItem('recentSearches', JSON.stringify(recentSearches));


export default AppNavigation;