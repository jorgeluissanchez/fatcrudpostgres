const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'jorge789',
    database: 'fatmeter'
});

//read by id
const readById = async (req, res) => {
    //variables
    const id = parseInt(req.params.id);
    const query = 'SELECT * FROM users WHERE id = $1';

    //pool
    const response = await pool.query(query, [id]);

    //output
    res.json(response.rows);
};

//create
const create = async (req, res) => {
    //variables
    const { name, age, weight, height, gender } = req.body;
    const query = 'INSERT INTO users (name, age, weight, height, gender) values ($1, $2, $3, $4, $5);';
    const values = [name, age, weight, height, gender];

    //pool
    const response = await pool.query( query, values );

    //output
    res.json('User Added successfully')
};

//read
const read = async (req, res) => {
    //variables
    const query = 'SELECT * FROM users ORDER BY id ASC';

    //pool
    const response = await pool.query(query);

    //output
    res.status(200).json(response.rows);
};

//update
const updateById = async (req, res) => {
    //variables
    const id = parseInt(req.params.id);
    const { name, age, weight, height, gender } = req.body;
    const query = 'UPDATE users SET name = $1, age = $2, weight = $3, height = $4, gender = $5 WHERE id = $6';
    const values = [name, age, weight, height, gender, id];

    //pool
    const response = await pool.query(query, values);

    //output
    res.json('User Updated Successfully');
};

//delete
const deleteById = async (req, res) => {
    //variables
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM users WHERE id = $1';

    //pool
    await pool.query( query, [id]);

    //output
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    read,
    create,
    readById,
    updateById,
    deleteById
};