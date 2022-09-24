// controllers/frontend/search.js

const searchdb = require("../../models/search")
const postdb = require("../../models/post")


class Search{
    async searchItems(req, res){
        const setup = await req.mysetup()
        setup.pageTitle = "Search page"
        setup.route = "/search"
        setup.type = "post"

        req.body.search_type = "posts"

        const { posts } = await postdb.getPosts(req, 2)
        setup.items = posts
        setup.searchResult = await searchdb.searchItems(req, 12)

        res.render("base", { data: setup })
    }
}


module.exports = new Search()