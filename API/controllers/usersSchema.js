const Yup = require("yup");
module.exports = Yup.object().shape({
    name: Yup.string()
        .max(20, "Your name is too long!")
        .required("Name cannot be empty!"),
    email: Yup.string()
        .required("E-mail cannot be empty!"),
    password: Yup.string()
        .min(6, "Your password is too short!")
        .required("Password cannot be empty!"),
});