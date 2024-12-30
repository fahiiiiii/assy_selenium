const room = require('./Room').default
module.exports= Hotel = {
        id: string,
        slug: string,
        title: string,
        description: string,
        guestCount: number,
        bedroomCount: number,
        bathroomCount: number,
        amenities: string,
        hostInfo: string,
        address: string,
        latitude: number,
        longitude: number,
        images: string,
        rooms: room,
    }
    
    