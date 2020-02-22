module.exports = {
    Query: {
        posts: (_,__,{dataSources}) => DataSources.PostAPI.getAllPost()
    }
}