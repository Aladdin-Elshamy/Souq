import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req,res) => {
    const product = req.body;    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"Some fields are missing"});
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success:true,message:"Product created successfully",product:newProduct});
    }catch(error){
        console.log(`Error in creating product: ${error}`);
        res.status(500).json({success:false,message:"Server error"});
    }
}

export const getProducts = async(req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json({success:true,products});
    }catch(error){
        console.log(`Error in getting products: ${error}`);
        res.status(500).json({success:false,message:"Server error"});
    }
}

export const updateProduct = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Product not found"});
    }
    try {
        const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!product){
            return res.status(404).json({success:false,message:"Product not found"});
        }
        res.status(200).json({success:true,message:"Product updated successfully",product});
    } catch (error) {
        console.log(`Error in updating product: ${error}`);
        res.status(500).json({success:false,message:"Server error"});
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Product not found"});
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted successfully"});
    }catch(error){
        console.log(`Error in deleting product: ${error}`);
        res.status(500).json({success:false,message:"Server error"});
    }
}