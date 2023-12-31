const mongoose = require("mongoose")

const uri = "mongodb+srv://patilshivam156:Ecommerce@cluster0.ccmkrzq.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const client = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to database")
        return client
    }
    catch (err) {
        console.log(`Error in connecting with database ${err}`)
    }
}

module.exports = connectDB