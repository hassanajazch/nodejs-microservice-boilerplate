const app = require('./expressApp');
const userRoutes = require('../routes/user');

app.use('/api/v1', userRoutes);

module.exports = app;
