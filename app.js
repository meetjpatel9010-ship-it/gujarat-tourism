const express = require("express");
const app = express();

require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const session = require("express-session");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const multer = require("multer");

const Temple = require("./models/temple");
const Review = require("./models/review");
const User = require("./models/user");

const {
    isLoggedIn,
    isOwner
} = require("./middleware");

const {
    storage
} = require("./cloudConfig");

const upload = multer({ storage });

/* MongoDB Connection */
async function main() {
    await mongoose.connect(
        "mongodb+srv://meetjpatel9010_db_user:bZxFjKK9Nv4dKTLH@cluster0.db5wgms.mongodb.net/gujaratTourism?retryWrites=true&w=majority&appName=Cluster0"
    );
}

main()
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

/* App Configuration */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

/* Session Config */
const sessionConfig = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};
app.use(session(sessionConfig));

/* Flash */
app.use(flash());

/* Passport */
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* Global Variables */
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

/* Home Route */
app.get("/", (req, res) => {
    res.render("home");
});

/* Index Route */
app.get("/temples", async (req, res) => {
    try {
        let search = req.query.search || "";
        let district = req.query.district || "";
        let category = req.query.category || "";
        let page = parseInt(req.query.page) || 1;
        let limit = 6;
        let query = {};

        /* Search Temple */
        if (search) {
            query.name = {
                $regex: search,
                $options: "i",
            };
        }

        /* Search District */
        if (district) {
            query.district = district;
        }

        /* Search Category */
        if (category) {
            query.category = category;
        }

        const result = await Temple.paginate(
            query,
            {
                page,
                limit,
                populate: "owner",
            }
        );

        const temples = result.docs;
        const districts = [
            "Ahmedabad", "Dwarka", "Somnath", "Junagadh", "Rajkot",
            "Kutch", "Surat", "Mehsana", "Vadodara", "Bhavnagar",
        ];

        res.render("temples/index.ejs", {
            temples,
            search,
            district,
            category,
            districts,
            currentPage: result.page,
            totalPages: result.totalPages,
        });
    } catch (err) {
        console.log(err);
        req.flash("error", "Something Went Wrong");
        res.redirect("/");
    }
});

/* New Route (Form) */
app.get("/temples/new", isLoggedIn, (req, res) => {
    res.render("temples/new.ejs");
});

/* Create Route */

app.post(
"/temples",
isLoggedIn,
upload.array("images", 5),
async(req,res)=>{
   try{

      const newTemple = new Temple(req.body.temple);

      newTemple.owner = req.user._id;

      if(req.files && req.files.length > 0){

         newTemple.images = req.files.map(file => ({
            url: file.path,
            filename: file.filename
         }));

      }

      await newTemple.save();

      req.flash("success","New Temple Added!");
      res.redirect("/temples");

   }catch(err){
      console.log(err);
      req.flash("error","Temple Not Added");
      res.redirect("/temples/new");
   }
});

/* Show Route */
app.get("/temples/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const temple = await Temple.findById(id)
            .populate("owner")
            .populate({
                path: "reviews",
                populate: {
                    path: "owner",
                },
            })
            .populate("owner");

        if (!temple) {
            req.flash("error", "Temple Not Found!");
            return res.redirect("/temples");
        }

        let avgRating = 0;
        if (temple.reviews.length > 0) {
            let total = 0;
            temple.reviews.forEach((review) => {
                total += review.rating;
            });
            avgRating = total / temple.reviews.length;
        }

        res.render("temples/show.ejs", {
            temple,
            avgRating,
        });
    } catch (err) {
        console.log(err);
        req.flash("error", "Temple Not Found");
        res.redirect("/temples");
       
    }
     
});

/* Edit Route */
app.get("/temples/:id/edit", isLoggedIn, isOwner, async (req, res) => {
    let { id } = req.params;
    const temple = await Temple.findById(id);

    if (!temple) {
        req.flash("error", "Temple Not Found");
        return res.redirect("/temples");
    }

    res.render("temples/edit.ejs", { temple });
});

/* Update Route */


app.put(

    "/temples/:id",

    isLoggedIn,
    isOwner,

    upload.array("images", 5),

    async (req, res) => {

        try {

            let { id } =
            req.params;

            let temple =
            await Temple.findByIdAndUpdate(

                id,

                {
                    ...req.body.temple
                },

                {
                    new: true
                }

            );

            /* Add New Images */

            if(req.files && req.files.length > 0){

                let imgs =
                req.files.map((file) => ({

                    url: file.path,

                    filename: file.filename,

                }));

                temple.images.push(...imgs);

                await temple.save();

            }

            req.flash(
                "success",
                "Temple Updated!"
            );

            res.redirect(
                `/temples/${id}`
            );

        } catch(err){

            console.log(err);

            req.flash(
                "error",
                "Temple Not Updated"
            );

            res.redirect("/temples");

        }

    }

);
/* Delete Route */
app.delete("/temples/:id", isLoggedIn, isOwner, async (req, res) => {
    try {
        let { id } = req.params;
        await Temple.findByIdAndDelete(id);

        req.flash("success", "Temple Deleted!");
        res.redirect("/temples");
    } catch (err) {
        console.log(err);
        req.flash("error", "Delete Failed");
        res.redirect("/temples");
    }
});

/* Add Review */
app.post("/temples/:id/reviews", isLoggedIn, async (req, res) => {
    try {
        let temple = await Temple.findById(req.params.id);
        let newReview = new Review(req.body.review);

        newReview.owner = req.user._id;
        temple.reviews.push(newReview);

        await newReview.save();
        await temple.save();

        req.flash("success", "Review Added!");
        res.redirect(`/temples/${temple._id}`);
    } catch (err) {
        console.log(err);
        req.flash("error", "Review Not Added");
        res.redirect("/temples");
    }
});

/* Delete Review */
app.delete("/temples/:id/reviews/:reviewId", isLoggedIn, async (req, res) => {
    try {
        let { id, reviewId } = req.params;

        await Temple.findByIdAndUpdate(id, {
            $pull: { reviews: reviewId },
        });

        await Review.findByIdAndDelete(reviewId);

        req.flash("success", "Review Deleted!");
        res.redirect(`/temples/${id}`);
    } catch (err) {
        console.log(err);
        req.flash("error", "Review Delete Failed");
        res.redirect("/temples");
    }
});

/* Add Favorite */
app.post("/temples/:id/favorite", isLoggedIn, async (req, res) => {
    try {
        let templeId = req.params.id;
        let user = await User.findById(req.user._id);

        if (!user.favorites.includes(templeId)) {
            user.favorites.push(templeId);
            await user.save();
        }

        req.flash("success", "Added To Favorites");
        res.redirect(`/temples/${templeId}`);
    } catch (err) {
        console.log(err);
        req.flash("error", "Favorite Failed");
        res.redirect("/temples");
    }
});

/* Favorite Page */
app.get("/favorites", isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("favorites");
        res.render("users/favorites.ejs", {
            favorites: user.favorites,
        });
    } catch (err) {
        console.log(err);
        req.flash("error", "Cannot Load Favorites");
        res.redirect("/temples");
    }
});

/* Register Form */
app.get("/register", (req, res) => {
    res.render("users/register.ejs");
});

/* Register User */
app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                console.log(err);
                return res.redirect("/register");
            }
            req.flash("success", "Welcome To Gujarat Tourism!");
            res.redirect("/temples");
        });
    } catch (err) {
        console.log(err);
        req.flash("error", err.message);
        res.redirect("/register");
    }
});

/* Login Form */
app.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

/* Login User */
app.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    (req, res) => {
        req.flash("success", "Welcome Back!");
        res.redirect("/temples");
    }
);

/* Logout */
app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged Out Successfully");
        res.redirect("/login");
    });
});
app.use((err, req, res, next) => {
    console.log(err);

    req.flash("error", err.message);

    res.redirect("/temples");
});
/* Server */
app.listen(8080, () => {
    console.log("Server Started On Port 8080");
});