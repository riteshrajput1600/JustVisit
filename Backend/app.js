const express = require('express');
const categoryRoutes = require('./routes/categoryRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const listingRoutes = require('./routes/listingRoutes');
const addListingRoutes = require('./routes/addListingRoutes');
const addReviewRoutes = require('./routes/addReviewRoutes');
const detailRoutes = require('./routes/detailRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const { sequelize } = require('./models/registerModel');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const searchRoutes = require('./routes/searchRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const resultRoutes = require('./routes/ResultRoutes')
const os = require('os');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON requests
app.use(express.json());

// Use category, register, login, and addlisting routes
app.use('/api', categoryRoutes);
app.use('/api', loginRoutes);
app.use('/api', addListingRoutes);
app.use('/api', listingRoutes);
app.use('/api', resultRoutes);
app.use('/api', detailRoutes);
app.use('/api', registerRoutes);
app.use('/api', galleryRoutes);
app.use('/api', addReviewRoutes);
app.use('/api', subcategoryRoutes);
app.use('/api', searchRoutes);
app.use('/api', enquiryRoutes);

// Start the server
sequelize.sync().then(() => {
  console.log('Database and tables created!');

  const server = app.listen(port, () => {
    const address = server.address();
    const host = address.address === '::' ? 'localhost' : address.address;
    const port = address.port;

    // Print the server's IP address and port
    console.log(`Server is running at http://${host}:${port}`);
    console.log(`Server IP address: ${getIPAddress()}:${port}`);
  });
}).catch((err) => console.error('Error syncing database:', err));

// Function to get the IP address of the server
function getIPAddress() {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress;
  // Loop through network interfaces and find the one that is not internal and has an IPv4 address
  outerLoop: for (const interfaceKey in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceKey];
    for (const interface of interfaces) {
      if (!interface.internal && interface.family === 'IPv4') {
        ipAddress = interface.address;
        break outerLoop;
      }
    }
  }

  return ipAddress || '127.0.0.1'; // Default to localhost if no IP address is found
}
