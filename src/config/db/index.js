// import mongoose vào
const mongoose = require('mongoose');

// tạo ra một cái hàm để connect đến MongoDB
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tinh_dev');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('connect failue!');
    }
}


module.exports = { connect };