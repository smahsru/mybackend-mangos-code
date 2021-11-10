


// to add more documnets in the database with the help of insertMany() mothed 


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentdata", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log('connection rejected'));

//schema for validation of database collection
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:3,
        maxlength:25,
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
})

//  modles or collection creation
const sandDocToDB = async() =>{
    const Playlist = new mongoose.model("Playlist", playlistSchema);



    const reactPlaylist = Playlist({
        name: "Muhammad  zishan gul",
        ctype: "react developer",
        videos: 27,
        author: "zishab",
        active: true,
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
