const {body, validationResult} = require("express-validator");
function validate() {
    return (
        (req,res,next) => {
            const error = validationResult(req);
            if(!error.isEmpty()) {
                res.status(422).json({validationErrors: error.array()});
            } else { next();}
        }

    )
}   

const validateMovie = [
    body("title").isLength({max: 255}),
    body("director").isLength({max: 255}),
    body("year").isLength({max: 4}),
    body("color").isLength({max: 255}),
    body("duration").isLength({max: 255}),
    validate(),

];
const validateUser = [
    body("firstname").isLength({max: 255}),
    body("lastname").isLength({max: 255}),
    body("email").isLength({max: 4}),
    body("city").isLength({max: 255}),
    body("language").isLength({max: 255}),
    validate(),
    
];
module.exports = {
    validateMovie,
    validateUser,
};