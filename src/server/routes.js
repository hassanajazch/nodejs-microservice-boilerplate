import app from './expressApp';
import userRoutes from '../routes/user';

app.use('/api/v1', userRoutes);

export default app;
