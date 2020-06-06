// Importar a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

// Criar o objeto de banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// Utilizar o objeto de banco de dados
db.serialize(() => {
  // // Utilizando comandos SQL:
  
  // // 1 Criar uma tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     adress TEXT,
  //     adress2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `)

  // // 2 Inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     adress,
  //     adress2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `
  // const values = [
  //   'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  //   'Paperside',
  //   'Guilherme Gemballa, Jardim América',
  //   'Nº 260',
  //   'Santa Catarina',
  //   'Rio do Sul',
  //   'Papéis e Papelão'
  // ]

  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log('Cadastrado com sucesso')
  //   console.log(this)
  // }

  // db.run(query, values, afterInsertData)

  // 3 Consultar dados na tabela
  db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log('Aqui estão seus registros')
    console.log(rows)
  })

  //4 Deletar dados na tabela
  // db.run(`DELETE FROM places WHERE id = ?`, [5], function(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log('Registro deletado com sucesso')
  // })
})