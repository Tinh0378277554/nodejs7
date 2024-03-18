
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('New detail')
    }
}

// tui muốn thay đổi cái này đăng lên github

module.exports = new NewsController();