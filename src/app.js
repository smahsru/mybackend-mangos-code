


// to add more documnets in the database with the help of insertMany() mothed 


const mongoose = require("mongoose");
const validator = require('validator')

mongoose.connect("mongodb://localhost:27017/studentdata", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log('connection rejected'));

//schema for validation of database collection
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // unique:true,
        // lowercase: true,
        // trim: true,
        // minlength: 3,
        // maxlength:25,
    },
    ctype: String,
    videos: {
        type: Number,
        validate(val) {
            if (val < 0) { throw new Error("videos count should not be negative") }
        }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    },
    email:{ 
        type:String,validate(val){
            if(!validator.isEmail(val)){
                throw new Error("inavlid emaill  ........")
            }
        }
     } 
})

//  modles or collection creation
const sandDocToDB = async () => {
    const Playlist = new mongoose.model("Playlist", playlistSchema);



    const reactPlaylist = Playlist({
        name: "hammad ",
        ctype: "react developer",
        videos: 27,
        author: "zishab",
        active: true,
        email: "shams@gmail.dk"
    })



    // const reactPlaylist = new Playlist({
    //     name: " ishan ali",
    //     ctype: "react developer",
    //     videos: 27,
    //     author: "zishab",
    //     active: false,
    // })





    const reasult = await reactPlaylist.save()

    console.log(reasult)

}
sandDocToDB();
