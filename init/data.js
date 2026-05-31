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
{
     owner:ownerId,
    name: "Umiya Mata Temple",
    district: "Mehsana",
    category: "Shakti Peeth",
    images: [
        {
        url: "https://temple.yatradham.org/public/Product/temple/temple_ZJcB59Xs_202507021738330.webp",
        filename: "umiyamata",
    }
],
    description: "Umiya Mata Temple in Unjha is the Kuldevi of Kadva Patidar community and a very famous pilgrimage site in Gujarat.",
    location: "Unjha, Mehsana, Gujarat",
    timings: "6:00 AM - 9:00 PM",
    nearestRailway: "Unjha Railway Station",
    nearestBusStand: "Unjha Bus Stand",
    nearestAirport: "Ahmedabad Airport",
    howToReach: "Easily reachable via Unjha railway station and Mehsana highway.",
    mapLink: "https://maps.google.com/?q=Umiya+Mata+Temple+Unjha",
    latitude: 23.8060,
    longitude: 72.3950,
},

{
     owner:ownerId,
    name: "Shree Kashtbhanjan Dev Hanumanji (Sarangpur Hanuman Dada)",
    district: "Botad",
    category: "Hanuman Temple",
    images:[
  {
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUWGRkWFxcVFRYXFxcXFR0YGBgYGBUYHSggGRolHRYZITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslICUvLy0uLS0rLS0tLS0tNzUtLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMMBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEDBAUCB//EAEkQAAIBAwMCAwUEBgYIBAcAAAECEQADIQQSMQVBBiJREzJhcYFCkaGxFCMzUsHwYnKCkrLRBxUkU8LS4fFDc5OiFlRjZIPi8v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAA3EQACAgECAwYEAwYHAAAAAAAAAQIRAxIhBDFBEyIyUWFxBTOBwbHR8BRykaHh8SM0QlJigtL/2gAMAwEAAhEDEQA/APYaVPSo4uNSp6arINT0qVQgqVKlUIKlSpVCCpUqeqIIVm9P2fpF/ZGNm4gmNx3ggrMAjZzE81c1d4qvljcx2pMxuPEx2EEn4A1ndB6X+j7w1wuW2gsQBJl2xnkm5H0oU/FHYYgo9lJt77UvPzf0NelFPT0QCcE0q7K0+ypZZGKW6pNlLZVWQiLUhUhSl7OpZDgV0LhpFafbULJEanJqMU4ms0Sx6QanpiKhDkPzSBrpRSirIVup/sm/s/4hVHwof9nj0e4P/cav9RH6p/l/EVneEz+quD0vP+O1v40o/wDMr937jC+Q/f7GzTV1SpoXI4pUqVaKGimiuqarsoalT01WUKKUUop6hBopRSpVCD0qVKoQQrK61dKwREm7a+1swM8kGRV/Wapbal27dhE5MYBIoP8AEHiGw5CqLVwBlaXcqccgWyJjAkYmlOLyJQrqM8NjcpXWwbmlWZ0vrdq8qncqueUk+UjkSQMeh71D4m6wbFtVt+a9dJW2AJOPeeO8D8SKO8kdOoziwZMmRY0t2Ne11u5rLdkAMbclyYMHa5Cj+kCASe3HrG7QH4J6TqLd72162ybyffKzG14lZmfN39TRj07We0TeV2ncwjEjaxA4J7RQcU7bvm/6DHG4YYp6cbtJLe+vUuU4rhWrsUZiY8UttPSrJobbSAp6VSyCilFKlNQgqZqU0zH+fx/hUJY9NSJpVZRX6j+yuf1W/AVl+FTi+PS8fxRP8q1df+yuf1G/I1j+Fm8+pH9NT94I/wCGlJ7cTH2f2GI/Il7o34p65mlTm4sR01PTVsyKnpqeKhBUqfbSK1LIc0qelUKGpU9KKhY1Qa7WJaRnY+6JgESe3erBgCTgDJJ4AHeaAPFnVlNwP7RVQeRN5gbjPmIgkcSAMmJPu0HNl0R9QuDF2kq6FTq/VzqGkuu0TtEoMEyJDFCDx9wngRRWTgNPwDsfwTUN+VVLN7TtgNpLn/5kn7ilWl0qtgWZ/wDLu2z+TCuZKTbtnViklSIrliWkrzkgp9ruc2W55yRzW74e60lm4WvHe7Qvtrt1GdE7gSA23JMAelYzdPQf+FfU/AFvyZq5s6V2cIj6kMeBtZR9TsgD5mrhPS7Rclqi49Georq0uLvtujDa8NO5JEcxyB3qj4ZUi0wIQQ7YQEQDHOTn0+EVj6DQuloI152lpw2Z4Of3R6d67saf2Vw3Ldx9y8hjuQhvVcTx60VZ5PKpVt7+dfkKvh0oOKYXIakBqn0/XpdwMPGR/EeorRCU9rTViWlp0zinrs1GBFVZdD0q5I9KbdVkOqVR7qRatUZO65Jz/P8APrXBeuJ/n+fnV6TOomL1yXriaataSrG1LeR/6rfkawvDR/X6n4i0f8dbt33WHwP5UO+HG/2i78UQ/d//AFSWbbicf/YZx74J/QJqVczSp2hWzulFPIpiaxZuhCpFNRbqW+oyInpRUPtaXtazTN2jtlpAD1qKaaavczSJwBTSKgZwASSABkk4AA7k1U1HVbQUlXVj2Azz8vvrMpKO8majFy2SIvE+sFuzzG7BPPl747jseMTXnGn0U7tVqyAxBCIfsBhwFHvXCIk/wAAJtVea4ZJDHk7uABIUZ4GJ+prK6jCuGcyyqWVeBkMPKYwZ9fQVzMmXtJOjp4sXZrcHTZ0rA/rLeM5MAccyMCT+Vcf6o0zz+xPyK/kTXV68BO5LgJgfsy2JnMAelRJYW6zKLZbeWgbDMEk5JMD51EwpMnQV+zMf0XI/AH+Yo16B04aexAcs7QWLOWgngCSYAB+/dWBo+iafT3GvEIb87tzYW1uOCT2nj1OYgSa59g7HCadp/dvMP41lyb5FVQX3NUgYeZYXjI9CP8qrfp6yfMB9fSKG/ZXl/wDAb+zen/EK5DXf9zqB/aRv8qpNop0zetdRAyrCVMggg4n+TRlo9b7RFcd+QOxGDXlXtSxAK3pwADaVs8Dhq37HUG04ZLOo3bZLAoCA6iWAJ4WFxEiRE03gyVzQrmxXy5h1NPuoJ1/iq9ZYA3dO4YSrbWAYEkSCDGCCME8UQ+HOqjU2i8oWUkNsnaPTJ+FNRyxk9PUVlilFauhrBzS3GuDTFqJQOzvdS3VHNR3r4UAmckLj+kY+6rdJWyLcsUy8fz3rhjSmrMnVKmFPVlDgULeHT/tR+Nifxt0VLQr0bGsH/lFfuK/5UlxG2fE/VjWH5WRewU0qVKnbFKERTVPSNA1h9JXmluqc1GUrSkVRHNKa72U22rsqjndS3V2PlXUfCpZKBzxP1o2bbA2b5U4320DDP3gA8eaOaBB4wSARY1JB4LGzbBkgcj4kD6ivUOu2idPcAgEr34+uRj5EV41r+hXNQ9sMgt2PZiSAS8tACKs5aQog4hJJxFIcSoufeOhwzejZFlfGzvhNOueC+qf0Y8YjCsfoaq9b6xfS4m+wgLQALbMrEE99xKsZOJXvU+k8D6dI3A3ZAYMzm3g7hG1VYTkGZ5UERmrPX9JZulS7iSiOjFlBUtmQzCRwvG3g4zQU4KXd5Bnqa3IdB1e0/LgZ2AmV83pKmDwfT5VqHqlqxbDA+Zz5Qo3XH9BbVpxj328oPG41i6CdoBuWlYGT+zWSYO4jAJJra6P0+2pN1233HbbuDbnOJADSQigenwAjvU6Nxsp2el3dS4a+BtUytiT7O2f3rrcvcj6njAiqut8MoCNy2obIlDkSR+8e0H60Uay8QgFsi2N6L7uACYYAThj2OaHhd1Auge3O0yfNYQGBny4yOxMdqqLZJ0Z69CUe7tH9VnX+FOelXZAD3AZgbdS4k+kYrZS5ubbOTxJYDgzjdgYmn0Nze7bR5QNoJBJJYhSY5AgtHfH0replKKbSH6fomtrua7dbgZdmkjJCZwBE7j6dpqZ74nKknsSzsfnuAgVBrLhditowQN5ESBbJYKD2ElWJAMmBXFtZADIwcyQoDMSByQiDcB8/x71zCuahsl+vpX65Fty7KfZvBA3Qyq4HY8xuxExBwPSKJfBGm1WwXbt1BbJbbat29oPKli244ntHaaDxb2ncu4QRMdiO/Mg88+lFfg3WkObROHBcDEC4kbgAOxUg/wBn60bC1rSYDiFrxuUegXNXJrN631ldOF8rOzkhFUMZgSeAeB/mYGaG+n+M3Lm21m4xkEwjKyC40LyCIJwpJAPFOvLGLo5axSktSDG7fRPfdV/rMB+dD3U+oC7iSFEkAEjPAJI75n4fni+KvEJS5FzTatdogYsbSPUOTEfEfWsHU+LCqM62HIRgje01HsgDBPKJng0lxGTJN6Y8h3h8MIrVLmei9F6sbj+yeN4G4ep7EH1OZ+h9K24rxXqfXrlu4pextMAyt13IGYPnxzPBXjmvTvCPiKzq7K7LqtcVR7RZO8EY3EMAc8zHemeHyNxSkLcRi0u48jdpV0qTTi18aO5pC6i2crQnoGjW2/iLg+4Mf4UYrbFBi41tn/zLy/jdFI8VNdpjfqN4IPRP2C2lXfsjSp3WhXQyWaYtXE0poNBbH3UxNKaVWQQpXGABJwAJJ+ApUOdf125vZyNoMEHuVyxP5ffQ8mRQVhMeNzdGl0jqn6QpZVgAspksCCCYG0r3WDPxI7Gr7XIBJGACTB7D5xXnml6v7C4LigAEw8KBuXkg/HJii/xH1JbOnZyygHyyzBQQ8jBJAnvk9qkMlwt9DWTFU0l1KPVerG55UEJjJIBOMgiex+NYq21AXdcRY28sDJVWB9JJLegrBbq6GWXRFxzuL29pB+1IJBB9adepXxO3QW1CgEk3Ox4Ji1x9a509U3cmPwjGKpG012zBHtkMrt+QkmIBzzH0+NV9XftLaO0+6oAItkgBYAyfhiqdzqGuExZ06QATPtGweOCPuqr1HXdQW3cYvpxtAkKhzvIXlnMHM1mMd+Zp8jMtaexc1AunazEe8HAGIgFWGRW7Y1tpUEOqEEyUXAJgHC4UmB8YFAF/q7C5NzSWnYA+ZZWRMTtgg1u9L6rrzbJUWLaA4UqT2nEsJ+J9aZlj82BUwgbX24xqLczIkN2z3j+RVBS+7ct3Tsc5O75R72PpUK9V1+AU07T/AECPv82KZur6mJbS2GzHBH8DUUK5Mmo0haJUjdbyCuHHBgkD7ornTC0iEtcRWJAEvIhZyNuATPNY+o6ww9/p9ogYMMfw8lddH6rqSHFrTWbdsEAhgzFmIJmcDgREYx86pwfmWpGpZuWtzkXbRLBVbzH3U3wMgAftHz8aJ/DF9CLgt7S+4SQ6ljbVRHrADFvlj1oLbqd+CTpLDQYxuGfxri3r7huLGiCvuChrd57ZUsY95RIHr8K3B6XZiXeQa+I7MhGJ/WElZnbuSJz/AFT/AIqyemXms3UuC27lT9llgyCp9Twx70OX+rh23XtLddgOXvFyB6ebj5VH/rTTf/J3/wCy6f8AN8auW8tSJFtRavmeia/xJpna2d1wBDc3AoQfMjp8wZI++hzpvXbCm6bl1vP7ALhtwFl90REgQWPzn1rC0fWbBA26m9aHZbiqSPhKgiri9Rsc/p1n+2lsfmK255Ltgo44JUGfXNVpdRcsA3la0Gb2ikeUjBIYMuQeI/61gN4QtX+otYZXOiSyLtu2Lh2C42wKUgzshmAB4EgYxWemttnjW6NvhCfwNWh1FwZB9uRCzYur7sGBtOQo9JjOKrtXdtdS+z2pPoZ/i/pn+0wtyPZbxDliYDNGc4ISPpxXqHhZduk042Bf1SYX+qMx6nk/EmvOepOTDXLNxVIgti4MknMGR8TRr4L6sLtjZKk2xAIadyknMdo/iOK3w76GOIWwSLqDu27GAidx27T8BDTPzFSb6qW9SCSPp/P8+lI38EiJH8P+1NUhS2XFegzWvt1lk/8A3DD++7f81a2o1QJ7+WG9DtPM/QHHwoY65eKvbc5K6hTjP21OPvpDi1Tg/wDkN8PupL0PR99NWfY1ICgMZPeJ+7B7cUqc0oW1MuTSmuJp5qFHYNZnV+siydu0EwDLMFUTIA9SccfEVoGYxz2nifjQB4iTWnUPtaxawD7S2he7G08F8D3SOPrQc8nGOwfBBTlTNLW9YvMpYsQsdv1VuTgS7eYgkjiaDt12Pdun+reRh9x5q1f8PK0tfe5fYf7xyQDA4T3RyePShE9LT7OPkSKSTUubs6Cjp5IIjaJ961e+e1T/AITUPW9fe1LabRs7lAdx3JtKqgIzGSdobme31wH0RHFy4PlcYfxrY8J7zdI9pcfhQGckEsZmDkEbYn0JxWlsnTKq2rQX2UAG0WhtwBDscLECCRgQMVJeHlaIViCBAthgYgE77nwHp860bWkXG8AtG49wAPSeT864uLb27to5kCBEKYiPjB++l3GzbkZdjUMVzsU9x5F4xMwwOAIyeKh6vcPsLksDgcvaI5HolaF2zbUtsVVPIKqoJ59BmDJzWZ1Ek6a4faGQB9lPtMB6fyRW0qaKu0Al2yGue6P7IMf4qJtDeFu0AHS3uJJBe2hMGMh1Y9vuihn2LG5PlOIkj/KrnWwwSzJEQ0AAADzQfifrTVapJAJPTFujfGsn/wASwf7aN+CoKffP+5PwCT/xDtQUBThKL2HqA/aPQLrqyD+rB+SR69/aVa0KbbYhEUkkndziQCMnH3UDlB6UWeG0d7cbwoUCAEB5Ldz3wKFkx6a3DYsuu1RauITjYkfBJ/iKvdM0OQ7JwfKPZOfMMgxuz3/E1sdMsIqgDzPO3cFjPLQYgYmB8Pia0FcBj/RH5/8Aalpd7YNyAzX6GCSlpiD6W7yD7zKx9R8qqqvPl+H7S4T8sIaNRqPIT33GOcH+fzql1BkuATIJ4YEgg5jI5GOKJGOxhsBf0W0p2zEY8xU/eDB79xU1vR2T3Bz+4T+RzVTrOtdLjLMNCmZ3RzwWEmfjxFUF6tf7XD9y/wCVMLG2rASyRi6NwdJsn7M5n9lcz+FDur6TcW8yi5cCyWUI7qArEwIkRHH0qyvVrvcq3zUVWv6ks28qgMAYG0fh3q1jkinlgy+nTLqqHS9dDDvvZhn1Ek8fSijwLe1PtbsrYkKu+4RtdlaSCNqkTxPujzDnth2LqlYET28+4z/RDCJrf6Arqy+VhKhYKkDAhCW3MYPmGcZ45rMJVJWayRtOgm0uoeWIgSwye5IwfUZBH0+FalpSSc5mOPTn5+s/ChtLpZ1uqvlko+BKMklSwHcg9vn3ra6WnkIcmAzYYiD5iJ+f5ffTcWKSRTv6g7Q6+V7flI4xyGWcnPb+ke3I31m8Hs7lMD26xzj9nx3gHj4AUS9V0hLDbJDZBiSzfuTx+6ePsHtQf1UbdJdI4Dl4iIBCsBSXGX3f3kNcNTv2DG8wDEb7eP3i8/XbiaVd6edoCXFgSMtyQYY8dzJ+tKmxWwjmnmuJpTWjJIDQh17Wp7dpIkQsTJwI9wAnue3ei0GhLqwb29wifeHGBwvPH8xSvF+Be41wnjfsZ+v1DexuFUYeRskBBwc+fM5PagM3j3U/T2X8Io56oP1F3j3GHryCOw+I780G6FVLZEwJg7s8DgH44+MTik8fIfZHpku3DFtTIzkKsehB3D07UU+GLD2me5ePmgbCWDQMZmTB/wCtSeHtBcUOVspbBIy4dmOM++QYGY4wa2Bpr+IZB6fq/wCG7iqlN8kUq5kFzXP9ksJxkpGAce7VcPdIgkxHaOP/AE60f0bUf71fSRb7/wB7NI6K9/vm+iqI/Csd4vYwuo3GTzMXyYny+knGzjP4Vj3tcNrqXEMIAzM7g3oPQ0T9W0l/2RAuOciTIwBPAC5EkfdQvqdHqhkFT9In6g0xjVrcDJ09jLskb/5+NTeITiz/AFD/AIjWdd9slws1qJnzBiRP1Pzq5qHuOiNsXaFAUEbo++fnRV3ZJmZd+DiZwrsGrDdNutDAhQQG2gKYBzEkHion6fe/fH3J+WymO1iK9hIjY0T+Dbsh/gVH90tI+eaFXsXRy094CpPygLM0Y+D9LqBZDOi2pbd5zuO2QRGYtiPT7u1BzSuOwbDBxluWur9RCXAd+QMIXIkkkZgCOZmO3es+1rnx+tfOCfaNPbmGz3q0nR7j83FA7Bijz8ZOZPJrv/4WnvZPzt2zQViVUOriq6fz/oQJrmj37o+G4n8Z+f3VymqfElgMdpgZyfiMYFTnwljjT/8AoLTDwkw4Wx/6MfkanZrz/H8zX7Uusfw/8mbfsJcbcyHcQJLAiO8YOYrL61bQbWUETIO4knHY5/HuCD3ooPhW5Hu2vucfxqMeHLysCdPZuDPvM/OI5kRzntgwa3B6Hd/r+ILNOOSNKNP6fZIClb+furljVzrmme3fuL7IdiNpCAkhSYWCAJngx+Qz1vpHm8vbLCPwE02pJqzmODToKul6oYDcZgfGDH40VWepoNuDAWD5W+Hw+BrzvSX7Z5uD/wB5/nmtrRvbx5t3ri59/wAaTlsOrcKv9Z29yHcAQwPxJUEDy95BOPWKItJZ9iq8mFAYAYMe+20DuScfLigLUJaKjaxQkjPs2yDiJJH5+ta/QvEdy4RbuNbKxhw2QRxIOSe/zFGwZU1TAZsb5oLX1KlIzkSDtYjBBBBAzBjH+YoD8QgnTasEZDEwOPMJBHwKkHPrW2utkh1VPZm77FfPLg79oO0LESJiZg81S8SWCE1CnkpbafXDr+SAfSscc/8ADT9UThfG16Mn0V5PZruVWMSWNvfunM7ozP4cdqVXej9Vs/o9ndz7NJz/AER6GKamkvUBfoFlMzAAk8DNB3V/GZtXSlv2VxcjlgVIkCSJB/yHrxTXx2Wm29pYhgbisSMqduCPWAfn24q9SMG8vjjQf78j52r3/JWfd1+9jcRbZDmVaWJIPBgqDGRiRXmn6HeAA9i4J4lHE8xzjvXoHSRFi0NtxvIoHuLOJ4ZpAxS3F+FDfCeJkXiK9d/R7k3AMDCov7wEGS2KENL1rUWhFtkQwZbYCTOB8oxEfOinxE7HT3Atse8qwztJO5cBQsZOOaB7ttgQClsSY98se/osdqWxVQ3Mt67q/UfZm6NW20GDC2oHPbZMzt49c1Q03U+pPkaq52/d7/Idp5+NW7JX9GuKSP2ghdhOSFEhiMcfgR3qn1BnGndbLFQgFwuDtO8FWCjIPG48QdtFj5UgUvMqanr+oDBG1t0k7Y2tIO6NpVhA78yIir2l0+rfa36Xfe2WAlb93aRu2mCDng8enxoP0+mEOxHu/mf5/Gtbwb1RkvENJtHYrd9oXdtAJB2rLHA/zo04bd0DHJv3jV1Vi57ZrQ1N8gEjzXLudsFjyTHoeTiqemv6gFo1N4KZKy28ZK7QWYnEEiRW91C4i3Ljy4hHA8w3ZCtI+HcfSo+hdHN5CQGhFiQjsC8QqyBzkN9KzBujc0rMe5r9W5S3bvNdZl3MrC35cCR2gyeD6UR9P6fd9kFfYrfMMRPyUg/fWd0CxGockEMqkEEEESQCCCBnFFAauzwvA4suLXM5PE8bkxZNESp+i3dq2zfuzJJdSoiABtCtIic8VctacAZZnPqxn8BA/CmnI+R/GP8AKpH4p7HwvDx5QX4/iJT4rPLnJ/h+A0ZAAEkgCBGTiu+sdd9jDXbZCkkKUO6Tz3jtUVg/rLf9dP8AEKo+NLCtZVjc2hNzRt3SABMfISe9I/EZJOPkdb4VfZzl1tE6eMNKeQ4+aJ/zVMniXRn7Q+Rtkj7gDQLf6cotC6L4KkkD9WMgdwQ34VkLd86oCDunMeneK56lFjzyNc6PUj1TQP8AaQfJLlv8lFQ3E0DGfbFT8NVfT8N4H4V5nr7nsoJUGcSJHp/nULa4cgGPgT/GKtU1aMvLG6aR6tp7GkHGrYY76xzHxzcqa3pLZ41d08cX1I/M15boi1wgBgs8biRwY7TU9+wyYLBjnCs04BJ5WOBWe7dGtcauj1K70y08Brlx443XA3P0qi3hS0Yhmx22qfzFAPS+mXb5hFI+LkqMemM8dq1W8K6lQWlQB/Sc/gFqqiiaovoGmn8PW1Hr80FXbehVeAp/sx/GvOdT0rV2fe3KP3g5K/3gIHyMGs0dWvB/Zi84M7ffbbJ4Ex9PnVaYMvXFdD1u9Z3iDbtkfHdj6AfxrOfoKMSStsEyMSSAcd1PavO9V1zUWiQ164dvOy45iCBnjuarjxteHF28f7Tf89SOKPQkskOp6xodO9uz7IMCReS6DGNqMjHdid3l/AcVZ6mhuB4iWtouceZS/MfBhn4V4/8A/Heo7Pc+rf8A7GpbXjTVPhbrBuQCFgiYPm5/CpkxKcdL5GYTxRla5nqXS/0i1Zt2vaKNiqsAgjAjBKzSrye7411gJHtH/u2/+SlWtD8zDeEL7/TNp/aJnOSR6fOOfWiX/R5pf11xZ/8ACOUJxLoT8prC6v162h2BB5lV7bfq2BVsHf5DsjtG6QG4kT0PFu2xsFpkk7mZHBAAYNvUASeFABgATwAAQx1VZh40nVhf4zvkEIocGYkDy7TggsDuzAMYwDXNi5cKcXVJMiNLK7RMbSEIMyDQYfHqmBestb3FAW9qXG5gCCAVgLtkz68jmuG8WFZlLu1idm25EScLAXAg/hVSTk90agtO6YXNbvbtjLc2bmk/ooIgZQjbbOZ/kUFa6zdFy8fYP5WOz9SFlVVYAT2JkkknmZEYrR6z4hKWEuAXWVgCCLz5mI7DOe0nk8A0G6nrV26rEu4VzibhJXdmGjOPWM4qoRXNBW2nUtmEPSMXry7Yi2AQFAG5thPl9ZDH61zo7tm27bjl7CjaFLCSUUMQAQB5iNxgeaJzQ3ptU1u2Lx1CneRbKsfMq24nhcnbHaYIprWq/W2rzG3bthnXcygsyhce1geZRBUQOQe/F9jbZjtkq8ybqNu2looSA5Y+XEkMQREcwsfL51gdL1fs2fzAA/EQc4xInFGfQ9QGsC1dUu90krnEKGdRzuLAuzRJOMcUNaCw4d2uhDA3Mt1Qcny4nAbGD2JA9aJBLvJ/3MZU7TX9g76oQbdtQROwKu5gBOyB5iYA+JPrROnVNNasC1au24RSBFxDLHJJz3OfrXnvVtchUCxdRnUwQTAgKVMevI4/7aXV+qAPcFpTdK77LhViHO9TlomNi8TkwPgCEWgk3eyJdTrrftbl6VkoN21lcmDAJCEkcRPHFSafXqyBswRzB78kg5xVXS2IRZiGtW/nEqwH/u/Cqq30FkkHCs1qIfcWUbmjyxgEd8zXShx+XHBRilQrL4fimu0k3bNzU9Qt24LNE9iDPOccmJjFUbfibTscvsGPfBEeg496ZJ7CAJrMTq1u7vs7SWW5cYNgqdwtqqhhkQLbH5TQyIQ+zKy07RL4xydw7RmaMviOR9ELy+H40tpNnpXTNfZe9b2XUbzAgKwJIEHjmoPGj/qI9Vb07R+NDPgpgNWFAPlF0zuDAlRmDtGDj7q2PHDkm2o4Kt29SPu4pbic7zNNqqOhwuFYcEqfNmDf1CroFSJA3zn1ZjH50PW9SiujccgRnmBJJ9PlWvqWC2RbO0ggmJIPAOSvz/KsC4isywoCEBTEwGyAT3OMz3zQIQBZJ7k/WtVuAGf3u2ORHrOKe2vkiMgCRmZPwNWrnRmtpvNpipAh192UE+VgYDGJ57jHrZ/1sjWrW5gtudrqse03BTDcZkiSY7gdquqpJFLq2NoNvtbJ2ge9yBMEdx9a66heJ1EqdvlMHaDwHYiDI4xB9apWNSEuISWYSwVhHmBKwfwyOZrm5fS5dgkERgjEknE4gYNTT3rLcu7Ro6HreqCt/tDJAmdiGAJJ8oUTwK0ur9S1KWy51W62wwDZskmYifJkTH39oyOWtYqmYOQBETmRIyBnJrS1uutvbVWEBSsiGgSMAwIHyqmt+RaarmTabxLr2coNUO0RasjcDJmNnoOPjWLYPtWdmjzEEgKq4LAcIAo5HA9a2dPqLdtGPCgmcE8tA4z3ArI0ZCAliF7R3mVPb5VF6Ij9WE2n0YW6wMEBdp3LuBG0TKsMz6n51x0Ho1j9JaU/ZmUBnB2hxjvBJ5nmprOpt3Ga4vuE91gQMcdhio7eutrddzcRVYjaZG0kIAIIxEjmqldBJuOzroaTdF0CpqidpuM0FfOQAAGO1lWFO/tI7DFVfE+lt2xbS0FCDcF2knCEQSDni5yeSDUlvWK/tWVl2vABMDce8A8n3TjvHrWf17VK9xFDCV37lB43BGGPiB+dRJ2gUZK6oHr9vzGlReejIclTSo+sK+HZU0XS9RfuJoiqKyKDdvOTuVUJthA5ny8GFHmweBWnY8Pmbts6za8MhcWyFyCkYMiBPc9xWiAw1ywPLc27jHIRbrKAeeSaboVo3HuAMZgNzkEkn/in6+m2sQSlFMA5S1GX13wzcWxYIFsm0sXb1oibjAqlsNwygL5ZIEcwaitdQ01stp0Wbm1LYDQUNsxvn+lkEzzC+hqt4/6hqbbXNO1w7UuWzbIABYNbk7vUCTH/AGrA8JupuXWuAM23cGaMHIMHtMiqa3s0pNKlzNvVm37O6hl9sYc+WRiQFgcHEz2q107pli0g1BeNQLZVJChLbOrFDsjzsoOQZHwNYXS9Sl64VcEh8sOJEdoIM4FTdS6+pNxFUi5Mg4KymR3xEdvTmKuO2wNty3bIevaq4Ut239m6IhQeVUuATKtHvL7uRAGDPM0XeCdDa1djdqwCJNu0ANrMiCXlx9ncZxBlJoLZEvXEUGYOfeHkyTB4kYA+M16T4Yt2mSLJi3ZGxDBySSzkqcmWnJjvBrePdborJtyZndY0lnQ6nTEKH0zh0FpgNyXIwS/NyQdo3EAR8Kx+l6G1d1KkLsFxmLi2AoCKHuhuIB2geWIEjmt7xtessyowDMCLn2sAiC24DnA+NYPhzUrauHdLSrKsR6rJOBkqHz2ms5IpboLhbknfRWaXjnpulsKrrpJRlVp33feYEbSwOIJ9368kmsjR9W9vcdLipN3zeVSIZTvgKZwSvrJI+MBvFHiaxrbahLT27i7XuE7IKp7wDhtxgn0yKxul3FW7bONyspEDkT5lP9kk/wBnvVaFTB5MkpUl5dPv5hLrPaPsctsIthbY83nIAD7lYwSIx9K0vDPhK5qFvKbhtz7P2lwwzbwkhbdtYAJW5DEnvj0oVu9buDdZLlwW3Foyu+DttE+4vuiPhwMiinwl430+n0pS6WDl2gqjMXJVYJ5AIwIzgCsQi735BpSqFdTb6t4WsDRW9PbWwmoYKTv2o91kHnJuICS2eYgH4VkWegJf0j6eygtaxGUvcNwkkFgrKxb90AiPWD9pjQx1u5e1DC+17eCg2KfZo4Q+6CtsxMGcZ8w5jBd4Ds3/ANZqbgeNqhQ4K+0BzvWVGNu7PcvNbgt6Zhp6dSYIdV0l/S6i4lq37N7dncNp3Fd5CHacgghSR8+xxVU77qreNy8+Sg3kuGK7skAysjPGDHPf07Tai1cu6hwlu4UK20ujaxa2/mYK2RtU3CMd5HavO9fojb3KmANUSuSSEKgsI75ZfurU15GYZL7rKeotOblpRCn3gSTIGAW2mCDkmK0U8OPclbVxGdYdQ7FScw0KpYbR704+ParvSGQWE3qu4glmAySCSQTye4HYYrS6f1ZfZ3QicXU2vsCsTcNu2V+JliI9CvwoUZW2l0H58JogpSfOv4MueAfDl21af9JPl3PusgqyXFZV27kyNshuwJPOAJveOul6XUaS7eNlRct2y6OqhWATzBWgQydoM94gxQ+nVWS4zXLrIj+UMII5OIgiGGOPlmK0fFPU1fTLb0960bd2UuOLheFYRChe580kjG2DM0bHLutsU4jEoZEkeYprJ8q4k8DAYmBkcdhRA+http/Zyovbgd6gjAkspI5XGPvImsvpmha3dZiDtRTtYrEkwJU9zBPFWr2tLK8LBAGRJx3n07c1iO81Hoal3cetq/JEw6LbbYEZ3b9mR3ZmAVNsseHggAR91Q3tDfVFs3hEkhCwgkE5IJGSAGn08oMSKv8Ah+5N1DHmHmU5IVkPtFJHEErkf0qn1uuJAdm3Qyk7zvzDcAnHlJGI/AVJxcMmi722Kwx7bFrSren/ACI9B0pVvIzJutqGgJ5YdXXDbTJHutM8kA/HJ8T6WwpuIHUEuGCKASjAQ+5g0R8OePjJn0W/d/R9Wtizuum3be2qqDy8AgLMwCD8wZwJrzTquiuaa81m6IdQpYTJBcBoJHcTn5d+aqK33M5O73Ta8J6YuXC3VSFEBuWE5IX7TDJgekd6m6b0xb1wtDWbJaVLq4hDJIUboGBGCYMfOqXgy3OqQlgoUE5JGDgnHoCT9K9K6h4hsOnsmuq26FONwJnMWyCpWJwZwRmeM5Z6apGsMNadvkCet8INdwbtoDdFsC45hTz9k7j5c/Ema7fwkbbKFR22jcbiIWUzgA7WaMkdp/OtrV6MBiy7QFkfqxAypILKWImeBI47TFXLeo3KqNxvtlT5juAecYMggDg9/nUTbKi0pWzz49OMkG21wgkFm9qSWBhpKmDBBH0pV7gAgwNNPOfZEzOedtKiaH5g9a8jy3X9TuKLzo225ZcqD5T5Fc8bgRlS3/SiXwxpoulxMkRE4AkmY9T/AJ8EmsXqvhVL36S8XRcBf2cnarkrIJBHEmMHt863vD29brqVYQ2MfZbIHzyfpEVIS2RGqYO/6VdEp1OnJmLqnI9UBn8GT8aHtL0YW9PqruZti2smcm8RtMCRgkH1xxmKKP8ASDqb/wCk2bGxTaQ+1BgbtxS4zgmfdC547Ve6S1tkuh7YZWdP1YMgm0qFZiMAkNEelVmyQxYnN9P6EhFymkgf6Jp9Nc1CppSdrBrTllJG8AkXFJPm3KpxjHIE0N+I9KLGpv2toneAu0RhwrnBBxEDkHzdxNem9J0tpmVrNpLfs7m9lCkyYK4EwuJ7famudba07XnuG0DcODhYOzAkRmIGJpR8ZFQU6e/QYhwzlJxvkBPhrpTLcZnO4LbUKAPtXWMLxExbP3itTxD04WBvt3xvR7iutq4UdTcIgkLHD4MfvfCrvTer2Xf2KWhbht5UAAzbJZgojElY+tb+l6lp7wJfSWwtwywJUksTywKghieCT91O4bmk+QvmSg6PM/8AWNx7sGXZh71123GFWBHGRED4zW3r+nJa0Caou3tLlsLAXhmXa5wRBWDn1ipeprbcGzYthla5p/ZAjIH6M6ESeWARTP8ASFX7mnthFS6faLbQWgrFgsqzMu0K3AVihnBAGM4Hllpqw3DYJ5G1EFNN0v2t0WLW0W9Q9oIxkbRZtJddtu739t0DvO5uKh6jpNlhGJMPfNrcPeIsyu5TPcORx9k+teh9Ns6e46MbUMgIQoMQonaV4ZfL+QrM6P0y8o0IdLjLYN17gVD+1cvDHfHG9SIn7XGKuOS0VnwPFPSBfW7y+1m2jBfLJcqSxGQ2DEEEYpktJstrLKd4JE9toBM8hpUCK2PHOmnXXMELNtpMiRsQcH1aRHqDW50Hw/dbV6lNRZiyH3I3lG4rdZ7ZHqCC0/ICpfUw0ebHVuk7GIXgjkEfEH41udY3DRaclid5ZmUMQmRKjZxjaPrPrWZp9GL+qFpBC3bpURGFLnI+Sg/dRP0vw5f1Oi0xVQyhySNwkpvuB4Hrng1tsGlZb1GmD2benVZdw7vsgeYv9o+gCTk8kmJqJtMw6eLjAm8l91LTJhpXJ+1wo9efjWt13Q3bTj2Te8BJKqpHvBgc8EFfw7U/ULYOmlwW3XU3iIBWG7cAkyD/AFayuTZHJvJGKMvpdwciJ3MRPEE7So4ziR9ar9Y1p0wFtLQcNFwOSxCvZb2gBU9sDEjBjtVzrvTlsX/YICqjaVBJPvZOSZ5rjqyl9K+PMqfeOJHxzS8ZOMtjuywrLw9+ST/gCep8QXr8pcCw0TCxhTOM/Cnu2mRluBRscbU5wDKmY5Mk9z6VDZ0pHs4yzWXaEliAzMACBw2fuINHfR2VbNuQRtuxj7IB3QRMrjmf8qbilyOI5ybuW5jXNLtXbuLHYgg9oHBnvP5Vk9NuLN2DtBstyAOIIjPzxRcOkhtLfv7id++M53AqiwfTdv8AwoQZFtAhjAZWXiZkcf8AWgt1IOlqx+iNLoV3bfTIIMjGeQYj7j+Nd6ML7Vt2V3qwgAwUlMg4jzL9AaxvCVoHUbj9hSfqSF/Jj91amt0+xEuE+ZmeFH7ok/XIX+8KvJLXm28gvCw0cNT/AN1o3/DXXlt6y9vuLaRrSqrNCgsGJmMAAy0/T5UKeNdQLutvXFZWU7NpGVICIvl7ESD9Qam1NlSbtznbsHJwCbkkyM52/wB6tDpmnF7TWlYA7d6iQG4Ykc/AitvuuhbMu+wU0lwruG4DcrDPfvHPGM9uMV6xd6Cpfb7JC7bc+bdthfa4HBJkyB93IFOmaNHthdi+a5bGABJD9/hg0b9R1m3UgwTLMMc+UoSAJzNL5ZbqjCbi0UL2s01lk07EK2BBhlULlUZuAxBIHmHbvzBr5Fp4YgrtaRE7pO7B7TnI5LZoU69qX12rwpgAIoxICyTJ4xJmsW71DUC0FF1wFuQFJ92A2PWOccfCixhSLb39D2fRdOm2pa7c3ECcjn6CnrxceJNUcnUXvpeugfQBoH0pUa0CdnrlxAcZyQOT3NafTbY3E9y0n44BpUqDELMxfFmhtzqLu3zsoBJJPuqAIBMD6Vh9JUIqKuA0MRyCdqgnPy/jyaVKlOO+U/cNg8SB3rV0+3Kz5d3HbgHj60ar+2jtBx2pUqT4nwR9vyOsvyMXTWVTVal0ADBUAjsLoG+BxmrT3CptAGAxkxicT/IpUq7vDfJj7HB4z5rKfibUumkcKxUHUC2Yx5GtlyojgFiSY5mp9M/OBhceUT98SfrSpUDifuzo/CvE/ZfcI9CgQ2yuJbPx5Hf4UQqcUqVDxcjXxL5i9jznx0f9tVfssikj1I4+6KPHtC4xR8rPEkfiM0qVFYgefX9Fbtdcs27a7VhcAn7aXNxmZnPPNeg6LR27KC1bUKikwuSBJJPPxJpUqkuhldQM/wBKZ2ozLhh7OCMEbpmD290fdUHR0D6W8jjcpTfDZ8wZSCCeMnt8qelRYgHz+pc/0kCNSCOfZIZ+PtLgqtfEhx23OPptY/nSpUlLmen4T5H0KHgnR27mqS3cXeg0rwGkxt1LBRJzAHajfremQLchRixdYYnzKV2nPcU1Kml4jzvQyL9sL0YFRH6q22PVnVifmSSfrXnXXBz8Cw+gMClSrHVBo+Bkng0zduL22M3plBKmRnE8V31K4QqmTM3P+HtSpUSKWsvG3SRrWlm3qz3FtCPh+ut1L4XzbufBwR8yGn/CPup6VXl8TJn8TCfwbZXdfG0eUhl+BJbj090V31H9sh/+o34ohpUqTy+IXmCXhbSpc1+qtOish9qSrAESl5Qv3Bj99YHiS0BqNWAMC7I+ZOfzP30qVNR8X0L/ANJl9eQLqLqqIAcwBSpUqtcinzP/2Q==",
        filename: "sarangpur_hanuman",
    }
],
    description: "Sarangpur Hanuman Temple is one of the most powerful Hanuman temples in India, believed to remove negative energies and troubles.",
    location: "Sarangpur, Botad, Gujarat",
    timings: "5:00 AM - 9:00 PM",
    nearestRailway: "Botad Railway Station",
    nearestBusStand: "Sarangpur Bus Stand",
    nearestAirport: "Ahmedabad Airport",
    howToReach: "From Botad railway station, buses and taxis are easily available to Sarangpur.",
    mapLink: "https://maps.google.com/?q=Sarangpur+Hanuman+Temple",
    latitude: 21.9970,
    longitude: 71.6760,
},

];

module.exports = { data: sampleTemples };
