const {Schema , model} = require("mongoose")

const ProductSchema = new Schema({
    title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imageFileSet: {
        type: String,
        require: true,
      },
      publishedAt : {
        type : String
      }
})

 const ProductModel = model("products" , ProductSchema )

 module.exports = ProductModel