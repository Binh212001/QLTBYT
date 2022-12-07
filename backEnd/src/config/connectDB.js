const { default: mongoose } = require('mongoose');

const connectDb = async (app) => {
  mongoose
    .connect(
      'mongodb+srv://admin:admin123@qltbyt.phiktrn.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then(() => app.listen(4000, () => console.log(`Listening at Port 4000`)))
    .catch((error) => console.log(`${error} did not connect`));
};

module.exports = { connectDb };
