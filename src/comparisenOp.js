


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


const getDocument = async() =>{
    // matches none of the values specified in an array
    const readDoc =    await Playlist.find( {  active: {$nin:true } } ).select({});
    // matches values that are equal to a specified value
    const readDoc =    await Playlist.find( {  videos:{ $eq: 20 } } ).select({});
    const readDoc =    await Playlist.find( {  videos:{ $gte: 20 } } );
    const readDoc =    await Playlist.find( {  videos:{ $lte: 20 } } );
    const readDoc =    await Playlist.find( {  videos:{ $lt: 20 } } );
    const readDoc =    await Playlist.find( {  videos:{ $ge: 20 } } );
    // matches  of the values specified in an array
    const readDoc =    await Playlist.find( {  active: {$in:[true,false] } } ).select({});
    const readDoc =    await Playlist.find( {  active: {$ne:[true,false] } } ).select({});

    // const readDoc =    await Playlist.find( {  active: {$nin:[true ]} } ).select({});
    console.log(readDoc);
}

getDocument();
