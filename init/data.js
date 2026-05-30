const mongoose = require("mongoose");
const ownerId =
new mongoose.Types.ObjectId(
    "6a1838f466844259211c23a9"
);

const sampleTemples = [

{
    owner:ownerId,
    name: "Somnath Temple",

    district: "Somnath",

    category: "Jyotirlinga",
   
    images: [
        {
        url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/960px-Somanath_mandir_%28cropped%29.jpg",

        filename: "somnath",
        }
    ],

    description:
    "Somnath Temple is one of the 12 Jyotirlingas of Lord Shiva and among the most sacred pilgrimage sites in India.",

    location:
    "Prabhas Patan, Gir Somnath, Gujarat",

    timings:
    "6:00 AM to 10:00 PM",

    nearestRailway:
    "Veraval Railway Station",

    nearestBusStand:
    "Somnath Bus Stand",

    nearestAirport:
    "Diu Airport",

    howToReach:
    "Reach by train via Veraval Railway Station, buses from major Gujarat cities, or flight to Diu Airport.",

    mapLink:
    "https://maps.google.com/?q=Somnath+Temple",

    latitude: 20.8880,

    longitude: 70.4012,
},

{
     owner:ownerId,
    name: "Dwarkadhish Temple",

    district: "Dwarka",

    category: "Krishna Temple",

    images:[
     {
        url:
        "https://images.pexels.com/photos/32604468/pexels-photo-32604468.jpeg?cs=srgb&dl=pexels-indu-bikash-sarker-116278202-32604468.jpg&fm=jpg",

        filename: "dwarka",
    }
     ],

    description:
    "Dwarkadhish Temple is dedicated to Lord Krishna and is one of the Char Dham pilgrimage sites.",

    location:
    "Dwarka, Gujarat",

    timings:
    "6:30 AM to 9:30 PM",

    nearestRailway:
    "Dwarka Railway Station",

    nearestBusStand:
    "Dwarka GSRTC Bus Stand",

    nearestAirport:
    "Jamnagar Airport",

    howToReach:
    "Tourists can reach Dwarka by train, bus, or via Jamnagar Airport followed by taxi service.",

    mapLink:
    "https://maps.google.com/?q=Dwarkadhish+Temple",

    latitude: 22.2442,

    longitude: 68.9685,
},

{
     owner:ownerId,
    name: "Ambaji Temple",

    district: "Banaskantha",

    category: "Shakti Peeth",

    images: [
        {
        url:
        "https://static.gujaratsamachar.com/content_image/content_image_f0487cd0-0f9b-4ea6-acd3-d3bd9e993b32.jpeg",

        filename: "ambaji",
    }
   ],

    description:
    "Ambaji Temple is a famous Shakti Peetha dedicated to Goddess Amba.",

    location:
    "Ambaji, Banaskantha, Gujarat",

    timings:
    "7:00 AM to 9:00 PM",

    nearestRailway:
    "Abu Road Railway Station",

    nearestBusStand:
    "Ambaji Bus Stand",

    nearestAirport:
    "Udaipur Airport",

    howToReach:
    "Visitors can travel via Abu Road Railway Station and local buses or taxis to Ambaji.",

    mapLink:
    "https://maps.google.com/?q=Ambaji+Temple",

    latitude: 24.3300,

    longitude: 72.8500,
},

{
     owner:ownerId,
    name: "Akshardham Temple",

    district: "Gandhinagar",

    category: "Swaminarayan Temple",

    images: [
        {
        url:
        "https://akshardham.com/gujarat/wp-content/supersized-slides/home_akshardham-004.jpg",

        filename: "akshardham",
    }
   ],

    description:
    "Akshardham Temple is a magnificent spiritual and cultural complex built by BAPS.",

    location:
    "Gandhinagar, Gujarat",

    timings:
    "9:30 AM to 7:30 PM",

    nearestRailway:
    "Gandhinagar Capital Railway Station",

    nearestBusStand:
    "Gandhinagar Bus Depot",

    nearestAirport:
    "Ahmedabad Airport",

    howToReach:
    "Akshardham Temple is easily accessible from Ahmedabad Airport and Gandhinagar Railway Station.",

    mapLink:
    "https://maps.google.com/?q=Akshardham+Gandhinagar",

    latitude: 23.2350,

    longitude: 72.6500,
},

{
     owner:ownerId,
    name: "Sun Temple Modhera",

    district: "Mehsana",

    category: "Sun Temple",

    images: [
        {
        url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Surya_mandhir.jpg/1280px-Surya_mandhir.jpg",

        filename: "modhera",
    }
  ],
   

    description:
    "The Sun Temple of Modhera is an ancient Hindu temple dedicated to Surya Dev.",

    location:
    "Modhera, Mehsana, Gujarat",

    timings:
    "7:00 AM to 6:00 PM",

    nearestRailway:
    "Mehsana Railway Station",

    nearestBusStand:
    "Modhera Bus Stand",

    nearestAirport:
    "Ahmedabad Airport",

    howToReach:
    "Travelers can reach Modhera via Mehsana Railway Station and local road transport.",

    mapLink:
    "https://maps.google.com/?q=Sun+Temple+Modhera",

    latitude: 23.5980,

    longitude: 72.1320,
},

];

module.exports = { data: sampleTemples };
