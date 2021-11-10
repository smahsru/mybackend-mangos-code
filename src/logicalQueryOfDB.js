
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


const getDocument = async() =>{
    
    // const readDoc =    await Playlist.find( {  $or:[{active:false},{videos:27}] } ).select({});
    // const readDoc =    await Playlist.find( {  $nor:[{active:false},{videos:27}] } ).select({});
    const readDoc =    await Playlist.find( {  $not:[{active:true},{videos:27}] } ).select({});
    // const readDoc =    await Playlist.find( {  $and:[{active:false},{videos:27}] } ).select({});


    // const readDoc =    await Playlist.find( {  active: {$nin:[true ]} } ).select({});
    console.log(readDoc);
}

getDocument();
