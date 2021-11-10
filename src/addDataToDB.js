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

//  modles or collection creation
const sandDocToDB = async() =>{
    const Playlist = new mongoose.model("Playlist", playlistSchema);

    const reactPlaylist = new Playlist({
        name: "Muhammad zishan",
        ctype: "react developer",
        videos: 27,
        author: "zishab",
        active: true,
    })
    const reasult = await reactPlaylist.save()
    // console.log(reasult)
    // module.exports = Playlist
}
sandDocToDB();

