
exports.up = function(knex) {
    return knex.schema.createTable('promocoes', function (table) {
        table.increments();  //é do Knex, cria chave primaria auto incremente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('empresas_id').notNullable(); //relacionamento

        table.foreign('empresas_id').references('id').inTable('empresas')  //chave estrangeira,chave primaria

        
  });

};

exports.down = function(knex) {
  return knex.schema.dropTable('promocoes');
};
