const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const templeSchema = new Schema({

    name: String,

    district: String,

    images: [
        {
       url:String,
       filename:String,
        }
    ],

    description: String,

    location: String,
latitude: Number,

longitude: Number,
    timings: String,
    nearestRailway: String,

nearestBusStand: String,

nearestAirport: String,

howToReach: String,

mapLink: String,
    owner: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "User",

    },
    reviews: [
        {
            type: Schema.Types.ObjectId,

            ref: "Review",
        }
    ],
category: {
    type: String,
    enum: [
        "Jyotirlinga",

        "Shakti Peeth",

        "Krishna Temple",

        "Shiva Temple",

        "Swaminarayan Temple",

        "Sun Temple"

    ],
},
});
const mongoosePaginate =
require("mongoose-paginate-v2");

templeSchema.plugin(
    mongoosePaginate
);

module.exports =
mongoose.model("Temple", templeSchema);