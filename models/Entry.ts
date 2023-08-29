import mongoose, {Model, Schema} from "mongoose";
import { entry } from "../interfaces";



interface IEntry extends entry{
}

const entrySchema = new Schema({
  description: {type: String, required: true},
  createdAt: {type: Number },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress','completed' ],
      message: '{VALUE} not a valid status'
    }
  }
})


const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)
const entry = new EntryModel()



export default EntryModel