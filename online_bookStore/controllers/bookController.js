const Book=require("../models/Book.js");

const getBooks=async (req,res)=>{
    try{
        const books=await Book.find();
        res.json(books);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

const getBookById=async (req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        res.json(book);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports={getBooks,getBookById};
