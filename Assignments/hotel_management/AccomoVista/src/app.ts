import express from 'express';
import hotelRoutes from './routes/hotelRoutes';
import uploadRoutes from './routes/uploadRoutes';

const app = express();
app.use(express.json());
app.use('/api', hotelRoutes);
app.use('/api', uploadRoutes);
app.use('/uploads', express.static('public/uploads'));


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ error: err.message });
});

export default app;



