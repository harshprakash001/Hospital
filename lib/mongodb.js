// import mongoose from 'mongoose';

// const connectMongo = async () => {
//   if (mongoose.connections[0].readyState) {
//     // Already connected
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// export default connectMongo;
