import * as fs from "fs";



export default async function handler(req,res){

    let data =await fs.promises.readdir("blogdata");
    let allBlog =[];
    let myfile;
    for(let i=0;i<data.length;i++){
        const item = data[i];
        console.log(item);
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlog.push(JSON.parse(myfile))
    }


res.status(200).json(allBlog);
}