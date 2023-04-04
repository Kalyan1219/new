// const { get } = require("express/lib/response")

const posts=[
    { title:"First Post"},
    { title:"Second Post"},
    { title:"Third Post"}
]

function getPost(){
    setTimeout(()=>{
        let output=''
        posts.forEach((values,index)=>{
            output+=`<li>${values.title}</li>`
        })
        document.body.innerHTML=output

    },1000)   
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}
//CALLING THE FUNCTION
createPost({title:"Forth Post"},getPost)
