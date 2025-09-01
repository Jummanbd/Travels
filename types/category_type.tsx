export interface Price {
  currency: string;

  amount: number | string;
}

export interface ItineraryItem {
  title: string;
  details: string;
}

export interface CategoryType {
  id: number;
  city: string;
  country: string;
  thumbnail: string;
  duration: string;
  locations: string[];
  title: string;
  directions: string;
  width: number;
  isSaved: boolean;
  price: Price;
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
}
