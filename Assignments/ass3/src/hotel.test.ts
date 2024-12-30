// __tests__/hotel.test.ts
import request from 'supertest';
import express from 'express';
import { HotelController } from '../src/controllers/hotelController';
import hotelRoutes from '../src/routes/hotelRoutes';
import path from 'path';
import fs from 'fs/promises';

const app = express();
app.use(express.json());
app.use('/api', hotelRoutes);

describe('Hotel API', () => {
  const testImagePath = path.join(__dirname, 'test-image.jpg');
  
  beforeAll(async () => {
    // Create test image file
    await fs.writeFile(testImagePath, 'test image content');
  });

  afterAll(async () => {
    // Cleanup test files
    await fs.unlink(testImagePath);
  });

  describe('POST /api/hotel', () => {
    it('should create a new hotel', async () => {
      const hotelData = {
        title: 'Test Hotel',
        description: 'A test hotel',
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ['wifi', 'parking'],
        host: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890'
        },
        location: {
          address: '123 Test St',
          latitude: 40.7128,
          longitude: -74.0060
        }
      };

      const response = await request(app)
        .post('/api/hotel')
        .field('data', JSON.stringify(hotelData))
        .attach('images', testImagePath);

      expect(response.status).toBe(201);
      expect(response.body.slug).toBe('test-hotel');
      expect(response.body.title).toBe(hotelData.title);
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/hotel')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('GET /api/hotel/:id', () => {
    it('should retrieve a hotel by ID', async () => {
      // First create a hotel
      const hotelData = {
        title: 'Test Hotel',
        description: 'A test hotel',
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ['wifi', 'parking'],
        host: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890'
        },
        location: {
          address: '123 Test St',
          latitude: 40.7128,
          longitude: -74.0060
        }
      };

      const createResponse = await request(app)
        .post('/api/hotel')
        .field('data', JSON.stringify(hotelData))
        .attach('images', testImagePath);

      const getResponse = await request(app)
        .get(`/api/hotel/${createResponse.body.id}`);

      expect(getResponse.status).toBe(200);
      expect(getResponse.body.title).toBe(hotelData.title);
    });

    it('should return 404 for non-existent hotel', async () => {
      const response = await request(app)
        .get('/api/hotel/non-existent-id');

      expect(response.status).toBe(404);
    });
  });

  describe('PUT /api/hotel/:id', () => {
    it('should update an existing hotel', async () => {
      // First create a hotel
      const hotelData = {
        title: 'Test Hotel',
        description: 'A test hotel',
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: ['wifi', 'parking'],
        host: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890'
        },
        location: {
          address: '123 Test St',
          latitude: 40.7128,
          longitude: -74.0060
        }
      };

      const createResponse = await request(app)
        .post('/api/hotel')
        .field('data', JSON.stringify(hotelData))
        .attach('images', testImagePath);

      const updateData = {
        ...hotelData,
        title: 'Updated Test Hotel'
      };

      const updateResponse = await request(app)
        .put(`/api/hotel/${createResponse.body.id}`)
        .field('data', JSON.stringify(updateData))
        .attach('images', testImagePath);

      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body.title).toBe(updateData.title);
      expect(updateResponse.body.slug).toBe('updated-test-hotel');
    });

    it('should return 404 for updating non-existent hotel', async () => {
      const response = await request(app)
        .put('/api/hotel/non-existent-id')
        .send({
          title: 'Updated Title'
        });

      expect(response.status).toBe(404);
    });
  });
});