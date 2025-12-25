const Contact = require("../model/contact")

exports.getContact = async (req,res)=>{
    try {
        const data = await Contact.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postContact = async (req,res)=>{
    try {
        const data = await Contact.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errorS:true,message:error.message})
    }
}


exports.putContact = async (req,res)=>{
    try {
        const data = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteContact = async (req,res)=>{
    try {
        const data  = await Contact.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}