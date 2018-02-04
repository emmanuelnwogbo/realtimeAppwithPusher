const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://emmanuel:08033426880@ds225038.mlab.com:25038/pusherpollapp')
.then(() => {
  console.log('MongoDB Connected')
}).catch(err => console.log(err));