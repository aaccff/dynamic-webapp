import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import resortRoutes from './routes/resorts.mjs';
import authRoutes from './routes/auth.mjs';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/resortdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/resorts', resortRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
