import mongoose from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true,
});

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a last name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
});

const Contacts = mongoose.model("contacts", contactSchema);

export { Contacts };
