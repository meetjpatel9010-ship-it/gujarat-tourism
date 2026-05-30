const mongoose = require("mongoose");

const passportLocalMongoose =
require("passport-local-mongoose").default;

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {

        type: String,

        required: true,

        unique: true,

    },
favorites: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple",
    },
],
});

userSchema.plugin(
    passportLocalMongoose
);

module.exports =
mongoose.model("User", userSchema);