import { Product } from "../types";

export const CATEGORIES_DATA = [
  {
    "id": "GRP_NEW_PRODUCT",
    "name": "Baru!",
    "count": 6
  },
  {
    "id": "Menu0002",
    "name": "Coffee",
    "count": 27
  },
  {
    "id": "Menu0003",
    "name": "Non Coffee",
    "count": 21
  },
  {
    "id": "APPFRAPPESERIES",
    "name": "Kenangan Frappe",
    "count": 7
  },
  {
    "id": "Group0005",
    "name": "Food",
    "count": 23
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    "id": "new-bluebericano",
    "slug_id": "new-bluebericano",
    "name": "Bluebericano",
    "description": "Perpaduan segar espresso khas Kopi Kenangan dengan sirup blueberry manis asam",
    "image": "/products/bluebericano.png",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          },
          {
            "value": "jumbo",
            "label": "Jumbo",
            "price": 12000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "new-strawbericano",
    "slug_id": "new-strawbericano",
    "name": "Strawbericano",
    "description": "Espresso khas Kopi Kenangan dipadukan dengan kesegaran rasa stroberi",
    "image": "/products/strawbericano.png",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          },
          {
            "value": "jumbo",
            "label": "Jumbo",
            "price": 12000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "new-creamy-cheesecake-latte",
    "slug_id": "new-creamy-cheesecake-latte",
    "name": "Creamy Cheesecake Latte",
    "description": "Kopi susu creamy dengan paduan rasa cheesecake lembut dan kaya rasa",
    "image": "/products/creamy-cheesecake-latte.png",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "new-strawberry-cheesecake-frappe",
    "slug_id": "new-strawberry-cheesecake-frappe",
    "name": "Strawberry Cheesecake Frappe",
    "description": "Minuman frappe lembut rasa cheesecake dengan potongan saus stroberi segar",
    "image": "/products/strawberry-cheesecake-frappe.png",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "new-blueberry-cheesecake-frappe",
    "slug_id": "new-blueberry-cheesecake-frappe",
    "name": "Blueberry Cheesecake Frappe",
    "description": "Minuman frappe lembut rasa cheesecake dengan selai blueberry manis segar",
    "image": "/products/blueberry-cheesecake-frappe.png",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "new-vanilla-cream-long-bread",
    "slug_id": "new-vanilla-cream-long-bread",
    "name": "Vanilla Cream Long Bread",
    "description": "Roti panjang lembut dengan isian krim vanila manis yang lumer di mulut",
    "image": "/products/vanilla-cream-long-bread.png",
    "price_display": "Rp14.000",
    "price": 14000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "Baru!",
    "modal_url": "",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "coffee-bluebericano",
    "slug_id": "coffee-bluebericano",
    "name": "Bluebericano",
    "description": "Perpaduan segar espresso khas Kopi Kenangan dengan sirup blueberry manis asam",
    "image": "/products/bluebericano.png",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          },
          {
            "value": "jumbo",
            "label": "Jumbo",
            "price": 12000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "coffee-strawbericano",
    "slug_id": "coffee-strawbericano",
    "name": "Strawbericano",
    "description": "Espresso khas Kopi Kenangan dipadukan dengan kesegaran rasa stroberi",
    "image": "/products/strawbericano.png",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          },
          {
            "value": "jumbo",
            "label": "Jumbo",
            "price": 12000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "coffee-creamy-cheesecake-latte",
    "slug_id": "coffee-creamy-cheesecake-latte",
    "name": "Creamy Cheesecake Latte",
    "description": "Kopi susu creamy dengan paduan rasa cheesecake lembut dan kaya rasa",
    "image": "/products/creamy-cheesecake-latte.png",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "29",
    "slug_id": "4021465000",
    "name": "Americano",
    "description": "Kopi hitam dari espresso dan air mineral",
    "image": "https://cdn.kopikenangan.com/public/36155ddd-784d-a7d9-4d02-13d596417078",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/4021465000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          },
          {
            "value": "jumbo",
            "label": "Jumbo",
            "price": 12000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "24",
    "slug_id": "2895061000",
    "name": "Avocado Coffee",
    "description": "Perpaduan alpukat, espresso dan susu",
    "image": "https://cdn.kopikenangan.com/public/24081765-c705-34a8-eccb-ebccf7f7ae5a",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/2895061000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "27",
    "slug_id": "6100292000",
    "name": "Butterscotch Aren Latte",
    "description": "Perpaduan Susu, Espresso, Sea Salt, Gula Aren Asli dan Sirup Butterscotch",
    "image": "https://cdn.kopikenangan.com/public/a1cb7272-f6e2-bb69-950d-59bc87515fd2",
    "price_display": "Rp20.000",
    "price": 20000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/6100292000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "28",
    "slug_id": "6960127000",
    "name": "Butterscotch Sea Salt Latte",
    "description": "Perpaduan susu, espresso, sea salt dan sirup butterscotch dengan topping sea salt macchiato cream",
    "image": "https://cdn.kopikenangan.com/public/e72f731f-d24e-7fed-372b-86eb398a0d22",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/6960127000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "14",
    "slug_id": "9764593000",
    "name": "Cafe Malt Latte",
    "description": "Perpaduan espresso dari 100% biji kopi arabika Bali Kintamani, Oatside, dan sirup hazelnut",
    "image": "https://cdn.kopikenangan.com/public/4c582a52-fbc8-2d9e-0007-f6a1c0b5fed6",
    "price_display": "Rp23.000",
    "price": 23000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9764593000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "30",
    "slug_id": "8188474000",
    "name": "Cappuccino",
    "description": "Espresso, susu steamed, buih susu",
    "image": "https://cdn.kopikenangan.com/public/8a0d42d0-4801-ca84-48e9-7b434b22aee4",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8188474000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "16",
    "slug_id": "1771127000",
    "name": "Caramel Latte",
    "description": "Espresso, susu dan sirup karamel",
    "image": "https://cdn.kopikenangan.com/public/630c892e-17a7-0d8c-301f-9e2d33bf1de8",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1771127000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "18",
    "slug_id": "7958284000",
    "name": "Caramel Macchiato",
    "description": "Espresso, susu, saus salted caramel dan macchiato cream",
    "image": "https://cdn.kopikenangan.com/public/821509a2-815f-3349-896c-9d15f787ab37",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/7958284000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "26",
    "slug_id": "9840203000",
    "name": "Creamy Aren Latte",
    "description": "Perpaduan espresso, susu creamy dan gula aren asli Indonesia",
    "image": "https://cdn.kopikenangan.com/public/34ac251c-14e6-44b7-d2b9-b4c63f6e2136",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9840203000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 9000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "17",
    "slug_id": "5700547000",
    "name": "Dua Shot Iced Shaken",
    "description": "Dua shot espresso dengan susu",
    "image": "https://cdn.kopikenangan.com/public/82e14825-c028-65d6-0c70-c352639bcf23",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/5700547000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "9",
    "slug_id": "8954182000",
    "name": "Dua Shot OG Aren",
    "description": "Perpaduan dua shot espresso, susu, gula aren asli Indonesia dan topping speculoos cookie crumble",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/7c81b141-162c-4d41-8285-674283926e56?",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8954182000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "19",
    "slug_id": "3759680000",
    "name": "Hazelnut Latte",
    "description": "Perpaduan espresso, susu, sirup hazelnut dan vanilla",
    "image": "https://cdn.kopikenangan.com/public/5ac8e750-455e-dcf6-a4e4-5fb398bb25bb",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3759680000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "15",
    "slug_id": "7833007000",
    "name": "Kopi Kenangan Mantan",
    "description": "Kopi susu dengan gula aren asli Indonesia",
    "image": "https://cdn.kopikenangan.com/public/da484154-47b1-a756-54a4-8b3490fb0eae",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/7833007000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 6000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "20",
    "slug_id": "3394640000",
    "name": "Kopi Susu Black Aren",
    "description": "Racikan kopi susu dengan kemewahan rasa gula aren yang lebih kuat & nikmat",
    "image": "https://cdn.kopikenangan.com/public/2ba99b9b-7912-397a-9fea-a21d4073a197",
    "price_display": "Rp21.000",
    "price": 21000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3394640000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 9000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "31",
    "slug_id": "2653593000",
    "name": "Latte",
    "description": "Espresso dengan susu steamed",
    "image": "https://cdn.kopikenangan.com/public/7b33aac1-3e8a-f15d-bb58-158692adf173",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/2653593000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "21",
    "slug_id": "7494662000",
    "name": "Matcha Espresso",
    "description": "Perpaduan espresso, susu dan high quality matcha powder",
    "image": "https://cdn.kopikenangan.com/public/20738f57-23ed-ea72-85f3-cdd8bc468352",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/7494662000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "22",
    "slug_id": "1384426000",
    "name": "Mocha Latte",
    "description": "Perpaduan espresso, susu dan dutch chocolate",
    "image": "https://cdn.kopikenangan.com/public/92fe7698-7b99-9b4b-39db-8b01557fecb3",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1384426000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "62",
    "slug_id": "1458627000",
    "name": "Oatside Kopi Kenangan Mantan",
    "description": "Perpaduan espresso, Oatside dan gula aren asli Indonesia",
    "image": "https://cdn.kopikenangan.com/public/c651acb8-3df7-7b75-45e2-f207926d863a",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1458627000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 6000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "63",
    "slug_id": "3147103000",
    "name": "Oatside Latte",
    "description": "Perpaduan espresso dan Oatside",
    "image": "https://cdn.kopikenangan.com/public/4890326b-b307-b2f8-a6f1-1a6ae4b15804",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3147103000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "64",
    "slug_id": "2763964000",
    "name": "Oatside Matcha Latte",
    "description": "Perpaduan high quality matcha powder dan Oatside",
    "image": "https://cdn.kopikenangan.com/public/d048cf0f-ed3f-8b76-26b0-75f651fe5dc7",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/2763964000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "13",
    "slug_id": "1913244000",
    "name": "Pistachio Aren Latte",
    "description": "Perpaduan espresso, saus pistachio, gula aren asli Indonesia dan susu",
    "image": "https://cdn.kopikenangan.com/public/392219eb-08e1-daf9-69d6-a12a8242e5be",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1913244000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "25",
    "slug_id": "9602810000",
    "name": "Spanish Latte",
    "description": "Perpaduan espresso, susu dan susu kental manis",
    "image": "https://cdn.kopikenangan.com/public/e3aa23b8-278d-54a0-0769-0de6e82b4d60",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9602810000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1483",
    "slug_id": "7245645000",
    "name": "Taro Cloud Latte",
    "description": "Espresso, milk, hazelnut syrup and taro macchiato cream",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/73af63fc-8f5c-48c0-aece-da0307e77af8?",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/7245645000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "23",
    "slug_id": "9903149000",
    "name": "Vanilla Latte",
    "description": "Perpaduan espresso, susu dan sirup vanilla",
    "image": "https://cdn.kopikenangan.com/public/6831574a-3d7f-d543-9a0c-bd68e7dcb54a",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0002",
    "category_name": "Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9903149000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2904",
        "code": "2904",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4079",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741000",
            "icon": "https://cdn.kopikenangan.com/public/9cd1e244-71b6-cda9-7b55-ad29237aaef3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4080",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741001",
            "icon": "https://cdn.kopikenangan.com/public/e1e67078-e333-f6a1-5c16-f04e52594d7f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4081",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "579741002",
            "icon": "https://cdn.kopikenangan.com/public/e1901c8d-edd6-ba82-10ef-a7f35a3f5d54",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4082",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741003",
            "icon": "https://cdn.kopikenangan.com/public/7d0e8125-a3b1-b6c3-988c-5660a1513e53",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4083",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741004",
            "icon": "https://cdn.kopikenangan.com/public/5387f50b-b088-9798-c686-90fbfc99865a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4084",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "579741005",
            "icon": "https://cdn.kopikenangan.com/public/ff8c3dc9-7fd5-0478-fdcc-69cdc9605766",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2905",
        "code": "2905",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4099",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "223930000",
            "icon": "https://cdn.kopikenangan.com/public/2dc93124-65e4-8981-dac3-f5eece9aa493",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4100",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "223930001",
            "icon": "https://cdn.kopikenangan.com/public/cdccaaf5-d451-29a2-c2ea-e32278f1e94c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4101",
            "name": "Golden Boba",
            "label": "Golden Boba",
            "price": 6000,
            "delta": 6000,
            "sku": "223930002",
            "icon": "https://cdn.kopikenangan.com/public/e8e22b76-6836-8e77-3e19-1114521d1fff",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4102",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "223930003",
            "icon": "https://cdn.kopikenangan.com/public/b9f6fe17-c85d-31f9-83b0-3055df1dd154",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4103",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "223930004",
            "icon": "https://cdn.kopikenangan.com/public/0970165f-80dc-fa27-9e7a-5505b473e5f4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4104",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "223930005",
            "icon": "https://cdn.kopikenangan.com/public/47df3da7-bc88-6dbe-80af-6fff1e0667b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4105",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "223930006",
            "icon": "https://cdn.kopikenangan.com/public/ecc6be1e-28bb-6149-d899-468176f6a044",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4106",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "223930007",
            "icon": "https://cdn.kopikenangan.com/public/5b92ca12-3d21-c2fd-bbf5-b1f584f14da3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4107",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "223930008",
            "icon": "https://cdn.kopikenangan.com/public/f72288eb-ea81-fdf4-e268-e45cb0aa9110",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "61",
    "slug_id": "4306862000",
    "name": "Air Mineral",
    "description": "Air Mineral",
    "image": "https://cdn.kopikenangan.com/public/a05ec204-65cd-2025-adcf-c7f141ce21c3",
    "price_display": "Rp9.000",
    "price": 9000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/4306862000/modal",
    "options": [
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "47",
    "slug_id": "8689856000",
    "name": "Avocado Caramel",
    "description": "Perpaduan alpukat, susu dan saus karamel",
    "image": "https://cdn.kopikenangan.com/public/b5179af7-1dd7-aa4e-09f6-e1a1c8295602",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8689856000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "48",
    "slug_id": "9536776000",
    "name": "Avocado Milk",
    "description": "Perpaduan alpukat dengan susu",
    "image": "https://cdn.kopikenangan.com/public/9f2e7aa5-3c8a-24cf-5944-84a5cc8d4cc8",
    "price_display": "Rp24.000",
    "price": 24000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9536776000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "44",
    "slug_id": "3351380000",
    "name": "Babyccino",
    "description": "Perpaduan susu dan sirup karamel dengan topping foam dan saus karamel",
    "image": "https://cdn.kopikenangan.com/public/afd5cdf3-964b-a63a-6db2-fb8c08410c61",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3351380000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "42",
    "slug_id": "3714392000",
    "name": "Butterscotch Sea Salt Crumble",
    "description": "Fresh milk, sea salt, butterscotch sauce with sea salt macchiato cream and caramel crumble topping",
    "image": "https://cdn.kopikenangan.com/public/032d2ddc-8df7-6d63-4101-1ccb50298085",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3714392000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2479",
        "code": "2479",
        "label": "Toppings",
        "name": "Toppings",
        "group": "Toppings",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "2054",
            "name": "Espresso (Archipelago Blend)",
            "label": "Espresso (Archipelago Blend)",
            "price": 6000,
            "delta": 6000,
            "sku": "101984000",
            "icon": "https://cdn.kopikenangan.com/public/8f6b2e22-c13c-4ae9-190b-37abced07ccf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2055",
            "name": "Flores Beans",
            "label": "Flores Beans",
            "price": 8000,
            "delta": 8000,
            "sku": "101984001",
            "icon": "https://cdn.kopikenangan.com/public/44660707-4094-94b8-6bec-36d87cb08c49",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2056",
            "name": "Bener Meriah",
            "label": "Bener Meriah",
            "price": 8000,
            "delta": 8000,
            "sku": "101984002",
            "icon": "https://cdn.kopikenangan.com/public/200c1c40-570e-62e0-f104-4b7925a8e0f9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2057",
            "name": "Malabar",
            "label": "Malabar",
            "price": 8000,
            "delta": 8000,
            "sku": "101984003",
            "icon": "https://cdn.kopikenangan.com/public/d505e6fe-9866-0019-88d4-e8c1fbafd5fa",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2059",
            "name": "Skimmed Milk",
            "label": "Skimmed Milk",
            "price": 0,
            "delta": 0,
            "sku": "101984005",
            "icon": "https://cdn.kopikenangan.com/public/653fcb36-0187-57cd-f5ea-1f8ccba7ba31",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2060",
            "name": "Whipped Cream",
            "label": "Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "101984006",
            "icon": "https://cdn.kopikenangan.com/public/d9f53f2d-7903-e21b-a4c9-931a7ec45f34",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2061",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "101984007",
            "icon": "https://cdn.kopikenangan.com/public/b52a7cad-0204-656e-39dd-b315ccc87dd4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2062",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 3000,
            "delta": 3000,
            "sku": "101984008",
            "icon": "https://cdn.kopikenangan.com/public/b7799152-eb38-ccf3-3df4-8e0e2106d369",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2063",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984009",
            "icon": "https://cdn.kopikenangan.com/public/b6389d04-34de-48cd-a25b-175515018644",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2064",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984010",
            "icon": "https://cdn.kopikenangan.com/public/8711d7ff-ba5f-1c13-140c-f2b38dcc185a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2065",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984011",
            "icon": "https://cdn.kopikenangan.com/public/08a2f7ef-be4e-a22f-2650-3c973db6a571",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2066",
            "name": "Lychee Syrup",
            "label": "Lychee Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984012",
            "icon": "https://cdn.kopikenangan.com/public/90e0675e-263c-851c-5215-c2ec8bcf3272",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2067",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "101984013",
            "icon": "https://cdn.kopikenangan.com/public/e9293d23-77d0-8c40-c05d-a5d1e30bee58",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "49",
    "slug_id": "1515179000",
    "name": "Caramel Dutch Choco",
    "description": "Perpaduan dutch chocolate, susu dan sirup karamel",
    "image": "https://cdn.kopikenangan.com/public/c241a3f5-7e20-25be-a067-76170345d684",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1515179000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "50",
    "slug_id": "3931425000",
    "name": "Dutch Chocolate",
    "description": "Perpaduan dutch chocolate dengan susu",
    "image": "https://cdn.kopikenangan.com/public/e7dfc639-f112-28b7-4cff-8e1cda6f82b5",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3931425000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "46",
    "slug_id": "4298003000",
    "name": "Hazelnut Choco Milk Tea",
    "description": "Perpaduan dutch chocolate, milk tea dan sirup hazelnut",
    "image": "https://cdn.kopikenangan.com/public/9766bcc9-55b8-aa14-2a02-6c94e24ddaf4",
    "price_display": "Rp23.000",
    "price": 23000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/4298003000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "51",
    "slug_id": "8593772000",
    "name": "Hazelnut Dutch Choco",
    "description": "Perpaduan dutch chocolate, sirup hazelnut dan susu",
    "image": "https://cdn.kopikenangan.com/public/d1e575af-ee5a-bbf7-0e41-915c0e5f93d6",
    "price_display": "Rp28.000",
    "price": 28000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8593772000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "53",
    "slug_id": "1608769000",
    "name": "Kenangan Milk Tea",
    "description": "Perpaduan black tea dengan susu",
    "image": "https://cdn.kopikenangan.com/public/5a15d4ef-582c-1391-5e58-e523d6b87398",
    "price_display": "Rp21.000",
    "price": 21000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1608769000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 6000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "52",
    "slug_id": "8734620000",
    "name": "Lemon Black Tea",
    "description": "Black tea dengan lemon",
    "image": "https://cdn.kopikenangan.com/public/3be29e5b-7a9d-8cb5-1d97-9667d92378f9",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8734620000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "58",
    "slug_id": "8101210000",
    "name": "Matcha Latte",
    "description": "Perpaduan susu dengan high quality matcha powder",
    "image": "https://cdn.kopikenangan.com/public/97f5cfe8-ad68-1598-9430-1b5f732deedc",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8101210000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "54",
    "slug_id": "5008474000",
    "name": "Milo Dinosaurus",
    "description": "Susu milo dengan taburan bubuk milo",
    "image": "https://cdn.kopikenangan.com/public/658f1737-546d-133b-ac36-aea2f524920c",
    "price_display": "Rp23.000",
    "price": 23000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/5008474000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "38",
    "slug_id": "2055831000",
    "name": "OG Thai Tea",
    "description": "Perpaduan teh khas Thailand dan susu",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/4f6889ec-6103-4fa0-a447-b7b3ee2742c9?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/2055831000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          },
          {
            "value": "hot",
            "label": "Hot",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 4000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "55",
    "slug_id": "3806931000",
    "name": "Oreo Shake",
    "description": "Susu vanilla dengan remah Oreo",
    "image": "https://cdn.kopikenangan.com/public/8c0d86d6-3c45-8c5e-4679-ae4f6d935583",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/3806931000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "56",
    "slug_id": "4740155000",
    "name": "Raspberry Hibiscus",
    "description": "Teh buah raspberry hibiscus dan lemon",
    "image": "https://cdn.kopikenangan.com/public/615287c4-c7a7-272c-c38e-df0c89886391",
    "price_display": "Rp20.000",
    "price": 20000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/4740155000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "57",
    "slug_id": "8621085000",
    "name": "Susu Grass Jelly",
    "description": "Perpaduan susu dengan gula aren asli Indonesia dengan tambahan grass jelly",
    "image": "https://cdn.kopikenangan.com/public/9717e724-83d5-7c5f-55b9-efbb1b2a7864",
    "price_display": "Rp24.000",
    "price": 24000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8621085000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1481",
    "slug_id": "1269751000",
    "name": "Taro Cloud Matcha",
    "description": "High quality matcha powder, milk and taro macchiato cream",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/ace3b7e3-7320-4adb-b9cb-61752ff91dea?",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1269751000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2479",
        "code": "2479",
        "label": "Toppings",
        "name": "Toppings",
        "group": "Toppings",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "2054",
            "name": "Espresso (Archipelago Blend)",
            "label": "Espresso (Archipelago Blend)",
            "price": 6000,
            "delta": 6000,
            "sku": "101984000",
            "icon": "https://cdn.kopikenangan.com/public/8f6b2e22-c13c-4ae9-190b-37abced07ccf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2055",
            "name": "Flores Beans",
            "label": "Flores Beans",
            "price": 8000,
            "delta": 8000,
            "sku": "101984001",
            "icon": "https://cdn.kopikenangan.com/public/44660707-4094-94b8-6bec-36d87cb08c49",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2056",
            "name": "Bener Meriah",
            "label": "Bener Meriah",
            "price": 8000,
            "delta": 8000,
            "sku": "101984002",
            "icon": "https://cdn.kopikenangan.com/public/200c1c40-570e-62e0-f104-4b7925a8e0f9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2057",
            "name": "Malabar",
            "label": "Malabar",
            "price": 8000,
            "delta": 8000,
            "sku": "101984003",
            "icon": "https://cdn.kopikenangan.com/public/d505e6fe-9866-0019-88d4-e8c1fbafd5fa",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2059",
            "name": "Skimmed Milk",
            "label": "Skimmed Milk",
            "price": 0,
            "delta": 0,
            "sku": "101984005",
            "icon": "https://cdn.kopikenangan.com/public/653fcb36-0187-57cd-f5ea-1f8ccba7ba31",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2060",
            "name": "Whipped Cream",
            "label": "Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "101984006",
            "icon": "https://cdn.kopikenangan.com/public/d9f53f2d-7903-e21b-a4c9-931a7ec45f34",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2061",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "101984007",
            "icon": "https://cdn.kopikenangan.com/public/b52a7cad-0204-656e-39dd-b315ccc87dd4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2062",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 3000,
            "delta": 3000,
            "sku": "101984008",
            "icon": "https://cdn.kopikenangan.com/public/b7799152-eb38-ccf3-3df4-8e0e2106d369",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2063",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984009",
            "icon": "https://cdn.kopikenangan.com/public/b6389d04-34de-48cd-a25b-175515018644",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2064",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984010",
            "icon": "https://cdn.kopikenangan.com/public/8711d7ff-ba5f-1c13-140c-f2b38dcc185a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2065",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984011",
            "icon": "https://cdn.kopikenangan.com/public/08a2f7ef-be4e-a22f-2650-3c973db6a571",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2066",
            "name": "Lychee Syrup",
            "label": "Lychee Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984012",
            "icon": "https://cdn.kopikenangan.com/public/90e0675e-263c-851c-5215-c2ec8bcf3272",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2067",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "101984013",
            "icon": "https://cdn.kopikenangan.com/public/e9293d23-77d0-8c40-c05d-a5d1e30bee58",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1484",
    "slug_id": "8056833000",
    "name": "Taro Cloud Milk Tea",
    "description": "Black tea, milk and taro macchiato cream",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/72c9b4d3-a487-457d-8e94-060d3aee9b1e?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/8056833000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2479",
        "code": "2479",
        "label": "Toppings",
        "name": "Toppings",
        "group": "Toppings",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "2054",
            "name": "Espresso (Archipelago Blend)",
            "label": "Espresso (Archipelago Blend)",
            "price": 6000,
            "delta": 6000,
            "sku": "101984000",
            "icon": "https://cdn.kopikenangan.com/public/8f6b2e22-c13c-4ae9-190b-37abced07ccf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2055",
            "name": "Flores Beans",
            "label": "Flores Beans",
            "price": 8000,
            "delta": 8000,
            "sku": "101984001",
            "icon": "https://cdn.kopikenangan.com/public/44660707-4094-94b8-6bec-36d87cb08c49",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2056",
            "name": "Bener Meriah",
            "label": "Bener Meriah",
            "price": 8000,
            "delta": 8000,
            "sku": "101984002",
            "icon": "https://cdn.kopikenangan.com/public/200c1c40-570e-62e0-f104-4b7925a8e0f9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2057",
            "name": "Malabar",
            "label": "Malabar",
            "price": 8000,
            "delta": 8000,
            "sku": "101984003",
            "icon": "https://cdn.kopikenangan.com/public/d505e6fe-9866-0019-88d4-e8c1fbafd5fa",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2059",
            "name": "Skimmed Milk",
            "label": "Skimmed Milk",
            "price": 0,
            "delta": 0,
            "sku": "101984005",
            "icon": "https://cdn.kopikenangan.com/public/653fcb36-0187-57cd-f5ea-1f8ccba7ba31",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2060",
            "name": "Whipped Cream",
            "label": "Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "101984006",
            "icon": "https://cdn.kopikenangan.com/public/d9f53f2d-7903-e21b-a4c9-931a7ec45f34",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2061",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "101984007",
            "icon": "https://cdn.kopikenangan.com/public/b52a7cad-0204-656e-39dd-b315ccc87dd4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2062",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 3000,
            "delta": 3000,
            "sku": "101984008",
            "icon": "https://cdn.kopikenangan.com/public/b7799152-eb38-ccf3-3df4-8e0e2106d369",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2063",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984009",
            "icon": "https://cdn.kopikenangan.com/public/b6389d04-34de-48cd-a25b-175515018644",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2064",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984010",
            "icon": "https://cdn.kopikenangan.com/public/8711d7ff-ba5f-1c13-140c-f2b38dcc185a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2065",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984011",
            "icon": "https://cdn.kopikenangan.com/public/08a2f7ef-be4e-a22f-2650-3c973db6a571",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2066",
            "name": "Lychee Syrup",
            "label": "Lychee Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984012",
            "icon": "https://cdn.kopikenangan.com/public/90e0675e-263c-851c-5215-c2ec8bcf3272",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2067",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "101984013",
            "icon": "https://cdn.kopikenangan.com/public/e9293d23-77d0-8c40-c05d-a5d1e30bee58",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1482",
    "slug_id": "9590924000",
    "name": "Taro Milk",
    "description": "High quality taro powder with milk",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/d388cac3-16df-4519-9e80-f8ef633048b9?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/9590924000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2479",
        "code": "2479",
        "label": "Toppings",
        "name": "Toppings",
        "group": "Toppings",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "2054",
            "name": "Espresso (Archipelago Blend)",
            "label": "Espresso (Archipelago Blend)",
            "price": 6000,
            "delta": 6000,
            "sku": "101984000",
            "icon": "https://cdn.kopikenangan.com/public/8f6b2e22-c13c-4ae9-190b-37abced07ccf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2055",
            "name": "Flores Beans",
            "label": "Flores Beans",
            "price": 8000,
            "delta": 8000,
            "sku": "101984001",
            "icon": "https://cdn.kopikenangan.com/public/44660707-4094-94b8-6bec-36d87cb08c49",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2056",
            "name": "Bener Meriah",
            "label": "Bener Meriah",
            "price": 8000,
            "delta": 8000,
            "sku": "101984002",
            "icon": "https://cdn.kopikenangan.com/public/200c1c40-570e-62e0-f104-4b7925a8e0f9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2057",
            "name": "Malabar",
            "label": "Malabar",
            "price": 8000,
            "delta": 8000,
            "sku": "101984003",
            "icon": "https://cdn.kopikenangan.com/public/d505e6fe-9866-0019-88d4-e8c1fbafd5fa",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2059",
            "name": "Skimmed Milk",
            "label": "Skimmed Milk",
            "price": 0,
            "delta": 0,
            "sku": "101984005",
            "icon": "https://cdn.kopikenangan.com/public/653fcb36-0187-57cd-f5ea-1f8ccba7ba31",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2060",
            "name": "Whipped Cream",
            "label": "Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "101984006",
            "icon": "https://cdn.kopikenangan.com/public/d9f53f2d-7903-e21b-a4c9-931a7ec45f34",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2061",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "101984007",
            "icon": "https://cdn.kopikenangan.com/public/b52a7cad-0204-656e-39dd-b315ccc87dd4",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2062",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 3000,
            "delta": 3000,
            "sku": "101984008",
            "icon": "https://cdn.kopikenangan.com/public/b7799152-eb38-ccf3-3df4-8e0e2106d369",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2063",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984009",
            "icon": "https://cdn.kopikenangan.com/public/b6389d04-34de-48cd-a25b-175515018644",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2064",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984010",
            "icon": "https://cdn.kopikenangan.com/public/8711d7ff-ba5f-1c13-140c-f2b38dcc185a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2065",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984011",
            "icon": "https://cdn.kopikenangan.com/public/08a2f7ef-be4e-a22f-2650-3c973db6a571",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2066",
            "name": "Lychee Syrup",
            "label": "Lychee Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "101984012",
            "icon": "https://cdn.kopikenangan.com/public/90e0675e-263c-851c-5215-c2ec8bcf3272",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "2067",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "101984013",
            "icon": "https://cdn.kopikenangan.com/public/e9293d23-77d0-8c40-c05d-a5d1e30bee58",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "39",
    "slug_id": "1379233002",
    "name": "Thai Tea Loaded",
    "description": "Perpaduan teh khas Thailand, susu, macchiato cream dengan grass jelly dan topping cookie crumble",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/6663aa38-c764-4ead-9db4-5a79634e9a77?",
    "price_display": "Rp27.000",
    "price": 27000,
    "category_id": "Menu0003",
    "category_name": "Non Coffee",
    "modal_url": "https://jasdorkopi.id/produk/1379233002/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "large",
            "label": "Large",
            "price": 0
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2937",
        "code": "2937",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4389",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "614734000",
            "icon": "https://cdn.kopikenangan.com/public/0200ca31-9cef-5898-f09f-725ff562b200",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4390",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "614734001",
            "icon": "https://cdn.kopikenangan.com/public/2285575e-d4a0-55e9-b220-4156e1ca19f5",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4391",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "614734002",
            "icon": "https://cdn.kopikenangan.com/public/3cdab28d-556c-3a6f-bb10-ef2e8f31b517",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4392",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "614734003",
            "icon": "https://cdn.kopikenangan.com/public/067ad550-441d-b48e-e82b-540e86b320cf",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4393",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "614734004",
            "icon": "https://cdn.kopikenangan.com/public/7cd602a1-7e87-bfc1-4944-6578ff5a6068",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4394",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "614734005",
            "icon": "https://cdn.kopikenangan.com/public/ba909195-0b0e-70bb-889e-5477c700bb0f",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4395",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "614734006",
            "icon": "https://cdn.kopikenangan.com/public/4340087b-6510-1fb3-d5d5-8645288814ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4396",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "614734007",
            "icon": "https://cdn.kopikenangan.com/public/3ebccacd-79cc-837c-7e62-fa664191db89",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4400",
            "name": "Gula Aren",
            "label": "Gula Aren",
            "price": 6000,
            "delta": 6000,
            "sku": "614734011",
            "icon": "https://cdn.kopikenangan.com/public/3be37b71-6101-674d-7dd0-39d7ae741252",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2936",
        "code": "2936",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4369",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799000",
            "icon": "https://cdn.kopikenangan.com/public/1b00ca44-048c-6b85-e552-0dcad839514e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4370",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799001",
            "icon": "https://cdn.kopikenangan.com/public/fd25f71a-9bf8-4c1b-fab1-8d34143fed9d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4371",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "364799002",
            "icon": "https://cdn.kopikenangan.com/public/ad999618-a354-01a7-77f0-538b9b9eaa3a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4372",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799003",
            "icon": "https://cdn.kopikenangan.com/public/96643268-f56b-3774-8a88-bb1a51a8111d",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4373",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799004",
            "icon": "https://cdn.kopikenangan.com/public/5dcdaa6e-8063-9e00-76d9-59214a38b50a",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4374",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "364799005",
            "icon": "https://cdn.kopikenangan.com/public/24a9d6b6-3f6a-d184-5b34-c7e81564823f",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "frappe-strawberry-cheesecake-frappe",
    "slug_id": "frappe-strawberry-cheesecake-frappe",
    "name": "Strawberry Cheesecake Frappe",
    "description": "Minuman frappe lembut rasa cheesecake dengan potongan saus stroberi segar",
    "image": "/products/strawberry-cheesecake-frappe.png",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "frappe-blueberry-cheesecake-frappe",
    "slug_id": "frappe-blueberry-cheesecake-frappe",
    "name": "Blueberry Cheesecake Frappe",
    "description": "Minuman frappe lembut rasa cheesecake dengan selai blueberry manis segar",
    "image": "/products/blueberry-cheesecake-frappe.png",
    "price_display": "Rp26.000",
    "price": 26000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "",
    "options": [
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "65",
    "slug_id": "4187986000",
    "name": "Butterscotch Kenangan Frappe",
    "description": "Ice blended kopi susu dan saus Butterscotch dengan whipped cream vanilla / chocolate dan topping caramel crumble",
    "image": "https://cdn.kopikenangan.com/public/36ac278e-5212-00b3-ce73-e347a88b0372",
    "price_display": "Rp30.000",
    "price": 30000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "https://jasdorkopi.id/produk/4187986000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "69",
    "slug_id": "7054742000",
    "name": "Dutch Choco Kenangan Frappe",
    "description": "Ice blended dengan rasa dutch chocolate, whipped cream vanilla / cokelat dan saus coklat",
    "image": "https://cdn.kopikenangan.com/public/0bf0ec79-18a9-414f-4b7e-e50b940495bf",
    "price_display": "Rp29.000",
    "price": 29000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "https://jasdorkopi.id/produk/7054742000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 7000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2946",
        "code": "2946",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4464",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "784366001",
            "icon": "https://cdn.kopikenangan.com/public/5e237f5e-0aaa-0384-0072-4b8658cd5197",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4463",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "784366000",
            "icon": "https://cdn.kopikenangan.com/public/2cd4701b-9b65-ee34-c3d0-aa6212e7760e",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4466",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "784366002",
            "icon": "https://cdn.kopikenangan.com/public/049a801b-9382-b680-ac14-c5624c5b1725",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "67",
    "slug_id": "9318104000",
    "name": "Kopi Kenangan Mantan Frappe",
    "description": "Ice blended kopi susu gula aren, whipped cream vanilla / chocolate dan saus gula aren",
    "image": "https://cdn.kopikenangan.com/public/18899b9c-b242-468f-1839-c096e27b0225",
    "price_display": "Rp27.000",
    "price": 27000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "https://jasdorkopi.id/produk/9318104000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 6000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "beans",
        "label": "PILIHAN BIJI KOPI",
        "choices": [
          {
            "value": "kenangan_blend",
            "label": "Kenangan Blend",
            "price": 0
          },
          {
            "value": "juwara_beans",
            "label": "Juwara Beans",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "66",
    "slug_id": "8272775000",
    "name": "Matcha Kenangan Frappe",
    "description": "Ice blended high quality matcha powder dengan whipped cream vanilla / chocolate & taburan matcha powder di atasnya",
    "image": "https://cdn.kopikenangan.com/public/f3c9aacf-fbae-370a-082d-9e719e4909e7",
    "price_display": "Rp32.000",
    "price": 32000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "https://jasdorkopi.id/produk/8272775000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 10000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "68",
    "slug_id": "5865175000",
    "name": "Vanilla Kenangan Frappe",
    "description": "Ice blended rasa vanilla dengan whipped cream vanilla / chocolate",
    "image": "https://cdn.kopikenangan.com/public/839fa121-427c-110e-6550-479d604d1f2d",
    "price_display": "Rp25.000",
    "price": 25000,
    "category_id": "APPFRAPPESERIES",
    "category_name": "Kenangan Frappe",
    "modal_url": "https://jasdorkopi.id/produk/5865175000/modal",
    "options": [
      {
        "key": "temperature",
        "label": "TEMPERATURE",
        "choices": [
          {
            "value": "ice",
            "label": "Ice",
            "price": 0
          }
        ]
      },
      {
        "key": "size",
        "label": "SIZE",
        "choices": [
          {
            "value": "regular",
            "label": "Regular",
            "price": 0
          },
          {
            "value": "large",
            "label": "Large",
            "price": 8000
          }
        ]
      },
      {
        "key": "milk_option",
        "label": "PILIHAN SUSU",
        "choices": [
          {
            "value": "milk",
            "label": "Milk",
            "price": 0
          },
          {
            "value": "oatside",
            "label": "Oatside",
            "price": 3000
          }
        ]
      },
      {
        "key": "sugar_level",
        "label": "SUGAR LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Sugar",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Sugar",
            "price": 0
          },
          {
            "value": "no",
            "label": "No Sugar",
            "price": 0
          }
        ]
      },
      {
        "key": "ice_level",
        "label": "ICE LEVEL",
        "choices": [
          {
            "value": "normal",
            "label": "Normal Ice",
            "price": 0
          },
          {
            "value": "less",
            "label": "Less Ice",
            "price": 0
          }
        ]
      }
    ],
    "addons": [
      {
        "key": "2975",
        "code": "2975",
        "label": "Whipped Cream",
        "name": "Whipped Cream",
        "group": "Whipped Cream",
        "type": "single",
        "only_one": true,
        "mandatory": true,
        "required": true,
        "single": true,
        "choices": [
          {
            "value": "4705",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 0,
            "delta": 0,
            "sku": "201032000",
            "icon": "https://cdn.kopikenangan.com/public/fb37e0d9-969f-09c5-42df-18d43e4d3e42",
            "default": true,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4706",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 0,
            "delta": 0,
            "sku": "201032001",
            "icon": "https://cdn.kopikenangan.com/public/3cc29dd4-b474-ad38-f8af-c834bc178931",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4707",
            "name": "No Whipped Cream",
            "label": "No Whipped Cream",
            "price": 0,
            "delta": 0,
            "sku": "201032002",
            "icon": "https://cdn.kopikenangan.com/public/ca8bf79f-fe86-69e6-722d-176e9a94905c",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2944",
        "code": "2944",
        "label": "Syrup",
        "name": "Syrup",
        "group": "Syrup",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4423",
            "name": "Vanilla Syrup",
            "label": "Vanilla Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679000",
            "icon": "https://cdn.kopikenangan.com/public/db1f8e3f-db2b-0c0c-86c1-497bc458a4f6",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4424",
            "name": "Hazelnut Syrup",
            "label": "Hazelnut Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679001",
            "icon": "https://cdn.kopikenangan.com/public/2c67445a-f8da-7c0e-b885-5eee60201fe8",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4425",
            "name": "Caramel Syrup",
            "label": "Caramel Syrup",
            "price": 6000,
            "delta": 6000,
            "sku": "710679002",
            "icon": "https://cdn.kopikenangan.com/public/ccf66a26-a794-612e-ffce-6aec565767ec",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4426",
            "name": "Salted Caramel Sauce",
            "label": "Salted Caramel Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679003",
            "icon": "https://cdn.kopikenangan.com/public/8d22cfcf-8642-b62e-172a-c5a9a55b6533",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4427",
            "name": "Choco Sauce",
            "label": "Choco Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679004",
            "icon": "https://cdn.kopikenangan.com/public/0f0ad8dd-c165-b153-0f45-7f1f977a85d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4428",
            "name": "Butterscotch Sauce",
            "label": "Butterscotch Sauce",
            "price": 6000,
            "delta": 6000,
            "sku": "710679005",
            "icon": "https://cdn.kopikenangan.com/public/a5701797-9f1b-4725-a3ac-d92dfd1cb14a",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      },
      {
        "key": "2945",
        "code": "2945",
        "label": "Topping",
        "name": "Topping",
        "group": "Topping",
        "type": "multi",
        "only_one": false,
        "mandatory": false,
        "required": false,
        "single": false,
        "choices": [
          {
            "value": "4443",
            "name": "Espresso Shot Kenangan Blend",
            "label": "Espresso Shot Kenangan Blend",
            "price": 6000,
            "delta": 6000,
            "sku": "677993000",
            "icon": "https://cdn.kopikenangan.com/public/6da772dc-f84b-a1c8-731f-4ee1a6eada7e",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4444",
            "name": "Espresso Shot Juwara Beans",
            "label": "Espresso Shot Juwara Beans",
            "price": 6000,
            "delta": 6000,
            "sku": "677993001",
            "icon": "https://cdn.kopikenangan.com/public/93b4b631-d72d-13e0-b285-8d694f8c2779",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4445",
            "name": "Golden boba",
            "label": "Golden boba",
            "price": 6000,
            "delta": 6000,
            "sku": "677993002",
            "icon": "https://cdn.kopikenangan.com/public/2b202936-8747-7506-08f0-f608becd29c3",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4446",
            "name": "Grass Jelly",
            "label": "Grass Jelly",
            "price": 6000,
            "delta": 6000,
            "sku": "677993003",
            "icon": "https://cdn.kopikenangan.com/public/7440b9be-01e7-9999-f91f-afe4d3051f2c",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4447",
            "name": "Oreo",
            "label": "Oreo",
            "price": 6000,
            "delta": 6000,
            "sku": "677993004",
            "icon": "https://cdn.kopikenangan.com/public/0bffae7b-2eee-7c0d-7c51-019ba5d8e6b0",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4448",
            "name": "Whipped Cream Chocolate",
            "label": "Whipped Cream Chocolate",
            "price": 6000,
            "delta": 6000,
            "sku": "677993005",
            "icon": "https://cdn.kopikenangan.com/public/b9c4b7f7-16e0-73e1-e5fe-c03ef834b796",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4449",
            "name": "Whipped Cream Vanilla",
            "label": "Whipped Cream Vanilla",
            "price": 6000,
            "delta": 6000,
            "sku": "677993006",
            "icon": "https://cdn.kopikenangan.com/public/2b876a8e-875d-4b9b-c7e5-05814f0e42d9",
            "default": false,
            "available": true,
            "api_sold_out": false
          },
          {
            "value": "4450",
            "name": "Caramel Crumble",
            "label": "Caramel Crumble",
            "price": 6000,
            "delta": 6000,
            "sku": "677993007",
            "icon": "https://cdn.kopikenangan.com/public/e413b794-9467-c3af-4022-b22cfcc2f3cc",
            "default": false,
            "available": true,
            "api_sold_out": false
          }
        ]
      }
    ],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "food-vanilla-cream-long-bread",
    "slug_id": "food-vanilla-cream-long-bread",
    "name": "Vanilla Cream Long Bread",
    "description": "Roti panjang lembut dengan isian krim vanila manis yang lumer di mulut",
    "image": "/products/vanilla-cream-long-bread.png",
    "price_display": "Rp14.000",
    "price": 14000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "87",
    "slug_id": "8355692000",
    "name": "Adam Ayam Toast",
    "description": "Roti toast tebal dengan isi daging luncheon ayam, keju slice, ditambah topping",
    "image": "https://cdn.kopikenangan.com/public/79146711-94ca-c5cf-8b18-11205acac4b7",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/8355692000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "86",
    "slug_id": "1736117000",
    "name": "Bambang Choco Cheese Toast",
    "description": "Roti toast tebal dengan isi krim coklat, keju slice & topping susu kental manis",
    "image": "https://cdn.kopikenangan.com/public/bccc5e24-0e25-1a67-1361-5b22783c1833",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/1736117000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "92",
    "slug_id": "8644378000",
    "name": "Butter Croissant",
    "description": "A classic charm of our golden-brown croissant, with flaky layers and enriched with 100% European butter",
    "image": "https://cdn.kopikenangan.com/public/c45258b8-74b3-fb41-090d-b9f3a58cc343",
    "price_display": "Rp15.000",
    "price": 15000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/8644378000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1561",
    "slug_id": "5952206000",
    "name": "Choco Peanut Butter Panini",
    "description": "Roti panini dengan isian selai kacang & meses coklat",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/ebb8c338-239c-4fa8-ab74-0ce949897828?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/5952206000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "471",
    "slug_id": "1177693000",
    "name": "Chocolate Choux Puff",
    "description": "Choux Pastry renyah berisi krim cokelat",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/207e4c8e-2d59-4bdd-8c15-a5c4176dce1a?",
    "price_display": "Rp12.000",
    "price": 12000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/1177693000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "93",
    "slug_id": "0413320000",
    "name": "Chocolate Croissant",
    "description": "Croissant pastry yang renyah dengan lapisan butter dan isian cokelat",
    "image": "https://cdn.kopikenangan.com/public/c1f26135-eacc-4eca-0444-8356c507e0db",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/0413320000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1560",
    "slug_id": "5957219000",
    "name": "Classic Peanut Butter Panini",
    "description": "Roti panini dengan isian selai kacang",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/897b3ee2-0ee9-4a10-84b7-6ad64ccc3fcb?",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/5957219000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "476",
    "slug_id": "2363098000",
    "name": "Donut Almond",
    "description": "Donut dengan white chocolate dan topping almonds",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/ee829769-9e58-4125-b31f-7aa1e8dbfad2?",
    "price_display": "Rp13.000",
    "price": 13000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/2363098000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1490",
    "slug_id": "6493381000",
    "name": "Double Choco Bagel",
    "description": "Roti bagel bercita rasa coklat dengan topping choco chip dan isian choco spread",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/63681082-b5b6-4943-b58b-96c6b8c64734?",
    "price_display": "Rp18.000",
    "price": 18000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/6493381000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "99",
    "slug_id": "8273358000",
    "name": "Friend Chip Cookie",
    "description": "Soft cookie cokelat dengan paduan choco chips dan taburan sea salt",
    "image": "https://cdn.kopikenangan.com/public/bf62a77f-41cf-babb-97e1-4dfc6a889487",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/8273358000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "96",
    "slug_id": "2918119000",
    "name": "Roti Coklat Klasik",
    "description": "Roti bantal lembut dengan isi krim coklat",
    "image": "https://cdn.kopikenangan.com/public/b10ffd87-6f6e-fb75-8a37-2b1e993bdc8a",
    "price_display": "Rp9.000",
    "price": 9000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/2918119000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "140",
    "slug_id": "8442449000",
    "name": "Roti Keju Manis",
    "description": "Roti bantal lembut isi keju golden cheddar dan krim butter",
    "image": "https://cdn.kopikenangan.com/public/682e9719-e692-1872-c174-d634a34ff67d",
    "price_display": "Rp13.000",
    "price": 13000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/8442449000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "141",
    "slug_id": "4136526000",
    "name": "Roti Srikaya",
    "description": "Roti bantal lembut isi selai srikaya",
    "image": "https://cdn.kopikenangan.com/public/a5bbc92a-9abe-d2f3-daf9-b00dca1ac336",
    "price_display": "Rp15.000",
    "price": 15000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/4136526000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "148",
    "slug_id": "6271571000",
    "name": "Roti Susu Manis",
    "description": "Roti bantal isi krim susu dan remahan susu manis",
    "image": "https://cdn.kopikenangan.com/public/c84c79bb-893d-c83d-3562-c48b40c66aa8",
    "price_display": "Rp10.000",
    "price": 10000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/6271571000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "89",
    "slug_id": "1397942000",
    "name": "Salt Bread Choco Butter",
    "description": "Roti bercita rasa gurih dengan isian butter cokelat",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/091b6b3e-dd10-45fc-9d49-a905dc713228?",
    "price_display": "Rp11.000",
    "price": 11000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/1397942000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "472",
    "slug_id": "9370104000",
    "name": "Salt Bread Original",
    "description": "Roti bercita rasa gurih dengan sensasi buttery",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/13fe0b4c-b159-4b60-91ae-b3a6f6552746?",
    "price_display": "Rp11.000",
    "price": 11000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/9370104000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "470",
    "slug_id": "3236278000",
    "name": "Strawberry Choux Puff",
    "description": "Choux Pastry renyah berisi krim strawberry lembut",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/573912ec-701c-4e99-802e-affd7eef6e9b?",
    "price_display": "Rp12.000",
    "price": 12000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/3236278000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1562",
    "slug_id": "1272466000",
    "name": "Strawberry Peanut Butter Panini",
    "description": "Peanut Butter Strawberry Panini",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/1818734e-23b9-4404-99b1-2667d706981b?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/1272466000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "5",
    "slug_id": "9785533000",
    "name": "Sweet Honey Soft Baked Cookie",
    "description": "Soft baked cookie buttery dengan perpaduan rasa madu",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/690b5282-8bfe-4066-b34e-8091c54e7914?",
    "price_display": "Rp21.000",
    "price": 21000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/9785533000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "1489",
    "slug_id": "5641200000",
    "name": "Triple Cheese Bagel",
    "description": "Roti bagel bercita rasa keju dari keju parmesan dengan topping keju mozarella dan lelehan keju cheddar",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/186b5436-c2a5-4b4e-bef4-319943616c12?",
    "price_display": "Rp18.000",
    "price": 18000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/5641200000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "469",
    "slug_id": "8303484000",
    "name": "Vanilla Choux Puff",
    "description": "Choux Pastry renyah berisi krim vanilla creamy",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/856c89ab-af73-4fd8-a990-58013c896c6c?",
    "price_display": "Rp12.000",
    "price": 12000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/8303484000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  },
  {
    "id": "88",
    "slug_id": "9341610000",
    "name": "Wahyu Sapi Toast",
    "description": "Roti toast tebal dengan isi daging luncheon sapi, keju slice, ditambah topping",
    "image": "https://cdn.kopikenangan.com/public/9844851e-1ef8-dc73-309f-24bad50dffab",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "Group0005",
    "category_name": "Food",
    "modal_url": "https://jasdorkopi.id/produk/9341610000/modal",
    "options": [],
    "addons": [],
    "is_promo": false,
    "original_price": null
  }
];
