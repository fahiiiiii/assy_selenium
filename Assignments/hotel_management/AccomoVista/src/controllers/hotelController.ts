import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { Hotel,Room } from './../models/Hotel';
import multer from 'multer';
import { error } from 'console';

//!create a hotel 


 
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Save room images in 'public/roomView' and hotel images in 'upload/hotelView'
    if (file.fieldname === 'roomImage') {
      cb(null, path.join(__dirname, '../../public/roomView/'));
    } else if (file.fieldname === 'images') {
      cb(null, path.join(__dirname, '../../upload/hotelView/'));
    } else {
      cb(new Error('Unknown field for file upload'), '');  // Handle unknown fields
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Use timestamp for unique filenames
  },
});
 
// Allow multiple hotel images and room images
const upload = multer({ storage }).fields([
  { name: 'images', maxCount: 5 },  // General hotel images (max 5 images)
  { name: 'roomImage', maxCount: 5 } // Multiple room images (one per room if needed)
]);
 
export const createHotel = (req: Request, res: Response): void => {
  // Use multer middleware to handle image uploads
  upload(req, res, (err: any) => {
    if (err) {
      return res.status(500).json({ error: 'Error uploading files', details: err });
    }
 
    try {
      // Extract hotel data from the request body
      const { 
        title, 
        description, 
        guestCount, 
        bedroomCount, 
        bathroomCount, 
        amenities, 
        hostInfo, 
        address, 
        latitude, 
        longitude, 
        rooms // rooms should be a JSON string array; we will parse it
      } = req.body;
 
      // Validate required fields
      // if (!title || !description) {
      //   return res.status(400).json({ error: 'Title and description are required' });
      // }
 
      // Generate a unique slug for the hotel
      const slug = slugify(title, { lower: true });
 
      // Prepare the list of uploaded hotel images (general images)
      const images = (req.files as { [fieldname: string]: Express.Multer.File[] })['images']?.map((file) => file.filename) || [];
 
      // Prepare room images if they exist
      const roomImages = (req.files as { [fieldname: string]: Express.Multer.File[] })['roomImage']?.map((file) => file.filename) || [];
 
      // Parse rooms data if provided, otherwise set to an empty array
      const roomsData: Room[] = rooms ? JSON.parse(rooms).map((room: any, index: number) => {
        return {
          hotelSlug: slug,
          roomSlug: slugify(room.roomTitle, { lower: true }),
          roomImage: roomImages[index] || '',  // Assign each room image by index if available
          roomTitle: room.roomTitle,
          bedroomCount: room.bedroomCount,
        };
      }) : [];
 
      // Create the hotel data object including rooms and images
      const hotelData: Hotel = {
        id: Date.now().toString(),
        slug,
        title,
        description,
        guestCount: Number(guestCount),
        bedroomCount: Number(bedroomCount),
        bathroomCount: Number(bathroomCount),
        amenities: amenities ? amenities.split(',') : [],  // Convert amenities from string to array
        hostInfo,
        address,
        latitude: Number(latitude),
        longitude: Number(longitude),
        images,
        rooms: roomsData,  // Add rooms to the hotel data object
      };
 
      // Save the hotel data to a JSON file
      const filePath = path.join(__dirname, `../../uploads/${hotelData.id}.json`);
      fs.writeFileSync(filePath, JSON.stringify(hotelData));
 
      // Send success response with hotel data, including rooms and images
      res.status(201).json({ message: 'Hotel created', data: hotelData });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: `Error occurred: ${error.message}` });
    }
  });
};
 

// Configure multer for file uploads


// Configure multer for file uploads


// export const createHotel = (req: Request, res: Response): void => {
//   try {
//     const { 
//       title, 
//       description, 
//       guestCount, 
//       bedroomCount, 
//       bathroomCount, 
//       amenities, 
//       hostInfo, 
//       address, 
//       latitude, 
//       longitude, 
//       images, 
//       rooms 
//     } = req.body;

//     // Basic validation for required fields
//     // if (!title || !description ) {
//     //   res.status(400).json({ error: `Title, description, hostInfo, address, latitude, and longitude are required ${error}` });
//     //   return;
//     // }

//     // Generate a slug from the title
//     const slug = slugify(title, { lower: true });

//     // Create the hotel data object
//     const hotelData: Hotel = {
//       id: Date.now().toString(),  // Using timestamp for unique id
//       slug,
//       title,
//       description,
//       guestCount: guestCount || 0,  // Default to 0 if not provided
//       bedroomCount: bedroomCount || 0,  // Default to 0 if not provided
//       bathroomCount: bathroomCount || 0,  // Default to 0 if not provided
//       amenities: amenities || [],  // Default to empty array if not provided
//       hostInfo,
//       address,
//       latitude,
//       longitude,
//       images: images || [],  // Default to empty array if not provided
//       rooms: rooms || []  // Default to empty array if not provided
//     };

//     // Define the file path where the hotel data will be saved
//     const filePath = path.join(__dirname, `../../uploads/${hotelData.id}.json`);
    
//     // Write the hotel data to a file (JSON format)
//     fs.writeFileSync(filePath, JSON.stringify(hotelData));

//     // Respond with success message and the created hotel data
//     res.status(201).json({ message: 'Hotel created', data: hotelData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ Message: `Error occurred: ${error}` });
//   }
// };



//!get hotel by id
export const getHotel = (req: Request, res: Response): void => {
  try {
    const hotelId = req.params.hotelId;
    const filePath = path.join(__dirname, `../../uploads/${hotelId}.json`);
  
    
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: 'There exists no hotel against this id' });
      return;
    }
  
   
    try {
      const hotelData = fs.readFileSync(filePath, 'utf-8');
      const hotel: Hotel = JSON.parse(hotelData);
      res.status(200).json({ message: 'Hotel details retrieved successfully', data: hotel });
    } catch (error) {
      res.status(500).json({ error: 'Error reading hotel data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({Message:`Error occured for the problem ${error}`});
  }
};







//!get all hotel

export const getAllHotels = (req: Request, res: Response): void => {
  try {
    const directoryPath = path.join(__dirname, '../../uploads');
    const hotelFiles = fs.readdirSync(directoryPath);
    
    const hotels = hotelFiles.map((file) => {
      const filePath = path.join(directoryPath, file);
      const hotelData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return hotelData;
    });

    res.status(200).json({ message: 'Hotels retrieved successfully', data: hotels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving hotels' });
  }
};





//!update hotel by using id
export const updateHotel = (req: Request, res: Response): void => {
  try {
    const hotelId = req.params.hotelId;
    const filePath = path.join(__dirname, `../../uploads/${hotelId}.json`);
  
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: 'Hotel not found' });
      return;
    }
  
    try {
      // Read and parse the current hotel data
      const currentData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const updatedData: Partial<Hotel> = req.body;
  
      // Update the slug if the title is changed
      if (updatedData.title) {
        updatedData.slug = slugify(updatedData.title, { lower: true });
      }
  
      // Merge updated data with current data
      const newData = { ...currentData, ...updatedData };
  
      // Save updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(newData));
      res.status(200).json({ message: 'Hotel updated successfully', data: newData });
    } catch (error) {
      res.status(500).json({ error: 'Error updating hotel data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({Message:`Error occured for the problem ${error}`});
  }
};
