const mongoose = require('mongoose');
const uri = process.env.DB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successfully');
})

function connect() {
    return new Promise((resolve, reject) => {
            mongoose.connect(uri,
                { useNewUrlParser: true, useCreateIndex: true })
                .then((res, err) => {
                    if (err) return reject(err);
                    resolve();
                })
    });
}

function close() {
    return mongoose.disconnect();
}

function connectTest() {
    const Mockgoose = require('mockgoose').Mockgoose;
    const mockgoose = new Mockgoose(mongoose);

    mockgoose.prepareStorage()
        .then(() => {
            mongoose.connect(uri,
                { useNewUrlParser: true, useCreateIndex: true })
                .then((res, err) => {
                    if (err) return reject(err);
                    resolve();
                })
        })
}

module.exports = { connect, close, connectTest };