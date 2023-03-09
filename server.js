const express = require('express');
const app =express();

const multer =require("multer")

// npm init -y
// npm . express

// we can learn multer at npm i multer on google
// storage management is in multer we can upload single or multiple files currently we ar learning uploading single files
//app.get("/test", (req,res) => {
 //   res.send("server is running perfectly fine")
//})
//multer is a library which has inbuilt method which is use to upload files

const storageofMulter = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,"./public")
    },
    filename:(req, file, cb) => {
        cb(null,file.originalname)
    }
})
 const uploadfile =multer({storage:storageofMulter}).single('sample')

 app.use("/public/", express.static(__dirname+'/public/')); //homework to search use of app.use

app.post("/", (req, res) => {
    uploadfile(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        return res.send(req.file)
    })
})


app.listen(5000, () => {
    console.log("Server is running");
})

//to stop server we can press ctrl+C to stop server and then we can type node .(dot) to run vs code again