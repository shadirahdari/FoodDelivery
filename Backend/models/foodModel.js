import { mongoose } from "mongoose";
 const foodSchema= new mongoose.Schema ({
    name: { type:String,required:true},
    description:{type:String,required:true},
    price: {type:Number, required:true},
    image: { type: String, required: false },
    //image: { type: String, required: true },Te mporarily skip image and make it optional,"The file-sending feature is available only in the paid version.

    category: {type:String,required:true},
}
 )

 const foodModel= mongoose.models.food || mongoose.model("food", foodSchema);
  export default foodModel;