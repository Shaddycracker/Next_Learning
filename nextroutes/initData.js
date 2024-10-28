// lib/initdb.js

const Database = require('better-sqlite3');
const path = require('path');

// Create or connect to the meals.db database
const db = new Database(path.resolve('meals.db'), { verbose: console.log });

// Create the meals table if it doesn't already exist
const createTable = `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instruction TEXT NOT NULL
  );
`;

// Initialize the database with table and some sample data
function initDB() {
  db.exec(createTable);
  console.log('Table "meals" is ready.');

  // Insert some initial rows into the meals table
  const initData = [
    {
      title: 'Spaghetti Bolognese',
      slug: 'spaghetti-bolognese',
      image: '/images/spaghetti.jpg',
      summary: 'A classic Italian pasta dish with rich meat sauce.',
      instruction: 'Cook pasta, prepare meat sauce, and mix together.'
    },
    {
      title: 'Chicken Curry',
      slug: 'chicken-curry',
      image: '/images/chicken-curry.jpg',
      summary: 'A spicy and flavorful curry dish made with chicken.',
      instruction: 'Cook chicken, add spices, and simmer with coconut milk.'
    },
    {
      title: 'Vegetable Stir Fry',
      slug: 'vegetable-stir-fry',
      image: '/images/vegetable-stir-fry.jpg',
      summary: 'A healthy stir fry made with mixed vegetables.',
      instruction: 'Stir-fry vegetables, add sauce, and serve hot.'
    },
  ];

  const insert = db.prepare(`
    INSERT INTO meals (title, slug, image, summary, instruction)
    VALUES (@title, @slug, @image, @summary, @instruction)
  `);

  initData.forEach((meal) => {
    try {
      insert.run(meal);
      console.log(`Inserted meal: ${meal.title}`);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  });
}

// Call initDB to initialize the database
initDB();

module.exports = db;
