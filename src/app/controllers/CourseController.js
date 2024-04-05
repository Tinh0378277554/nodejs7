const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next)
    }

     // [GET] /course/create
     create(req, res, next) {
        res.render('./courses/create');
    }

     // [POST] /course/store
     store(req, res, next) {
        const { name, description, image, videoId } = req.body;

        const course = new Course({name, description, image, videoId})
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {

            })
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('./courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }   

    // [PUT] /courses/:id
    update(req, res, next) { 
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
} 

module.exports = new CourseController();
