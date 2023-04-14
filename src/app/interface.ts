export interface SearchCity {
  //response to https://api.teleport.org/api/cities/?search=${event.query} 
  _embedded: {
    'city:search-results': [
      {
        matching_full_name: string;
        _embedded: {
          'city:item': {
            population: number;
            _links: {
              'city:urban_area': {
                href: string;
                name: string;
              };
            };
          };
        };
        _links: {
          'city-items': {
            href: string;
          };
        };
      }
    ];
  };
}

export interface CityScore {
  categories: [
    {
      color: string;
      name: string;
      score_out_of_10: number;
    }
  ];
  summary: string;
  teleport_city_score: number;
}

export interface CityImage {
  photos: [
    {
      image: {
        mobile: string;
        web: string;
      };
      attribution: {
        license: string;
        photographer: string;
        site: string;
      };
    }
  ];
}

export interface CityData {
  name: string;
  cityScore: number;
  summary: string;
  image: {
    url: string;
    license: string;
    photographer: string;
    site: string;
  };
  categories: [
    {
      color: string;
      name: string;
      score_out_of_10: number;
    }
  ];
}
