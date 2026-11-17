import { Product } from "../types";

export const CATEGORIES_DATA = [
  {
    "id": "GRP_NEW_PRODUCT",
    "name": "NEW PRODUCT",
    "count": 5
  },
  {
    "id": "Menu0002",
    "name": "COFFEE",
    "count": 22
  },
  {
    "id": "Menu0003",
    "name": "NON COFFEE",
    "count": 15
  },
  {
    "id": "Group0005",
    "name": "FOOD",
    "count": 15
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    "id": "1561",
    "slug_id": "5952206000",
    "name": "Choco Peanut Butter Panini",
    "description": "Roti panini dengan isian selai kacang & meses coklat",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/ebb8c338-239c-4fa8-ab74-0ce949897828?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "NEW PRODUCT",
    "modal_url": "https://jasdorkopi.id/produk/5952206000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "1560",
    "slug_id": "5957219000",
    "name": "Classic Peanut Butter Panini",
    "description": "Roti panini dengan isian selai kacang",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/897b3ee2-0ee9-4a10-84b7-6ad64ccc3fcb?",
    "price_display": "Rp17.000",
    "price": 17000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "NEW PRODUCT",
    "modal_url": "https://jasdorkopi.id/produk/5957219000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "1562",
    "slug_id": "1272466000",
    "name": "Strawberry Peanut Butter Panini",
    "description": "Peanut Butter Strawberry Panini",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/1818734e-23b9-4404-99b1-2667d706981b?",
    "price_display": "Rp19.000",
    "price": 19000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "NEW PRODUCT",
    "modal_url": "https://jasdorkopi.id/produk/1272466000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "1483",
    "slug_id": "7245645000",
    "name": "Taro Cloud Latte",
    "description": "Espresso, milk, hazelnut syrup and taro macchiato cream",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/73af63fc-8f5c-48c0-aece-da0307e77af8?",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "NEW PRODUCT",
    "modal_url": "https://jasdorkopi.id/produk/7245645000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "1481",
    "slug_id": "1269751000",
    "name": "Taro Cloud Matcha",
    "description": "High quality matcha powder, milk and taro macchiato cream",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/ace3b7e3-7320-4adb-b9cb-61752ff91dea?",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "GRP_NEW_PRODUCT",
    "category_name": "NEW PRODUCT",
    "modal_url": "https://jasdorkopi.id/produk/1269751000/modal",
    "options": [],
    "addons": []
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
  },
  {
    "id": "8",
    "slug_id": "2111467024",
    "name": "OG Aren Speculoos Latte",
    "description": "Perpaduan espresso, susu, sirup speculoos, gula aren asli Indonesia dan topping speculoos cookie crumble",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/10c984f9-994b-4d97-8e29-164354598e22?",
    "price_display": "Rp21.000",
    "price": 21000,
    "category_id": "Menu0002",
    "category_name": "COFFEE",
    "modal_url": "https://jasdorkopi.id/produk/2111467024/modal",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
          },
          {
            "value": "large",
            "label": "Large",
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
          },
          {
            "value": "large",
            "label": "Large",
            "price": 5000
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
    ]
  },
  {
    "id": "46",
    "slug_id": "4298003000",
    "name": "Hazelnut Choco Milk Tea",
    "description": "Perpaduan dutch chocolate, milk tea dan sirup hazelnut",
    "image": "https://cdn.kopikenangan.com/public/9766bcc9-55b8-aa14-2a02-6c94e24ddaf4",
    "price_display": "Rp22.000",
    "price": 22000,
    "category_id": "Menu0003",
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
  },
  {
    "id": "40",
    "slug_id": "6307883000",
    "name": "OG Aren Milky Speculoos",
    "description": "Perpaduan susu, sirup speculoos, gula aren asli Indonesia dan topping speculoos cookie crumble",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/31e167f1-1598-481d-adb9-48669769854b?",
    "price_display": "Rp23.000",
    "price": 23000,
    "category_id": "Menu0003",
    "category_name": "NON COFFEE",
    "modal_url": "https://jasdorkopi.id/produk/6307883000/modal",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "NON COFFEE",
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
            "price": 5000
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
    ]
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/8355692000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/1736117000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "97",
    "slug_id": "8663835000",
    "name": "Choco Chip Cookies",
    "description": "Cookies renyah dengan taburan choco chip",
    "image": "https://cdn.kopikenangan.com/public/4974032d-c48d-eac4-93a9-a5d47eaf5f60",
    "price_display": "Rp14.000",
    "price": 14000,
    "category_id": "Group0005",
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/8663835000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/5952206000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/0413320000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/5957219000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/2918119000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/8442449000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/4136526000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/6271571000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/1397942000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/9370104000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "477",
    "slug_id": "1581055000",
    "name": "Sandwich Smoked Beef and Cheese",
    "description": "Sandwich dengan isian daging sapi asap dan keju",
    "image": "https://cdn.kopikenangan.com/ID/release/pub/kk-api-management/product/133d50a5-fb4b-4777-94c7-00b8f9c76089?",
    "price_display": "Rp21.000",
    "price": 21000,
    "category_id": "Group0005",
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/1581055000/modal",
    "options": [],
    "addons": []
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
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/1272466000/modal",
    "options": [],
    "addons": []
  },
  {
    "id": "95",
    "slug_id": "2743263000",
    "name": "Sugar Donut",
    "description": "Sugar Donut",
    "image": "https://cdn.kopikenangan.com/public/8ee8824b-5f64-470c-57aa-d6b81a7ba9f1",
    "price_display": "Rp10.000",
    "price": 10000,
    "category_id": "Group0005",
    "category_name": "FOOD",
    "modal_url": "https://jasdorkopi.id/produk/2743263000/modal",
    "options": [],
    "addons": []
  }
];
