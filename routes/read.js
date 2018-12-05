var express = require ('express');
var manage = require('todolist_1');
var router = express.Router();


var toDoList = []
toDoList.push(manage.addToDo("a simple to do", "fare la pasta", "caio"));
toDoList.push(manage.addToDo("a simple to do", "fare la pasta", "tizio"));
toDoList.push(manage.addToDo("a simple to do", "fare la pasta", "sempronio"));
toDoList.push(manage.addToDo("a simple to do", "fare la pasta", "giuseppe"));

router.get("/todo", function(req, res){
    if((req.query.user == undefined)){
        return res.status(200).json({"toDoList": manage.getToDoList()});
    }
    else            
        if(req.query.user != undefined){
            return res.status(200).json({"message": manage.getListByUser(req.query.user)});
        }
})

router.get("/users", function(req, res){
    res.status(200).json({"users": manage.getUsers()});
})

router.get("/status", function(req, res){
    res.status(200).json({"status": manage.getListByStatus(req.query.completed)});
})

module.exports = router;