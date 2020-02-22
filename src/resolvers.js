module.exports = {
    Query: {
        posts: (_,__,{dataSources}) => dataSources.postApi.getAllPost()
    }
}