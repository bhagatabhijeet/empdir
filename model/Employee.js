const { Schema, model } = require('mongoose');

// Employee Schema
const EmployeeSchema = new Schema({
  gender:{
    type:String,
    enum:['male','female'],
    default:'male',
    trim:true,
  },
  name:{
    title:String,
    first:{type:String,required:[true,'first name is required'],trim:true},
    last:{type:String,required:[true,'last name is required'],trim:true},
  },
  location:{
    street:{
      number:{type:Number},
      name:{type:String}
    },
    city:String,
    state:String,
    country:String,
    postcode:String,
    coordinates:{
      latitude:Number,
      longitude:Number
    },
    timezone:{
      offset:String,
      description:String
    }
  },
  email : {type:String,required:[true,'email is required'],trim:true},
  login : {
      uuid : String,
      username : {type:String,required:[true,'username is required'],trim:true},
      password : {type:String,required:[true,'password is required'],trim:true},
      salt : String,
      md5 : String,
      sha1 : String,
      sha256 :String
  },
  dob : {
      date : {type:String,required:[true,'dob.date is required'],trim:true},
      age : String
  },
  registered : {
      date : String,
      age : String
  },
  phone :  String,
  cell :  String,
  picture : {
      large :String,
      medium :String,
      thumbnail : String
  },
  nat :String
 });

 const Employee=model('Employee',EmployeeSchema);
 module.exports=Employee;