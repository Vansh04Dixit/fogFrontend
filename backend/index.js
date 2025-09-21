require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cardModel = require("./model/cardModel");
const app = express();
const port = process.env.PORT;
const url = process.env.Mongo_url;
const cors = require('cors');

app.use(express.json());
app.use(cors());


const startServer = ()=>{
    mongoose.connect(url);
    console.log("Server Connected");
}
startServer();

// app.get("/addtempdata" , async(req, res)=>{
//     let sampleData = [
//   {
//     "title": "Modern Armchair",
//     "description": "A cozy and stylish armchair with premium fabric upholstery.",
//     "price": 249
//   },
//   {
//     "title": "Scandinavian Sofa",
//     "description": "Minimalist three-seater sofa with wooden legs.",
//     "price": 799
//   },
//   {
//     "title": "Industrial Coffee Table",
//     "description": "Solid oak tabletop with black steel frame.",
//     "price": 199
//   },
//   {
//     "title": "LED Floor Lamp",
//     "description": "Energy-efficient LED lamp with adjustable brightness.",
//     "price": 129
//   },
//   {
//     "title": "Classic Bookshelf",
//     "description": "Five-tier bookshelf crafted from walnut wood.",
//     "price": 349
//   },
//   {
//     "title": "Dining Set",
//     "description": "Round oak dining table with four matching chairs.",
//     "price": 1199
//   },
//   {
//     "title": "Ergonomic Office Chair",
//     "description": "Adjustable mesh office chair for all-day comfort.",
//     "price": 179
//   },
//   {
//     "title": "Velvet Ottoman",
//     "description": "Soft velvet ottoman with hidden storage.",
//     "price": 149
//   },
//   {
//     "title": "Minimal Bed Frame",
//     "description": "Queen-size bed frame with clean lines and sturdy build.",
//     "price": 649
//   },
//   {
//     "title": "Decorative Rug",
//     "description": "Handwoven cotton rug with geometric patterns.",
//     "price": 229
//   }
// ]

// sampleData.forEach((fakeData)=>{
//     let newData = new cardModel({
//         title : fakeData.title,
//         description: fakeData.description,
//         price : fakeData.price,
//     })
//     newData.save();
//     console.log(newData);
// })
// res.send("data saved");

// })

app.get("/allcards", async (req, res) => {
  try {
    const { sortBy = "price", order = "asc" } = req.query;
    const sortOrder = order === "desc" ? -1 : 1;
    const allCards = await cardModel.find({}).sort({ [sortBy]: sortOrder });; // server side sorting is performed on the basis of price.
    res.json(allCards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.put("/cards/:id", async (req, res) => {
    try {
        const updatedCard = await cardModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCard) return res.status(404).json({ message: "Card not found" });
        res.json(updatedCard);
    } catch (err) {
        res.status(500).json({ message: "Failed to update card", error: err.message });
    }
});


app.delete("/cards/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await cardModel.findByIdAndDelete(id);
    res.json({ message: "Card deleted successfully", deletedCard });
  } catch (err) {
    console.error("Delete error:", err); // full error

  }
});


app.listen(port , ()=>{
    console.log(`${port} Started`);
})