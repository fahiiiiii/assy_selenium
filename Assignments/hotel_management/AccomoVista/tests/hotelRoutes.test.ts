import request from 'supertest';
import app from './../src/app';

//!unit testing of create api
describe('POST /hotel', () => {
  it('should create a hotel', async () => {
    const res = await request(app).post('/api/hotel').send({
      title: 'Sample Hotel',
      description: 'A beautiful place to stay',
      guestCount: 4,
      bedroomCount: 2,
      bathroomCount: 1,
      amenities: ['WiFi', 'Parking'],
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Hotel created');
    expect(res.body.data.title).toBe('Sample Hotel');
  });
});


//!unit testing of get api
describe('GET /hotel/:hotelId', () => {
  it('should retrieve hotel details successfully', async () => {
    const hotelId = 'sample-hotel-id'; // Use an actual ID that exists in your setup

    const res = await request(app).get(`/api/hotel/${hotelId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hotel details retrieved successfully');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('title');
  });

  it('should return 404 if hotel does not exist', async () => {
    const nonExistentId = 'non-existent-id';

    const res = await request(app).get(`/api/hotel/${nonExistentId}`);
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toBe('There exists no hotel against this id');
  });
});




//!unit testing of get all hotels api

import fs from 'fs';
import path from 'path';

jest.mock('fs');

describe('GET /hotels', () => {
  const directoryPath = path.join(__dirname, '../../uploads');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve all hotels successfully', async () => {
    const mockHotels = [
      { id: 'hotel1', title: 'Hotel One', description: 'A nice hotel' },
      { id: 'hotel2', title: 'Hotel Two', description: 'Another nice hotel' },
    ];

    // Mock file system operations
    (fs.readdirSync as jest.Mock).mockReturnValue(['hotel1.json', 'hotel2.json']);
    (fs.readFileSync as jest.Mock)
      .mockReturnValueOnce(JSON.stringify(mockHotels[0]))
      .mockReturnValueOnce(JSON.stringify(mockHotels[1]));

    const res = await request(app).get('/api/hotels');

    expect(fs.readdirSync).toHaveBeenCalledWith(directoryPath);
    expect(fs.readFileSync).toHaveBeenCalledTimes(2);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hotels retrieved successfully');
    expect(res.body.data).toEqual(mockHotels);
  });

  it('should return an empty list if no hotels are found', async () => {
    // Mock file system to return an empty directory
    (fs.readdirSync as jest.Mock).mockReturnValue([]);

    const res = await request(app).get('/api/hotels');

    expect(fs.readdirSync).toHaveBeenCalledWith(directoryPath);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hotels retrieved successfully');
    expect(res.body.data).toEqual([]);
  });

  it('should handle errors when retrieving hotels', async () => {
    // Mock file system to throw an error
    (fs.readdirSync as jest.Mock).mockImplementation(() => {
      throw new Error('File system error');
    });

    const res = await request(app).get('/api/hotels');

    expect(fs.readdirSync).toHaveBeenCalledWith(directoryPath);
    expect(res.statusCode).toEqual(500);
    expect(res.body.error).toBe('Error retrieving hotels');
  });
});


//!!unit testing of update api
describe('PUT /hotel/:hotelId', () => {
  it('should update hotel details successfully', async () => {
    const hotelId = 'sample-hotel-id'; // Use an actual ID that exists in your setup

    const res = await request(app).put(`/api/hotel/${hotelId}`).send({
      title: 'Updated Hotel Title',
      description: 'Updated description',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hotel updated successfully');
    expect(res.body.data.title).toBe('Updated Hotel Title');
  });

  it('should return 404 if hotel does not exist', async () => {
    const nonExistentId = 'non-existent-id';

    const res = await request(app).put(`/api/hotel/${nonExistentId}`).send({
      title: 'Another Title',
    });
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toBe('Hotel not found');
  });
});









// import fs from 'fs';
// import path from 'path';
// import { describe, it, beforeAll, afterAll, expect } from '@jest/globals';
 
// const hotelId = 'sample-hotel-id';
// const filePath = path.join(__dirname, `../../uploads/${hotelId}.json`);
 
// describe('PUT /hotel/:hotelId', () => {
//   beforeAll(() => {
//     // Create a sample hotel file before tests
//     const initialData = {
//       title: 'Original Hotel Title',
//       description: 'Original description',
//       guestCount: 3,
//       bedroomCount: 2,
//       bathroomCount: 1,
//       amenities: ['WiFi']
//     };
//     fs.writeFileSync(filePath, JSON.stringify(initialData));
//   });
 
//   afterAll(() => {
//     // Remove the sample hotel file after tests
//     if (fs.existsSync(filePath)) {
//       fs.unlinkSync(filePath);
//     }
//   });
 
//   it('should update hotel details successfully', async () => {
//     const res = await request(app).put(`/api/hotel/${hotelId}`).send({
//       title: 'Updated Hotel Title',
//       description: 'Updated description',
//     });
 
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.message).toBe('Hotel updated successfully');
//     expect(res.body.data.title).toBe('Updated Hotel Title');
//   });
 
//   it('should return 404 if hotel does not exist', async () => {
//     const nonExistentId = 'non-existent-id';
 
//     const res = await request(app).put(`/api/hotel/${nonExistentId}`).send({
//       title: 'Another Title',
//     });
//     expect(res.statusCode).toEqual(404);
//     expect(res.body.error).toBe('Hotel not found');
//   });
// });




// import mockFs from 'jest-mock-fs';

// beforeAll(() => {
//   mockFs({
//     'uploads/sample-hotel-id.json': JSON.stringify({
//       title: 'Sample Hotel',
//       description: 'Sample Description',
//       slug: 'sample-hotel'
//     }),
//     'uploads/non-existent-id.json': ''  // mock for non-existent hotel
//   });
// });

// afterAll(() => {
//   mockFs.restore();
// });

// describe('PUT /hotel/:hotelId', () => {
//   it('should update hotel details successfully', async () => {
//     const hotelId = 'sample-hotel-id'; 

//     const res = await request(app).put(`/api/hotel/${hotelId}`).send({
//       title: 'Updated Hotel Title',
//       description: 'Updated description',
//     });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.message).toBe('Hotel updated successfully');
//     expect(res.body.data.title).toBe('Updated Hotel Title');
//   });

//   it('should return 404 if hotel does not exist', async () => {
//     const nonExistentId = 'non-existent-id';

//     const res = await request(app).put(`/api/hotel/${nonExistentId}`).send({
//       title: 'Another Title',
//     });
//     expect(res.statusCode).toEqual(404);
//     expect(res.body.error).toBe('Hotel not found');
//   });
// });
