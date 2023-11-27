import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    rentalCost: {
        oneToThreeDays: Number,
        fourToNineDays: Number,
        tenToTwentyFiveDays: Number,
        moreThanTwentySixDays: Number,
    },
    deposit: Number,
    bodyType: String,
    engineVolume: Number,
    transmissionType: String,
    fuelType: String,
    fuelConsumption: Number,
    trunkVolume: Number,
    numberOfDoors: Number,
    airConditioner: Boolean,
    carClass: String,
    reviews: [{
        _id: mongoose.Schema.Types.ObjectId,
        authorName: String,
        review: String,
        date: Date,
    }],
    images: [String],
    imgUrl: String,
    popularCar: Boolean,
    seoUrl: String,
});

const Car = mongoose.models.Car || mongoose.model("Car", CarSchema, 'Cars');

export default Car;