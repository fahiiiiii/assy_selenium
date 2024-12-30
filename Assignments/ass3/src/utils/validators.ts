import { body } from 'express-validator';

export const hotelValidators = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('guestCount').isInt({ min: 1 }).withMessage('Guest count must be at least 1'),
  body('bedroomCount').isInt({ min: 1 }).withMessage('Bedroom count must be at least 1'),
  body('bathroomCount').isInt({ min: 1 }).withMessage('Bathroom count must be at least 1'),
  body('amenities').isArray().withMessage('Amenities must be an array'),
  body('host.name').notEmpty().withMessage('Host name is required'),
  body('host.email').isEmail().withMessage('Valid host email is required'),
  body('host.phone').notEmpty().withMessage('Host phone is required'),
  body('location.address').notEmpty().withMessage('Address is required'),
  body('location.latitude').isFloat().withMessage('Valid latitude is required'),
  body('location.longitude').isFloat().withMessage('Valid longitude is required'),
];

export const roomValidators = [
  body('roomTitle').notEmpty().withMessage('Room title is required'),
  body('bedroomCount').isInt({ min: 1 }).withMessage('Bedroom count must be at least 1'),
];