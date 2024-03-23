const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

     home(req, res, next) {

        // viết theo kiểu promise
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)

        // const course = await Course.find();
        // res.json(course);

        // res.render('home')
    }

    search(req, res) {
        res.render('search')
    }
} 

module.exports = new SiteController();
