// controllers/frontend/post.js

const postdb = require("../../models/post")


class Post{
    async getPost(req, res){
        const setup = await req.mysetup()
        setup.pageTitle = "Post page"
        setup.route = "/post"

        const { posts } = await postdb.getPosts(req, 2)
        setup.items = posts
        setup.item = await postdb.getPost(req)

        res.render("base", { data: setup })
    }
}


module.exports = new Post()