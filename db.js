const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta al archivo de la base de datos
const dbPath = path.resolve(__dirname, 'database.db');

// Conexión a la base de datos SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Crear la tabla 'usuarios' si no existe
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL
)`);

module.exports = db;
