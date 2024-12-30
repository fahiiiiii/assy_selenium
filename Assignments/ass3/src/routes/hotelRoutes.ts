import { Router } from 'express';
import { HotelController } from '../controllers/hotelController';
import { hotelValidators } from '../utils/validators';
import multer from 'multer';
const path = require('path');

const router = Router();
const hotelController = new HotelController();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './../../public/uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      const fileName = file.originalname.split('.')[0] + '-' + uniqueSuffix + fileExtension;
      cb(null, fileName);
    }
  });
  
  const upload = multer({ storage: storage });
router.post("/uploads",upload.single("file"),(req,res)=>{
    res.json({Message:"Your file uploaded successfully"})
})
// const storage = multer.diskStorage({
//     destination: './uploads/images',
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
//   });
  
//   const upload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//       if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//       } else {
//         cb(null, false);
//       }
//     }
//   });
router.post('/hotel', upload.array('images'), hotelValidators, hotelController.createHotel.bind(hotelController));
router.get('/hotel/:id', hotelController.getHotel.bind(hotelController));
// router.put('/hotel/:id', upload.array('images'), hotelValidators, hotelController.updateHotel.bind(hotelController));

export default router;