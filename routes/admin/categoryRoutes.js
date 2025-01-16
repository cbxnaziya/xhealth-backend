const express = require('express');
const Category = require('../../models/category');
const { addCategory, getCategories, updateCategory, getCategory } = require('../../controllers/admin/categoryController');
const router = express.Router();

// Get all categories
router.get('/', getCategories);


// get category by id 
router.get('/:id', getCategory);


// Add a new category
router.post('/add',addCategory );
// router.get('/',authMiddleware, adminMiddleware, getAllUsers);



// Update category
router.put('/:id',updateCategory);

// Delete category
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
