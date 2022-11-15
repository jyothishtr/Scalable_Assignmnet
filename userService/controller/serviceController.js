//import Book from './model/Books';

const {users} = require('../models');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op;


const getOne  = async(req,res)=>{
	try{
		let id = req.params.id;
		//63700358035d769678b79a35
		let user = await users.findOne({where:{id:id}});
		res.json({status:true,user})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
	
};

const getAll  = async(req,res)=>{
	try{
		//63700358035d769678b79a35
		let Users = await users.findAll();
		res.json({status:true,users:Users})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
	
};

const deleteOne  = async(req,res)=>{
	try{
		let id = req.params.id;
		//63700358035d769678b79a35
	await users.destroy({where:{id}});
		res.json({status:true,msg:'Record Deleted Successfully'})
	}catch(err){
		console.log(err.message);
		res.json({status:false,msg:err.message});
	}
};


const createOne  = async(req,res)=>{
	try{
		const data = req.body;
		await users.create(data);
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
		let book = await users.update(data,{where:{id:id}});
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