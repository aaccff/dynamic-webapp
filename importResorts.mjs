import mongoose from 'mongoose';
import Resort from './models/Resort.mjs';
import resorts from './resorts.json' assert { type: 'json' };

mongoose.connect('mongodb://localhost:27017/resortdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importData = async () => {
  try {
    await Resort.insertMany(resorts);
    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
