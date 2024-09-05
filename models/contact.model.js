import mongoose from "mongoose"

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please enter the contact phone"],
    },
  },
  { timeStamps: true }
)

const Contact = mongoose.model("Contact", contactSchema)
export default Contact
