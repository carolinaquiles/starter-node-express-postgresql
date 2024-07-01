const knex = require("../db/connection");

function create(req, res, next) {
    suppliersService
      .create(req.body.data)
      .then((data) => res.status(201).json({ data }))
      .catch(next);
  }

  function read(supplier_id) {
    return knex("suppliers").select("*").where({ supplier_id }).first();
  }
  
  function update(updatedSupplier) {
    return knex("suppliers")
      .select("*")
      .where({ supplier_id: updatedSupplier.supplier_id })
      .update(updatedSupplier, "*");
  }  
  module.exports = {
    create,
   read,
   update,
  };
