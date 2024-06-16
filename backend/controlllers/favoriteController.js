"use strict";
const { favorite, resep, user } = require("../models");

// Get favorites of a specific user
const getFavoritesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const userFavorites = await favorite.findAll({
      where: { userId },
      include: [
        {
          model: resep,
          as: "resep",
        },
      ],
    });

    if (!userFavorites) {
      return res
        .status(404)
        .json({ message: "Favorites not found for this user" });
    }

    res.status(200).json(userFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a recipe to user's favorites
const addRecipeToFavorites = async (req, res) => {
  const { userId, resepId } = req.body;

  try {
    const newfavorite = await favorite.findOne({
      where: { userId, resepId },
    });

    if (newfavorite) {
      res.status(400).json({ message: "Favorite already exist" });
    } else {
      await favorite.create({ userId, resepId });
      res.status(200).json({ message: "Resep ditambahkan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a recipe from user's favorites
const removeRecipeFromFavorites = async (req, res) => {
  const { userId, resepId } = req.body;

  try {
    const favoriteToRemove = await favorite.findOne({
      where: { userId, resepId },
    });

    if (favoriteToRemove) {
      await favoriteToRemove.destroy();
      res.status(200).json({ message: "Recipe removed from favorites" });
    } else {
      res.status(404).json({ message: "Favorite not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFavoritesByUser,
  addRecipeToFavorites,
  removeRecipeFromFavorites,
};
