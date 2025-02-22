const mongoose = require("mongoose");
const Category = require("./models/Category"); // Adjust path as needed

mongoose
  .connect("mongodb://localhost:27017/studynotion", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log(" Connected to MongoDB");

    // Sample categories
    const categories = [
      { name: "MERN Full Stack Development", description: "Courses related to MERN Stack" },
      { name: "Data Science", description: "Courses related to Data Science" },
      { name: "AI & Machine Learning", description: "Courses related AI and ML" },
      { name: "Java Full Stack", description: "Courses related Java Full Stack" },
      { name: "Data Analytics", description: "Courses related Data Analytics" },
      { name: "Cyber Security", description: "Courses related Cyber Security" },
      { name: "Python Full Stack", description: "Courses related Python Full Stack" },
      { name: "DevOps", description: "Courses related DevOps" },
      { name: "MLOps", description: "Courses related MLOps" },
      { name: "Blockchain", description: "Courses related Blockchain" }
    ];

    // Insert categories
    await Category.insertMany(categories);
    console.log("Categories Added");
    mongoose.connection.close();
  })
  .catch((err) => console.log("MongoDB Error:", err));
