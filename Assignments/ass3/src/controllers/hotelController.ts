import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import slugify from 'slugify';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Hotel } from '../types/hotel';

const DATA_FILE = path.join(__dirname, '../data/hotels.json');

export class HotelController {
  private async readHotels(): Promise<Hotel[]> {
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private async writeHotels(hotels: Hotel[]): Promise<void> {
    await fs.writeFile(DATA_FILE, JSON.stringify(hotels, null, 2));
  }

  async createHotel(req: Request, res: Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      const hotels = await this.readHotels();
      const hotelData: Hotel = {
        ...req.body,
        id: uuidv4(),
        slug: slugify(req.body.title, { lower: true }),
        rooms: []
      };

      hotels.push(hotelData);
      await this.writeHotels(hotels);

      res.status(201).json(hotelData);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getHotel(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const hotels = await this.readHotels();
      const hotel = hotels.find(h => h.id === id || h.slug === id);

      if (!hotel) {
        res.status(404).json({ error: 'Hotel not found' });
        return;
      }

      res.json(hotel);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateHotel(req: Request, res: Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      const { id } = req.params;
      const hotels = await this.readHotels();
      const index = hotels.findIndex(h => h.id === id);

      if (index === -1) {
        res.status(404).json({ error: 'Hotel not found' });
        return;
      }

      const updatedHotel = {
        ...hotels[index],
        ...req.body,
        slug: slugify(req.body.title || hotels[index].title, { lower: true })
      };

      hotels[index] = updatedHotel;
      await this.writeHotels(hotels);

      res.json(updatedHotel);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}