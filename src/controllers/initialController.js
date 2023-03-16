import Model from "../models/Model";

export const home = (req, res) => {
    return res.render("home", { pageTitle: "Home" });
};
