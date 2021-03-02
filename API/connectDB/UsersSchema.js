const Yup = require("yup");
module.exports = Yup.object().shape({
    name: Yup.string()
        .max(20, "Your name is too long!")
        .required("Name cannot be empty!"),

});