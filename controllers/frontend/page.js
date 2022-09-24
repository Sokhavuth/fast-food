// controllers/frontend/page.js

const pagedb = require("../../models/page")
const postdb = require("../../models/post")



class Page{
    async getPage(req, res){
        const setup = await req.mysetup()
        setup.pageTitle = "Static page"
        setup.route = `/page/${req.params.key}`

        const { posts } = await postdb.getPosts(req, 2)
        setup.items = posts
        setup.item = await pagedb.getPage(req)

        res.render("base", { data: setup })
    }
}


module.exports = new Page()