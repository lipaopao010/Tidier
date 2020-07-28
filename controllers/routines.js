const Routines = require("../models/routines");




// exports.list = async function list(req,res){
//     try{
//     const books = await Book.find({});
//     res.json(books);
//     } catch (e){
//         res.status(500);
//     }
// };

// exports.add = async function add(req,res){
//     const book = await Book.create(req.body);
//     res.json(book);
// }

// exports.delete = async function deleteBook(req,res){
//     const { _id } = req.params;
//     console.log(_id);
//     await Book.deleteOne({ _id });
//     res.json({ _id });
// }