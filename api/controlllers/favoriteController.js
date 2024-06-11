const db = require('../models');

const Favorite = db.favorite;
const User = db.user;

function getFavoritesByUserId (req, res){
    const userId = req.params.userId;
    try {
        
        const favorites = await Favorite.findAll({
            where: { userId: userId },
            include: [{
                model: db.resep,
                as: 'reseps'
            }]
        });
        res.status(200).json({ favorites });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

function addFavorite(req, res){
    const userId = req.params.userId;
    const resepId = req.body.resepId;
    
         // Assuming resepId is sent in the request body

        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new favorite entry
        const newFavorite = await Favorite.create({
            userId: userId,
            resepId: resepId
        });

        res.status(201).json({ message: 'Recipe added to favorites', favorite: newFavorite });
     catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.deleteFavorite = async (req, res) => {
    try {
        const favoriteId = req.body.favoriteId;

        // Check if the favorite entry exists
        const favorite = await Favorite.findByPk(favoriteId);
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite entry not found' });
        }

        // Delete the favorite entry
        await favorite.destroy();

        res.status(200).json({ message: 'Favorite entry deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};