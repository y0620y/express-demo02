var express = require('express');
var router = express.Router();
var maxId=2;
var books = [{_id: 1, name: "book1", price: 235}, {_id: 2, name: "book2", price: 400}];
router.route('/')
    .get(function (req, res) {
        res.json(books)
    })
    .post(function (req,res) {
       let book= req.body;
       book._id=++maxId
       books.push(book)
        res.json(book)
    })
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    let index=books.findIndex(book=>book._id==id)
    books.splice(index,1)
    res.json({})
})

module.exports = router;
