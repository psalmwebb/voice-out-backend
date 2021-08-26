

module.exports =(schema)=>{

    return (req,res,next)=>{

      const {error,result} = schema.validate(req.body);  

      if(error){
        
        return res.status(400).json({message:error.details[0].message})
      }
      next()
    }
}