
const Temple = require("./models/temple");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash(
            "error",
            "You Must Login First!"
        );

        return res.redirect("/login");
    }

    next();
};

module.exports.isOwner = async (req, res, next) => {
    try {
        let { id } = req.params;

        let temple = await Temple.findById(id);

        if (!temple) {
            req.flash(
                "error",
                "Temple Not Found!"
            );

            return res.redirect("/temples");
        }

        if (!temple.owner.equals(req.user._id)) {
            req.flash(
                "error",
                "You Are Not Owner!"
            );

            return res.redirect(
                `/temples/${id}`
            );
        }

        next();
    } catch (err) {
        console.log(err);

        req.flash(
            "error",
            "Something Went Wrong"
        );

        res.redirect("/temples");
    }
};
module.exports.isAdmin = (req, res, next) => {

    if (!req.user || req.user.role !== "admin") {

        req.flash("error", "Admin Access Required");

        return res.redirect("/temples");
    }

    next();
};