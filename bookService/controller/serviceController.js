//import Book from './model/Books';

const Book = require("../model/Books");
//const Book = require("../model/Books");
const getOne  = async(req,res)=>{
	try{
		let id = req.params.id;
		//63700358035d769678b79a35
		let book = await Book.findById(id);
		res.json({status:true,book})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
	
};

const getAll  = async(req,res)=>{
	try{
		//63700358035d769678b79a35
		let book = await Book.find();
		res.json({status:true,book})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
	
};

const deleteOne  = async(req,res)=>{
	try{
		let id = req.params.id;
		//63700358035d769678b79a35
		let book = await Book.findByIdAndDelete(id);
		res.json({status:true,msg:'Record Deleted Successfully'})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
};
const createOne  = async(req,res)=>{
	try{
		const data = req.body;
		const book = new Book({
			title: data.title,
			published: data.published,
			author: data.author,
			type:data.author
		});
		await book.save();
		res.json({status:true,msg:'Created Successfully'})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
	


};

const updateOne  = async(req,res)=>{
	try{
		let id = req.params.id;
		//63700358035d769678b79a35
		const data = req.body;
		console.log(data);
		let book = await Book.findByIdAndUpdate(id,data);
		res.json({status:true,book})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
};


module.exports = 
{
	getOne,
	getAll,
	deleteOne,
	createOne,
	updateOne
}