
//Regular expression helper function to escape all special characters in a string
RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

//hard coded places

var savedData = {
	savedPlaces: [
  {
    "id": "4b6a474df964a5207ed02be3",
    "name": "Cervantes Masterpiece Ballroom",
    "contact": {
      "phone": "3032971772",
      "formattedPhone": "(303) 297-1772",
      "twitter": "cervantesdenver",
      "facebook": "98145293559",
      "facebookUsername": "CervantesDenver",
      "facebookName": "Cervantes Masterpiece Ballroom"
    },
    "location": {
      "address": "2637 Welton St",
      "crossStreet": "at 27th st",
      "lat": 39.75439511448691,
      "lng": -104.97879689156797,
      "postalCode": "80205",
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "2637 Welton St (at 27th st)",
        "Denver, CO 80205",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d1e5931735",
        "name": "Music Venue",
        "pluralName": "Music Venues",
        "shortName": "Music Venue",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": true,
    "stats": {
      "checkinsCount": 4492,
      "usersCount": 2157,
      "tipCount": 25
    },
    "url": "http://www.cervantesmasterpiece.com",
    "rating": 9,
    "ratingColor": "00B551",
    "ratingSignals": 181,
    "allowMenuUrlEdit": true,
    "hours": {
      "status": "Open until 11:30 PM",
      "isOpen": true,
      "isLocalHoliday": false
    },
    "photos": {
      "count": 0,
      "groups": []
    },
    "venuePage": {
      "id": "46452208"
    },
    "storeId": "",
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "4dd48edeb0fb7a332e6cfde3",
        "createdAt": 1305775838,
        "text": "legendary presence in denver",
        "type": "user",
        "url": "http://www.goscoville.com",
        "canonicalUrl": "https://foursquare.com/item/4dd48edeb0fb7a332e6cfde3",
        "likes": {
          "count": 12,
          "groups": [
            {
              "type": "others",
              "count": 12,
              "items": []
            }
          ],
          "summary": "12 likes"
        },
        "logView": true,
        "todo": {
          "count": 1
        },
        "user": {
          "id": "2413516",
          "firstName": "🎯Eric💀",
          "lastName": "🐙Hinderberger👽",
          "gender": "male",
          "photo": {
            "prefix": "https://irs3.4sqi.net/img/user/",
            "suffix": "/CNIUP5FQLYQRIS0Y.jpg"
          }
        }
      },
      {
        "id": "4d9ddfb88ab0530c74a2497e",
        "createdAt": 1302192056,
        "text": "Voted Best Weeknight Parties in Westword's Best of Denver 2011!",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/4d9ddfb88ab0530c74a2497e",
        "likes": {
          "count": 8,
          "groups": [
            {
              "type": "others",
              "count": 8,
              "items": [
                {
                  "id": "20398258",
                  "firstName": "Dejay",
                  "lastName": "R",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/20398258-4T3IPCCRVXCLU2GN.jpg"
                  }
                },
                {
                  "id": "33403266",
                  "firstName": "Justine",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/HUQJMDBOLG24V0HF.jpg"
                  }
                },
                {
                  "id": "4128417",
                  "firstName": "Kyle",
                  "lastName": "S.",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs3.4sqi.net/img/user/",
                    "suffix": "/INOPLSDPFJZM1NV5.jpg"
                  }
                },
                {
                  "id": "42576731",
                  "firstName": "Hasan",
                  "lastName": "Akdoğan Favori Çanta 👛👜👝🐩🌙♨♻🔴🔵⚪⚫",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/42576731-O5TOVNHSEB4EYS1J.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "8 likes"
        },
        "logView": true,
        "todo": {
          "count": 9
        },
        "user": {
          "id": "4426445",
          "firstName": "Denver Westword",
          "gender": "none",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/EPUNAYTRW4LCP4TA.jpg"
          },
          "type": "page"
        }
      },
      {
        "id": "4cfecd8735ae2d43425de2f1",
        "createdAt": 1291767175,
        "text": "Winner of Westword's Best of Denver 2010 - Best Old Venue Makeover!",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/4cfecd8735ae2d43425de2f1",
        "likes": {
          "count": 5,
          "groups": [
            {
              "type": "others",
              "count": 5,
              "items": [
                {
                  "id": "47458905",
                  "firstName": "Ali",
                  "lastName": "Karasar",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs0.4sqi.net/img/user/",
                    "suffix": "/2GTVGOYPEFWD4Z5L.jpg"
                  }
                },
                {
                  "id": "42334864",
                  "firstName": "Kim Jackson",
                  "lastName": "Wilburn",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/42334864-TRLAUAH2OR0IFJ05.jpg"
                  }
                },
                {
                  "id": "42576731",
                  "firstName": "Hasan",
                  "lastName": "Akdoğan Favori Çanta 👛👜👝🐩🌙♨♻🔴🔵⚪⚫",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/42576731-O5TOVNHSEB4EYS1J.jpg"
                  }
                },
                {
                  "id": "24232324",
                  "firstName": "Brielle",
                  "lastName": "Bataille",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs3.4sqi.net/img/user/",
                    "suffix": "/24232324-CY4ARRO2BUVISMSJ.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "5 likes"
        },
        "logView": true,
        "todo": {
          "count": 9
        },
        "user": {
          "id": "4426445",
          "firstName": "Denver Westword",
          "gender": "none",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/EPUNAYTRW4LCP4TA.jpg"
          },
          "type": "page"
        }
      }
    ]
  },
  {
    "id": "5493a3ed498e9c88a7e5df38",
    "name": "Meadowlark Kitchen",
    "contact": {},
    "location": {
      "address": "2705 Larimer St",
      "lat": 39.75955150383802,
      "lng": -104.98414276351754,
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "2705 Larimer St",
        "Denver, CO",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d1c4941735",
        "name": "Restaurant",
        "pluralName": "Restaurants",
        "shortName": "Restaurant",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": false,
    "stats": {
      "checkinsCount": 203,
      "usersCount": 145,
      "tipCount": 5
    },
    "price": {
      "tier": 2,
      "message": "Moderate",
      "currency": "$"
    },
    "rating": 8.6,
    "ratingColor": "73CF42",
    "ratingSignals": 21,
    "allowMenuUrlEdit": true,
    "photos": {
      "count": 0,
      "groups": []
    },
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "5614b2a5498e7d471fd69a64",
        "createdAt": 1444197029,
        "text": "Everything is good",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/5614b2a5498e7d471fd69a64",
        "photo": {
          "id": "5614b2bd498e4a472fc093ba",
          "createdAt": 1444197053,
          "source": {
            "name": "Foursquare for iOS",
            "url": "https://foursquare.com/download/#/iphone"
          },
          "prefix": "https://irs2.4sqi.net/img/general/",
          "suffix": "/34452192_Th4CSslSqlpr-7pLapQ_lid_10Nad2ZRwrDATEekMaI.jpg",
          "width": 1079,
          "height": 1920,
          "visibility": "public"
        },
        "photourl": "https://irs2.4sqi.net/img/general/original/34452192_Th4CSslSqlpr-7pLapQ_lid_10Nad2ZRwrDATEekMaI.jpg",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "34452192",
          "firstName": "Aziz",
          "gender": "male",
          "photo": {
            "prefix": "https://irs1.4sqi.net/img/user/",
            "suffix": "/34452192-I1BPAG3BRKFPHJUZ.jpg"
          }
        }
      },
      {
        "id": "560723d4498e824a6b922b60",
        "createdAt": 1443308500,
        "text": "Wild mushrooms are a must try. The cocktail Maximilian has a spicy kick that is fantastic.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/560723d4498e824a6b922b60",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "941142",
          "firstName": "Shycu",
          "gender": "female",
          "photo": {
            "prefix": "https://irs0.4sqi.net/img/user/",
            "suffix": "/941142-P42NADHJ0HF2O2CP.jpg"
          }
        }
      },
      {
        "id": "55df4596498e56a5f366ff01",
        "createdAt": 1440695702,
        "text": "Catfish or the BLT. Never fails.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/55df4596498e56a5f366ff01",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "12291469",
          "firstName": "Kaila",
          "lastName": "Schleu",
          "gender": "female",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/12291469-NC2CP3H4RHIHJFP2.jpg"
          }
        }
      }
    ]
  },
  {
    "id": "502d9202e4b05f26aead4198",
    "name": "Americatus New-World Italian",
    "contact": {
      "phone": "3038629850",
      "formattedPhone": "(303) 862-9850",
      "twitter": "americatus",
      "facebook": "296550263764317",
      "facebookUsername": "Americatus",
      "facebookName": "Americatus New-World Italian"
    },
    "location": {
      "address": "2449 Larimer St",
      "crossStreet": "Broadway",
      "lat": 39.7574923608625,
      "lng": -104.98716094901243,
      "postalCode": "80205",
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "2449 Larimer St (Broadway)",
        "Denver, CO 80205",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": true,
    "stats": {
      "checkinsCount": 1052,
      "usersCount": 480,
      "tipCount": 19
    },
    "url": "http://americatus.com",
    "price": {
      "tier": 1,
      "message": "Cheap",
      "currency": "$"
    },
    "hasMenu": true,
    "rating": 8.5,
    "ratingColor": "73CF42",
    "ratingSignals": 60,
    "menu": {
      "type": "Menu",
      "label": "Menu",
      "anchor": "View Menu",
      "url": "https://foursquare.com/v/americatus-newworld-italian/502d9202e4b05f26aead4198/menu",
      "mobileUrl": "https://foursquare.com/v/502d9202e4b05f26aead4198/device_menu"
    },
    "allowMenuUrlEdit": true,
    "hours": {
      "status": "Open until 9:00 PM",
      "isOpen": true,
      "isLocalHoliday": false
    },
    "photos": {
      "count": 0,
      "groups": []
    },
    "venuePage": {
      "id": "69542421"
    },
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "51799028e4b0e840831c521c",
        "createdAt": 1366921256,
        "text": "All sandwiches cost $7.50 and include fresh-fried kettle chips, the only side. Add a chocolate-chip or peanut-butter cookie; they're crisp, large and only 75 cents...",
        "type": "user",
        "url": "http://www.westword.com/2013-04-25/restaurants/amerigo-delicatus-restaurant-review/",
        "canonicalUrl": "https://foursquare.com/item/51799028e4b0e840831c521c",
        "likes": {
          "count": 10,
          "groups": [
            {
              "type": "others",
              "count": 10,
              "items": []
            }
          ],
          "summary": "10 likes"
        },
        "logView": true,
        "todo": {
          "count": 3
        },
        "user": {
          "id": "4426445",
          "firstName": "Denver Westword",
          "gender": "none",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/EPUNAYTRW4LCP4TA.jpg"
          },
          "type": "page"
        }
      },
      {
        "id": "52814d8011d2d329e515d319",
        "createdAt": 1384205696,
        "text": "Monday is $5 lunch day. Get it.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/52814d8011d2d329e515d319",
        "likes": {
          "count": 6,
          "groups": [
            {
              "type": "others",
              "count": 6,
              "items": [
                {
                  "id": "85411534",
                  "firstName": "Natasha",
                  "lastName": "Merrick",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs3.4sqi.net/img/user/",
                    "suffix": "/85411534-K0ZUXIQWUA1Y1GAW"
                  }
                },
                {
                  "id": "562441",
                  "firstName": "Ryan",
                  "lastName": "Estes",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/562441-GJVK1TQTB1TLGOIQ.jpg"
                  }
                },
                {
                  "id": "535828",
                  "firstName": "Nicole",
                  "lastName": "Relyea",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs0.4sqi.net/img/user/",
                    "suffix": "/535828-LX1X50CCNRCOC4Y1.jpg"
                  }
                },
                {
                  "id": "66793021",
                  "firstName": "Ian",
                  "lastName": "Cohen",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/SVRUUXS2FVOH3EUL.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "6 likes"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "1172778",
          "firstName": "Courtney",
          "lastName": "ORourke",
          "gender": "female",
          "photo": {
            "prefix": "https://irs0.4sqi.net/img/user/",
            "suffix": "/VDDQABFJZWAB1RO1.jpg"
          }
        }
      },
      {
        "id": "5217bd3811d2aa1b19284a1c",
        "createdAt": 1377287480,
        "text": "Talk with Zack and Ian-- they're the nicest gents and use top notch ingredients",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/5217bd3811d2aa1b19284a1c",
        "likes": {
          "count": 3,
          "groups": [
            {
              "type": "others",
              "count": 3,
              "items": [
                {
                  "id": "66793021",
                  "firstName": "Ian",
                  "lastName": "Cohen",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/SVRUUXS2FVOH3EUL.jpg"
                  }
                },
                {
                  "id": "65907572",
                  "firstName": "Americatus",
                  "lastName": "New-World Italian",
                  "gender": "none",
                  "photo": {
                    "prefix": "https://irs0.4sqi.net/img/user/",
                    "suffix": "/65907572-O1HBI2UQZFC1YZPZ"
                  }
                },
                {
                  "id": "49647654",
                  "firstName": "Zac",
                  "lastName": "Harrison",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/ILNRVX1OIN0XVI4P.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "3 likes"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "36982969",
          "firstName": "Samuel",
          "lastName": "Pike",
          "gender": "male",
          "photo": {
            "prefix": "https://irs1.4sqi.net/img/user/",
            "suffix": "/5V0ZH2NBLKLGZMPL.jpg"
          }
        }
      }
    ]
  },
  {
    "id": "4b269f79f964a520847e24e3",
    "name": "Welton Street Cafe",
    "contact": {
      "phone": "3032966602",
      "formattedPhone": "(303) 296-6602"
    },
    "location": {
      "address": "2736 Welton St",
      "lat": 39.755136,
      "lng": -104.977394,
      "postalCode": "80205",
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "2736 Welton St",
        "Denver, CO 80205",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d1c4941735",
        "name": "Restaurant",
        "pluralName": "Restaurants",
        "shortName": "Restaurant",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": false,
    "stats": {
      "checkinsCount": 711,
      "usersCount": 377,
      "tipCount": 33
    },
    "price": {
      "tier": 2,
      "message": "Moderate",
      "currency": "$"
    },
    "rating": 8.9,
    "ratingColor": "73CF42",
    "ratingSignals": 63,
    "allowMenuUrlEdit": true,
    "hours": {
      "status": "Likely open",
      "isOpen": true,
      "isLocalHoliday": false
    },
    "photos": {
      "count": 0,
      "groups": []
    },
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "4bfeba9c70c603bb98389db4",
        "createdAt": 1274985116,
        "text": "What a friendly place! Come here for the hospitality and excellent menu.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/4bfeba9c70c603bb98389db4",
        "likes": {
          "count": 5,
          "groups": [
            {
              "type": "others",
              "count": 5,
              "items": []
            }
          ],
          "summary": "5 likes"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "288565",
          "firstName": "Selene",
          "lastName": "Karavites",
          "gender": "female",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/TDNOOVQZATUB23C4.jpg"
          }
        }
      },
      {
        "id": "5251e90b11d28b42eea27141",
        "createdAt": 1381099787,
        "text": "Get the catfish dinner great rice and beans, the catfish sandwich is also good.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/5251e90b11d28b42eea27141",
        "likes": {
          "count": 3,
          "groups": [
            {
              "type": "others",
              "count": 3,
              "items": [
                {
                  "id": "11314031",
                  "firstName": "Erica",
                  "lastName": "Jackson",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs0.4sqi.net/img/user/",
                    "suffix": "/JV0PLVXWHMUFGHDQ.jpg"
                  }
                },
                {
                  "id": "92218347",
                  "firstName": "Westcoastless",
                  "lastName": "Crew",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/92218347-CHVCTKDFPSHNENRL.jpg"
                  }
                },
                {
                  "id": "5106600",
                  "firstName": "POOTY",
                  "lastName": "TANG",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/S0KYFZ0V1ERADDMM.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "3 likes"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "11593441",
          "firstName": "James",
          "lastName": "Nesbit",
          "gender": "male",
          "photo": {
            "prefix": "https://irs3.4sqi.net/img/user/",
            "suffix": "/CTNW5KMPGEMAL3LT.jpg"
          }
        }
      },
      {
        "id": "520d6c4711d2ea6a4b323d8a",
        "createdAt": 1376611399,
        "text": "My home away from home:) Love this place to death, I would recommend it to anyone in the DEN area!",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/520d6c4711d2ea6a4b323d8a",
        "likes": {
          "count": 3,
          "groups": [
            {
              "type": "others",
              "count": 3,
              "items": [
                {
                  "id": "77885970",
                  "firstName": "Katherine",
                  "lastName": "Grindle",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs3.4sqi.net/img/user/",
                    "suffix": "/77885970-IUH42GFRTFM4YCSA.jpg"
                  }
                },
                {
                  "id": "69411618",
                  "firstName": "Andres",
                  "lastName": "Romero",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs3.4sqi.net/img/user/",
                    "suffix": "/69411618-3YVN3HLMHB3FPYTU.jpg"
                  }
                },
                {
                  "id": "63873595",
                  "firstName": "Jenny",
                  "lastName": "Hwang",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://irs2.4sqi.net/img/user/",
                    "suffix": "/blank_girl.png",
                    "default": true
                  }
                }
              ]
            }
          ],
          "summary": "3 likes"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "63019495",
          "firstName": "Zach",
          "lastName": "Griego-Dreicer",
          "gender": "male",
          "photo": {
            "prefix": "https://irs0.4sqi.net/img/user/",
            "suffix": "/OXG2BLZVWMEL1Z0Y.jpg"
          }
        }
      }
    ]
  },
  {
    "id": "4c617cddb6f3be9aedc96173",
    "name": "Taqueria Emmanuel",
    "contact": {},
    "location": {
      "address": "810 Park Ave W",
      "lat": 39.75265156063587,
      "lng": -104.98481029683082,
      "postalCode": "80205",
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "810 Park Ave W",
        "Denver, CO 80205",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d1c1941735",
        "name": "Mexican Restaurant",
        "pluralName": "Mexican Restaurants",
        "shortName": "Mexican",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": false,
    "stats": {
      "checkinsCount": 218,
      "usersCount": 64,
      "tipCount": 5
    },
    "price": {
      "tier": 1,
      "message": "Cheap",
      "currency": "$"
    },
    "rating": 7.5,
    "ratingColor": "C5DE35",
    "ratingSignals": 10,
    "allowMenuUrlEdit": true,
    "photos": {
      "count": 0,
      "groups": []
    },
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "4cec72767b943704abf02053",
        "createdAt": 1290564214,
        "text": "99c tacos and tostadas! also, the nachos rule!",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/4cec72767b943704abf02053",
        "likes": {
          "count": 1,
          "groups": [
            {
              "type": "others",
              "count": 1,
              "items": [
                {
                  "id": "13776274",
                  "firstName": "John",
                  "lastName": "Bautista",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://irs1.4sqi.net/img/user/",
                    "suffix": "/JGKP3BFJ1GUAQKUB.jpg"
                  }
                }
              ]
            }
          ],
          "summary": "1 like"
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "4565019",
          "firstName": "Chris",
          "lastName": "Spaght",
          "gender": "male",
          "photo": {
            "prefix": "https://irs0.4sqi.net/img/user/",
            "suffix": "/4565019-MB52N4Q2ES3L4QZM.jpg"
          }
        }
      },
      {
        "id": "5579eced498e295ac56c245f",
        "createdAt": 1434053869,
        "text": "Great tacos",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/5579eced498e295ac56c245f",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "49249519",
          "firstName": "Nick",
          "lastName": "Campion",
          "gender": "male",
          "photo": {
            "prefix": "https://irs1.4sqi.net/img/user/",
            "suffix": "/-VRWUKNNHWP12J2JP.jpg"
          }
        }
      },
      {
        "id": "525bbb2911d216690a44acf9",
        "createdAt": 1381743401,
        "text": "best/cheapest Mexican food in allllllllllll of Denver #facts",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/525bbb2911d216690a44acf9",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "8733831",
          "firstName": "DBDW",
          "gender": "male",
          "photo": {
            "prefix": "https://irs0.4sqi.net/img/user/",
            "suffix": "/8733831-HIZMRY00U1FNVQ2S.jpg"
          }
        }
      }
    ]
  },
  {
    "id": "54b44282498eef653d7814a8",
    "name": "Nocturne",
    "contact": {
      "phone": "3032953333",
      "formattedPhone": "(303) 295-3333",
      "twitter": "nocturnedenver"
    },
    "location": {
      "address": "1330 27th St",
      "crossStreet": "Larimer Street",
      "lat": 39.759583028031294,
      "lng": -104.98452502584512,
      "postalCode": "80205",
      "cc": "US",
      "city": "Denver",
      "state": "CO",
      "country": "United States",
      "formattedAddress": [
        "1330 27th St (Larimer Street)",
        "Denver, CO 80205",
        "United States"
      ]
    },
    "categories": [
      {
        "id": "4bf58dd8d48988d1e7931735",
        "name": "Jazz Club",
        "pluralName": "Jazz Clubs",
        "shortName": "Jazz Club",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_jazzclub_",
          "suffix": ".png"
        },
        "primary": true
      }
    ],
    "verified": true,
    "stats": {
      "checkinsCount": 128,
      "usersCount": 105,
      "tipCount": 2
    },
    "rating": 8.2,
    "ratingColor": "73CF42",
    "ratingSignals": 18,
    "allowMenuUrlEdit": true,
    "hours": {
      "status": "Open until 1:00 AM",
      "isOpen": true,
      "isLocalHoliday": false
    },
    "photos": {
      "count": 0,
      "groups": []
    },
    "venuePage": {
      "id": "140389569"
    },
    "storeId": "",
    "hereNow": {
      "count": 0,
      "summary": "Nobody here",
      "groups": []
    },
    "tips": [
      {
        "id": "56b0c7f7498ed0db81ffab40",
        "createdAt": 1454426103,
        "text": "Excellent jazz bar, the oysters are good if you like something different and are open to pineapple.",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/56b0c7f7498ed0db81ffab40",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "12291469",
          "firstName": "Kaila",
          "lastName": "Schleu",
          "gender": "female",
          "photo": {
            "prefix": "https://irs2.4sqi.net/img/user/",
            "suffix": "/12291469-NC2CP3H4RHIHJFP2.jpg"
          }
        }
      },
      {
        "id": "55d0a430498ef8ac876f4261",
        "createdAt": 1439736880,
        "text": "Who does not like some Jazz?",
        "type": "user",
        "canonicalUrl": "https://foursquare.com/item/55d0a430498ef8ac876f4261",
        "likes": {
          "count": 0,
          "groups": []
        },
        "logView": true,
        "todo": {
          "count": 0
        },
        "user": {
          "id": "6229518",
          "firstName": "Ricky",
          "lastName": "Sherrill",
          "gender": "male",
          "photo": {
            "prefix": "https://irs1.4sqi.net/img/user/",
            "suffix": "/PG3XUEJ2V4BUFNLA.jpg"
          }
        }
      }
    ]
  }
],
	neighborhood: "Five Points",
	city: "Denver",
	state: "Colorado",
	currentNeighborhood: "Five Points, Denver, Colorado",
	currentLatLng: {
		"lat": 39.7542755,
		"lng": -104.97977530000003
	}
}

var ViewModel = function(savedData) {
	self = this;
	self.savedPlaces = ko.observableArray(savedData.savedPlaces);
	self.displayedPlaces = ko.observableArray(/*savedData.savedPlaces*/);

	self.newItem = ko.observable();
	self.neighborhood = ko.observable(savedData.neighborhood);
	self.city = ko.observable(savedData.city);
	self.state = ko.observable(savedData.state);
	self.currentNeighborhood = ko.observable(savedData.currentNeighborhood);
	self.currentLatLng = ko.observable(savedData.currentLatLng);

	self.placeQuery = ko.observable();
	self.placeResults = ko.observableArray();
	self.selectedResults = ko.observableArray();

	self.selectedSavedPlaces = ko.observableArray();
	
	self.filterQuery = ko.observable();
	self.filteredSavedPlaces = ko.observableArray();


	self.currentView = ko.observable();

	self.formattedAddress = ko.computed(function() {
		if (self.currentView()) {
			var address = self.currentView().location.formattedAddress;
			var formattedAddress = "";
			for (var i=0; i < address.length; i++) {
				formattedAddress+=address[i];
				formattedAddress+="<br>";
			}
			return formattedAddress;
		}
	});


	//logic for google markers
	self.markers = {};
	self.currentId = 0;


	//Subscribe displayedPlaces to update google map with markers
	self.updateMarkers = function (changes) {
		var iterLength = changes.length;
		for (var i=0; i<iterLength; i++) {
			var alteration = changes[i];
			if (alteration.status === "added") {
				//logic for additions
				var position = alteration.value.location;
				var id = String(position.lat) + String(position.lng);
				var marker = new google.maps.Marker({
					position: position,
					map: map,
					animation: google.maps.Animation.DROP
				});
				self.markers[id] = marker;
				map.setCenter(position);


			} else {
				//logic for deletions
				var position = alteration.value.location;
				var id = String(position.lat) + String(position.lng);
				var marker = self.markers[id];

				if (self.markers["selected"] && self.markers["selected"]["id"]===id) {
					self.markers["selected"].setMap(null);
				}

				marker.setMap(null);
				delete self.markers[id];

			}
		}
	}
	self.displayedPlaces.subscribe(self.updateMarkers, null, "arrayChange");

	//Subscribes savedPlaces to update displayedPlaces per filter 

	self.updateDisplayedPlaces = function(changes) {

		filterQuery = self.filterQuery();

			var iterLength = changes.length;

			for (var i=0; i<iterLength; i++) {
				var alteration = changes[i];
				var place = alteration.value;
				if (alteration.status === "added") {
					//logic for additions
					if (filterQuery === undefined || filterQuery === "") {
						self.displayedPlaces.push(place);
					} else {
						var regExpFilter = new RegExp(RegExp.escape(filterQuery)+" *", "i");

						console.log(regExpFilter);


						var found = regExpFilter.test(place.name);
						if (found) {
							self.displayedPlaces.push(place);
						}
					}
					
				} else {
					//logic for deletions
					if (place === self.currentView()) {
						self.currentView(null);
					}
					if (filterQuery === undefined || filterQuery === "") {
						self.displayedPlaces.remove(place);
					} else {
						var alteration = changes[i];
						var displayedPlaces = self.displayedPlaces();
						if (displayedPlaces.indexOf(place) !== -1) {
							self.displayedPlaces.remove(place);
						}
					}
					
				}
			}
		} 
	self.savedPlaces.subscribe(self.updateDisplayedPlaces, null, "arrayChange");
	//subscription to update displayedPlaces by iterating through savedPlaces when filterQuery changes
	self.updateFilter = function(change) {
		var filterQuery = change;

		if (filterQuery === undefined || filterQuery ==="") {
			self.displayedPlaces(self.savedPlaces());
		} else {
			self.displayedPlaces([]);
			var savedPlaces = self.savedPlaces();
			var iterLength = savedPlaces.length;
			var regExpFilter = new RegExp(RegExp.escape(filterQuery)+" *", "i");

			for (var i=0; i<iterLength; i++) {
				var place = savedPlaces[i]
				var found = regExpFilter.test(place.name);
				console.log ("filter:" + regExpFilter + "place: " + place.name +  "found?" + found);
				if (found) {
					self.displayedPlaces.push(place);
				}
			}
		}
	}
	self.filterQuery.subscribe(self.updateFilter, null);

	

	//Methods
	self.searchNeighborhood = function(number) {

		var processResults = function(data) {

			var results = data.response.groups[0].items;
			
			var iterLength = results.length;

			for (var i=0; i < iterLength; i++) {

				possiblePlace = results[i].venue;

				console.log(possiblePlace);

				var length = self.savedPlaces().length;

				self.placeResults.push(possiblePlace);

				var createAjaxRequest = function (possiblePlace) {

					return function() {
						var tipRequest = {
							"url": "https://api.foursquare.com/v2/venues/" + possiblePlace.id + "/tips?client_id=EA3A3XF2VX0FDZNSQDTNIK2ZDDASGYOFMLWOE05NLPX1HGNE&client_secret=TSVLB1DZHDGURRYXWQKYHMUKNT1FQ4MFAGV11T2F2PSFCOVW&v=20160518&sort=popular&limit=3" ,
							"dataType": "json",  
							"success": function(data) {
								possiblePlace["tips"] = data.response.tips.items.slice(0,3);
							}
						};
						$.get(tipRequest);
					}
				}

				var ajaxRequest = createAjaxRequest(possiblePlace);
				ajaxRequest();

			}

			console.log("results:" + self.placeResults());
		};

		var address = self.currentNeighborhood();

		var client_id = "EA3A3XF2VX0FDZNSQDTNIK2ZDDASGYOFMLWOE05NLPX1HGNE";
		var client_secret = "TSVLB1DZHDGURRYXWQKYHMUKNT1FQ4MFAGV11T2F2PSFCOVW";
		var version = "20160518";
		var section = "topPicks";
		var radius = 800;
		var limit = number;
		var url = "https://api.foursquare.com/v2/venues/explore?client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + version + "&near="+ address + "&section=" + section + "&radius=" + radius + "&limit=" + limit;

		var request = {
			"url": url,
			"dataType": "json",
			"success": processResults
			};

		$.get(request);

		};

	self.changeNeighborhood = function() {

		//Saves the neighborhood name to currentNeighborhood Observable
		var address = self.neighborhood() + ", " + self.city() + ", " + self.state();
		self.currentNeighborhood(address);

		self.savedPlaces([]);
		self.placeResults([]);
		//Calls a search on new neighborhood
		self.searchNeighborhood(100);

		//Updates the map to focus on this neigbhorhood
		var geocoder;
		var coords;
		var geocode = function () {
		    geocoder = new google.maps.Geocoder();
		    geocoder.geocode({"address": address}, function(results, status) {
		    	if (status == google.maps.GeocoderStatus.OK) {
		    		coords = results[0].geometry.location;
		    		self.currentLatLng(coords);

		    		map.setCenter(results[0].geometry.location);

		    	}  else {
		    		alert("Geocode was not successful for the following reason: " + status);
		    	}
		    });
		};

		geocode();
	};

	self.removePlaces = function() {
		var arr = self.selectedSavedPlaces();
		iterLength = arr.length;

		for (var i = 0; i < iterLength; i++) {
			self.savedPlaces.remove(arr[i]);
		}
	};

	self.viewPlace = function(_, target) {
		var place;
		switch (target.currentTarget.id) {

			case "results": 
			place = self.selectedResults()[0];
			break;

			case "savedPlaces":
			place = self.selectedSavedPlaces()[0];
			break;
		}

		//remove any existing selected marker
		if (self.markers["selected"]) {
			self.markers["selected"].setMap(null);
			var id = self.markers["selected"]["id"];
			console.log(id);
			console.log(self.markers);

			if (self.markers[id]) {
				self.markers[id].setMap(map);
			}

			self.markers["selected"] = null;

		}

		//add new selected marker
		console.log(place);
		var position = place.location;
		var id = String(position.lat) + String(position.lng);
		var marker = new google.maps.Marker({
				position: position,
				map: map,
				id: id,
				animation: google.maps.Animation.DROP
			});
		marker.setIcon('img/icon39.png');
		marker.setZIndex(9999);
		map.setCenter(position);
		self.markers["selected"] = marker;


		if (self.markers[id]) {
			self.markers[id].setMap(null);
		}

		//update current view
		self.currentView(place);

	};

	self.searchPlace = function() {
		var query = self.placeQuery();

		var request = {
		   location: self.currentLatLng(),
		   radius: '1000',
		   query: query
		 };

		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, function(data) {
			self.placeResults(data);
		});
	};

	self.addPlaces = function() {
		var results = self.selectedResults();
		var iterLength = results.length;

		//iterates through search results
		for (var i = 0; i < iterLength; i++) {

			var newPlace = results[i];
			var found = false;
			var places = self.savedPlaces();
			var placeLength = places.length;

			//checks for duplicates against place array
			for (var i = 0; i < placeLength; i++) {
				if (newPlace === places[i]) {
					found = true;
				}
			}

			if (!found) {
				self.savedPlaces.push(newPlace);
				self.placeResults.remove(newPlace);
			}
		}
	};

	self.filterSavedPlaces = function() {

	}
}


var map;
function createInitMap(vm) {
	return function() {
		map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: -34.397, lng: 150.644},
		  zoom: 13,
		  zoomControl: true,
		  scaleControl: true
		});

		google.maps.event.addListenerOnce(map, 'idle', function() {
			vm.displayedPlaces(savedData.savedPlaces);
		});
	}
}

myViewModel = new ViewModel(savedData);
ko.applyBindings(myViewModel);

var initMap = createInitMap(myViewModel);



