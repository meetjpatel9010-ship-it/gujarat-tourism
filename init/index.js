const mongoose = require("mongoose");

const Temple = require("../models/temple");

const initData = require("./data");
const ownerId = "6a1838f466844259211c23a9";

const data = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
}));
/* MongoDB Connection */

async function main() {

    await mongoose.connect(
        "mongodb+srv://meetjpatel9010_db_user:bZxFjKK9Nv4dKTLH@cluster0.db5wgms.mongodb.net/gujaratTourism?retryWrites=true&w=majority&appName=Cluster0"
    );

}

/* Initialize Database */

const initDB = async () => {

    await Temple.deleteMany({});

    await Temple.insertMany(
        initData.data
    );

    console.log(
        "Sample Data Added Successfully"
    );

    mongoose.connection.close();

};

/* Connect MongoDB */

main()
.then(() => {

    console.log(
        "MongoDB Connected"
    );

    initDB();

})
.catch((err) => {

    console.log(err);

});