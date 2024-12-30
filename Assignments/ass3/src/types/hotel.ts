export interface Room {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }
  
  export interface Hotel {
    id: string;
    slug: string;
    title: string;
    images: string[];
    description: string;
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    host: {
      name: string;
      email: string;
      phone: string;
    };
    location: {
      address: string;
      latitude: number;
      longitude: number;
    };
    rooms: Room[];
  }
  