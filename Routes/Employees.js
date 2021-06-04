const express = require('express');
const router = express.Router()
var mysqlConnection = require('../mysqlConnection');

//Get all employees
router.get('/', (req, res) => {

    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows)
        }
        else {
            console.log(err);
            res.status(404).send()
        }
    })
});


//Get an employees
router.get('/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an employees
router.delete('/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an employees
router.post('/', (req, res) => {
    let emp = req.body;
    mysqlConnection.query("INSERT INTO employee SET ?", emp, (err, rows, fields) => {
        if (!err)
            res.send('inserted successfully.');
        else
            console.log(err);
    })
});

//Update an employees
router.put('/:id', (req, res) => {
    let emp = req.body;

    mysqlConnection.query("UPDATE employee SET ? WHERE EmpID = ?", [emp, req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});

module.exports = router