require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect('mongodb+srv://chaudhary654rohit:dAEkgQfIS9hSxseM@cluster0.6anxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

async function createAdmin() {
  const admin = new Admin({
    firstName: "chaudhary",
    lastName: "rohit",
    email: "dev@gmail.com",
    password: "dev123", 
    role: "admin"
  });
  

  try {
    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdmin();
