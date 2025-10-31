// avoid callback hell using promise

// get user with promise return
function getUser(id){
    return new Promise((res)=>setTimeout(()=>{
        console.log("user fetched...")
        res({id,name:'dharma'})
    },1000))
}

// get post with promise return
function getPost(user){
    return new Promise((res)=>setTimeout(()=>{
        console.log(`post for ${user.name} fetched...`)
        res(['post1','post2'])
    },1000))
}

// get comments with promise return
function getComments(posts){
    return new Promise((res)=>setTimeout(()=>{
        console.log(`comments for ${posts[0]} fetched...`)
        res(['comment1','comment2'])
        
    },1000))
}

// promise calling
getUser(1)
    .then((user)=>getPost(user))
    .then((posts)=>getComments(posts))
    .then((comments)=>{
        comments.forEach((com)=>console.log(com))
    })
    
    
    
    
    
    
    
