const {
  getCustomerGroceryList,
  createUser,
  updateUser,
  deleteUser,
  findUsers,
  validatePassWord,
  generateAccessTokens,
  generatePasswordResetToken,
  validateToken,
  findUser,
} = require("./user.js");
const {
  getMeals,
  getMeal,
  createMeal,
  getSuggestedMeals,
  removeSuggestedMeal,
  createMealFromSuggestion,
  addMealSuggestion,
  updateSuggestedMealItem,
  deleteMeal,
  updateMeal,
} = require("./meal");

const {
  getAllProducts,
  getStoreProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("./product");

const {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require("./category");

const {
  getAllDescriptions,
  createDescription,
  updateDescription,
  getDescription,
  deleteDescription,
} = require("./description");


const {
  getAllStores,
  createStore,
  updateStore,
  getStore,
  deleteStore,
} = require("./store");

const {
  getMealsCount,
  getProductsCount,
  getUsersCount,
  getCategoriesCount,
  getSuppliersCount,
  getOrdersCount,
  getMeasurementsCount,
  getGroceryListsCount,
  getInventoriesCount,
} = require("./analytics");

const {
  getInventories,
  getInventory,
  updateInventory,
  deleteInventory,
  createInventory,
} = require("./inventory");

const { createMeasurement } = require("./measurement");

module.exports = {
  getCustomerGroceryList,
  findUser,
  createUser,
  generateAccessTokens,
  validatePassWord,
  generatePasswordResetToken,
  updateUser,
  deleteUser,
  findUsers,
  validateToken,
  getMeals,
  getMeal,
  getSuggestedMeals,
  removeSuggestedMeal,
  createMealFromSuggestion,
  addMealSuggestion,
  updateSuggestedMealItem,
  getAllCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
  getAllDescriptions,
  createDescription,
  updateDescription,
  getDescription,
  deleteDescription,
  getAllProducts,
  getStoreProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  createMeal,
  deleteMeal,
  updateMeal,
  getAllStores,
  createStore,
  updateStore,
  getStore,
  deleteStore,
  getMealsCount,
  getProductsCount,
  getUsersCount,
  getCategoriesCount,
  getSuppliersCount,
  getOrdersCount,
  getMeasurementsCount,
  getGroceryListsCount,
  getInventoriesCount,
  getInventories,
  getInventory,
  updateInventory,
  deleteInventory,
  createInventory,
  createMeasurement,
  createCategory,
};
