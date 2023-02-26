const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Todo = require("../models/Todo");
const { isAuth } = require("../controllers/AuthController");
const {
  getAllLists, getSingleList, createNewList, deleteOneList,
  addTodo, deleteTodo, deleteItemInTodo, addItem,addItemInTodo,
  deleteItem, markDone, markDoneInTodo, changeStatusTodo,
  getSingleTodo, addDescription
} = require("../controllers/ListController");




router.get("/:listId", isAuth, getSingleList );
router.post("/", isAuth, createNewList);

router.delete("/:listId", isAuth, deleteOneList );


router.get("/:listId/todo/:todoId", isAuth, getSingleTodo );
router.post("/:listId", isAuth, addTodo );

router.delete("/:listId/todo/:todoId", isAuth, deleteTodo );


router.post("/checklist/:listId", isAuth, addItem );

router.post("/:listId/todo/:todoId", isAuth, addItemInTodo );

router.put("/:listId/todo/:todoId", isAuth, changeStatusTodo );


router.put("/:listId/item/:itemId", isAuth, markDone );


router.put("/:listId/todo/:todoId/item/:itemId", isAuth, markDoneInTodo );

router.delete("/:listId/item/:itemId", isAuth, deleteItem );

router.delete("/:listId/todo/:todoId/item/:itemId", isAuth, deleteItemInTodo );

router.put("/:listId/todo/:todoId/desc", isAuth, addDescription );


module.exports = router;
