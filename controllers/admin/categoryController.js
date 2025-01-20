const Category = require("../../models/category")



const  addCategory =  async (req, res) => {

    
    try {
        const { name, status } = req.body;

         if(!name){
            return res.status(404).json({success:false, message:"Category name is required."})
         }

        const category = new Category({ name, status });
        await category.save();
        res.status(201).json({ status: true, message: 'Category added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({success:true, data:categories});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const categories = await Category.find({_id: id });
        res.status(200).json({success:true, data:categories});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updateCategory =  async (req, res) => {
    try {
        // const { id } = req.params;
        const { id, name, status } = req.body;

      if(!name){
        return  res.status(404).json({success:false, message:"Category name is required."})
      }

      

        const updatedCategory = await Category.findByIdAndUpdate(id, { name, status }, { new: true });
        res.status(200).json({ message: 'Category updated successfully', updatedCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {addCategory,getCategories,updateCategory , getCategory}