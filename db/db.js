const mongoose = require('mongoose')

const ConnectToDB = () =>
    mongoose
        .connect(
            'mongodb+srv://zeemrx0:zeemrx0@todoapp-x4feh.mongodb.net/<dbname>?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .catch((e) => {
            console.error('Cannot connect to MongoDB', e.message)
        })

module.exports = ConnectToDB
