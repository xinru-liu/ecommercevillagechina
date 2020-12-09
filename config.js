var config = {
    style: 'mapbox://styles/xliuxliu/ckihdylnl61rv19p9dkqxsf01',
    accessToken: 'pk.eyJ1IjoieGxpdXhsaXUiLCJhIjoiY2tnZ2Zpd3piMHYycTJ5cGl4czZleXZpayJ9.5egPi5UdGMf6Kczfj47ahg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    width:50,

    chapters: [
      {
        id: 'What_1',
        title: 'What are E-Commerce Villages?',
        description:"Online shopping is an inseparable part of everyone's life now; with the modern logistic network and internet infrastructure, we can be connected to some of the most remote areas.",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {
              layer:"china_basemap_gdp",
              opacity:1
            },
            {
              layer:"selected-villages",
              opacity:0
            },
            {
              layer:"selected-villages_label",
              opacity:0
            },
            {
              layer:"selected-villages-heritage",
              opacity:0
            },
            {
              layer:"selected-villages-beau",
              opacity:0
            },
            {
              layer:"selected-villages-poverty",
              opacity:0
            },
            {
              layer:"nearby-all",
              opacity:0
            },
            {
              layer:"nearby-school",
              opacity:0
            },
            {
              layer:"nearby-hospital",
              opacity:0
            },
            {
              layer:"nearby-park",
              opacity:0
            }
          ],
        onChapterExit: [

          ]
      },
      {
        id: 'Why_2',
        title: 'E-Commerce Villages in China',
        description: "E-commerce Villages are children of this modern phenomenon. Small villages, some of which have close to zero industrial histories, are actively engaged in China's e-commerce business. ",
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {
              layer:"china_basemap_gdp",
              opacity:1
            }
          ],
        onChapterExit: [
          ]
      },
      {
        id: 'Why_3',
        title: "Taobao Villages",
        image: 'img/TBV_Network.png',
        imageCredit: "",
        description: "In 2009, Alibaba Group identified three villages with a considerable number of households involved in Taobao e-commerce. Alibaba Group later coined 'Taobao Village', referring it to villages with more than 10% of the total household involved in Taobao e-commerce and have annual sales exceeding 10 million RMB.",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
          {
            layer:"china_basemap_gdp",
            opacity:0.8
          }
          ],
        onChapterExit: [
          {
            layer:"china_basemap_gdp",
            opacity:0.5
          }
          ]
      },
      {
        id: 'Why_4',
        title: "",
        image: 'img/tb5.png',
        imageCredit: "Image from 2020 Taobao Report by AliResearch.",
        description: "In 2020, Alibaba Group published a list of over 5400 Taobao Villages. In the past 10 years, the size of e-commerce villages grew from 3 in 2009 to 5400+ in 2020.",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
          {
            layer:"china_basemap_gdp",
            opacity:0.8
          }
          ],
        onChapterExit: [
          ]
      },
      {
        id: 'Map_1',
        title: "The current distribution of E-commerce village, showing all 5400+ villages.",
        description:"",
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
          {
            layer:"china_basemap_gdp",
            opacity:1
          },
            {
              layer:"2020_E_Village",
              opacity:1
            }
          ],
        onChapterExit: [
          ]
      },
      {
        id: 'Map_2',
        title: "Among all villages, we zoom into 49 Villages.",
        description:'',
        // image: 'images/export-map.jpg',//change to text?
        location: {
            center: [105, 37.9],
            zoom: 3.61,
            pitch: 0,
            bearing: 0
            },
        onChapterEnter: [
            {
              layer:"selected-villages",
              opacity:1
            },
            {
              layer:"selected-villages_label",
              opacity:1
            }
          ],
        onChapterExit: [
          {
            layer:"selected-villages",
            opacity:0
          },
          {
            layer:"selected-villages_label",
            opacity:0
          }
          ]
        },
        {
          id: 'Map_3',
          title: "Some are villages that produce cultural and heritage products.",
          description:'',
          // image: 'images/export-map.jpg',//change to text?
          location: {
              center: [105, 37.9],
              zoom: 3.61,
              pitch: 0,
              bearing: 0
              },
          onChapterEnter: [
              {
                layer:"selected-villages-heritage",
                opacity:1
              }
            ],
          onChapterExit: [
            {
              layer:"sselected-villages-heritage",
              opacity:0
            }
            ]
          },
          {
            id: 'Map_4',
            title: "Some are villages given the name of 'The most beautiful Taobao Village' by Alibaba Group.",
            description:'',
            // image: 'images/export-map.jpg',//change to text?
            location: {
                center: [105, 37.9],
                zoom: 3.61,
                pitch: 0,
                bearing: 0
                },
            onChapterEnter: [
                {
                  layer:"selected-villages-beau",
                  opacity:1
                }
              ],
            onChapterExit: [
              {
                layer:"selected-villages-beau",
                opacity:0
              }
              ]
            },
            {
              id: 'Map_5',
              title: "Some are villages located in the at-risk area.",
              description:'',
              // image: 'images/export-map.jpg',//change to text?
              location: {
                  center: [105, 37.9],
                  zoom: 3.61,
                  pitch: 0,
                  bearing: 0
                  },
              onChapterEnter: [
                  {
                    layer:"selected-villages-poverty",
                    opacity:1
                  }
                ],
              onChapterExit: [
                {
                  layer:"selected-villages-poverty",
                  opacity:0
                }
                ]
              },
              {
                id: 'Map_6',
                title: "For each village,  we research the nearby public assets.",
                description:'',
                // image: 'images/export-map.jpg',//change to text?
                location: {
                    center: [105, 37.9],
                    zoom: 3.61,
                    pitch: 0,
                    bearing: 0
                    },
                onChapterEnter: [
                    {
                      layer:"nearby-all",
                      opacity:1
                    },
                    {
                      layer:"china_basemap_gdp",
                      opacity:0.8
                    }
                  ],
                onChapterExit: [
                  {
                    layer:"nearby-all",
                    opacity:0
                  }
                  ]
                },
                {
                  id: 'Map_7',
                  title: "All the schools",
                  description:'',
                  location: {
                      center: [105, 37.9],
                      zoom: 3.61,
                      pitch: 0,
                      bearing: 0
                      },
                  onChapterEnter: [
                      {
                        layer:"nearby-school",
                        opacity:1
                      }
                    ],
                  onChapterExit: [
                    {
                      layer:"nearby-school",
                      opacity:0
                    }
                    ]
                  },
                  {
                    id: 'Map_8',
                    title: "All the hospitals",
                    description:'',
                    location: {
                        center: [105, 37.9],
                        zoom: 3.61,
                        pitch: 0,
                        bearing: 0
                        },
                    onChapterEnter: [
                        {
                          layer:"nearby-hospital",
                          opacity:1
                        }
                      ],
                    onChapterExit: [
                      {
                        layer:"nearby-hospital",
                        opacity:0
                      }
                      ]
                    },
                    {
                      id: 'Map_7',
                      title: "All the Parks",
                      description:'',
                      location: {
                          center: [105, 37.9],
                          zoom: 3.61,
                          pitch: 0,
                          bearing: 0
                          },
                      onChapterEnter: [
                          {
                            layer:"nearby-park",
                            opacity:1
                          }
                        ],
                      onChapterExit: [
                        {
                          layer:"nearby-park",
                          opacity:0
                        }
                        ]
                      },
                      {
                        id: 'Map_8',
                        title: "Click Village Name to zoom in",
                        description:'',
                        location: {
                            center: [105, 37.9],
                            zoom: 3.61,
                            pitch: 0,
                            bearing: 0
                            },
                        onChapterEnter: [
                            {
                              layer:"2020_E_Village",
                              opacity:1
                            },
                            {
                              layer:"selected-villages",
                              opacity:1
                            },
                            {
                              layer:"china_village_satellite",
                              opacity:1
                            }

                          ],
                        onChapterExit: [

                          ]
                        },



    ]
}
