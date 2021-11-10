


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

// this below Playlist variable is collection 
const Playlist = new mongoose.model("Playlist", playlistSchema);

// -------------------------------------------------------------------------------------------------
//  modles or collection creation
// const sandDocToDB = async() =>{

    // const Playlist = new mongoose.model("Playlist", playlistSchema);

    // const angularPlaylist = new Playlist({
    //     name: "Muhammad naim",
    //     ctype: "jQuery developer",
    //     videos: 27,
    //     author: "zishab",
    //     active: true,
    // })
    // const reactPlaylist = new Playlist({
    //     name: " zishan ali",
    //     ctype: "react developer",
    //     videos: 27,
    //     author: "zishab",
    //     active: false,
    // })
    // const mongoPlaylist = new Playlist({
    //     name: "shabir sir",
    //     ctype: "mongo developer",
    //     videos: 27,
    //     author: "bootstrap 5",
    //     active: true,
    // })
    // const expressPlaylist = new Playlist({
    //     name: "jabir khan",
    //     ctype: "express developer",
    //     videos: 26,
    //     author: "jabir",
    //     active: false,
    // })
    // insertMany mothed()
    // const reasult = await Playlist.insertMany([ expressPlaylist , mongoPlaylist,angularPlaylist,reactPlaylist ])
    // console.log(reasult)

// }
// sandDocToDB();
// --------------------------------------------------------------------------------------------
const getDocument = async() =>{
    const readDoc =    await Playlist.find( { videos:27 } ).select({videos:1,name:1}).limit(2);
    console.log(readDoc);
}

getDocument();
