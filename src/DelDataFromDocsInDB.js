


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


const getDocument = async(_id) =>{
    
     const readDoc =    await Playlist.deleteMany({author:"itself"});
    //  const readDoc =    await Playlist.deleteOne({_id});
    //  const readDoc =    await Playlist.findByIdAndDelete({_id});

 
    console.log(readDoc);
}

getDocument('61867e0f39d54fa0551b5fd4');
