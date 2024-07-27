import mongoose from "mongoose";
import shortid from "shortid";

const linkSchema = new mongoose.Schema(
    {
        originalurl: { type: String, required: true },
        shorturl: { type: String, required: true , default: shortid.generate },
        clicks: { type: Number, default: 0 },//means how many times the link is clicked
    }
)

//link is table name
//to bas mongoose ka model bnaya hai jha table ka nam link hoga and usme uska schema bhi pass kr diya hai
const Link = mongoose.model("Link",linkSchema);

export default Link;//module.exports tha to yha ye export default aa jayega
