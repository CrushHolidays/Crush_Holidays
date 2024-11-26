import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
    {
        rating:{
            type:Number,
            required:true
        },
        Title:{
            type:String,
            required:true
        },
        content: {
            type: String,
            required: true
        },
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       }
    },
    {
        timestamps: true
    }
)


commentSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentSchema)