// callback hell

// get user func
function getUser(id,cb){
    setTimeout(()=>{
        console.log('user fetched...')
        cb({id:1,user:'dharma'})
    },1000)
}

// get post func
function getPost(user,cb){
    setTimeout(()=>{
        console.log('posts fetched for',user.user)
        cb(['post1','post2'])
    },1000)
}

// get comments func
function getComments(posts,cb){
    setTimeout(()=>{
        console.log("comments fetched for",posts[0])
        cb(['comment1','comment2'])
    },1000)
}

// hell calling
getUser(1,function (user){
    getPost(user,function (posts){
        getComments(posts,function(comments){
            let i = 0;
            while(i<comments.length){
                console.log(comments[i])
                i++;
            }
        })
    })
})
