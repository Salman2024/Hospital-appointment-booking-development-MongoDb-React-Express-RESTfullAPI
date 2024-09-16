var mongoose=require("mongoose");

var HospitalSchema=new mongoose.Schema({
    patientName:{type:String,required:true},
    mobile:{type:Number,required:true},
    location:{type:String,required:true}
});

const Hospital=mongoose.model("Hospital",HospitalSchema);
module.exports=Hospital;