import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const IternerariesSchema=new Schema({
    Package_name:{
        type:Schema.Types.ObjectId,
        ref:'Packages'
    },
    day_number:{
        type:Number,
        required:true
    },
    Highlights:{
        type:String,
        required:true
    }
})

IternerariesSchema.plugin(mongooseAggregatePaginate);
export default mongoose.model("Iterneraries",IternerariesSchema);