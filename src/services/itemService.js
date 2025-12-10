// src/services/itemService.js
import ItemRepository from "../repositories/itemRepository.js";

const ItemService = {
    createItem: async (data) => await ItemRepository.createItem(data),
    getAllItems: async () => await ItemRepository.getAllItems(),
    getItemById: async (id) => await ItemRepository.getItemById(id),
    updateItem: async (id, data) => await ItemRepository.updateItem(id, data),
    deleteItem: async (id) => await ItemRepository.deleteItem(id)
};

export default ItemService;
