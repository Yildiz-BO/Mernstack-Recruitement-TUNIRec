const mongoose=require('mongoose');

const Schema=mongoose.Schema;

//creating schema for user's offre 

const Offreschema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    jobTitle:{
        type: String,
        required:true,
        max:10
    },
    company:{
        type: String
    },
    location:{
        type:String
    },
    Yexperience:{
        type:Number,
        
    },
    skills:{
        type: String,
        
    },
    
    
})

module.exports=offres=mongoose.model('offres',Offreschema);