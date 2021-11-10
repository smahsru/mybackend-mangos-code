


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
    
    const readDoc =    await Playlist.find({}).select({name:1}).sort({name : "1"}).countDocuments();

    // countDocuments(); this mothed tell the number of element which is available in the db
    //sort() set all the elements in asanding order

    // const readDoc =    await Playlist.find( {  active: {$nin:[true ]} } ).select({});
    console.log(readDoc);
}

getDocument();
