import Database from "better-sqlite3";

const db=new Database('app.db');


const stmt = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT ,
    name TEXT NOT NULL,
    age INTEGER 
    )
    `).run();

const insert= db.prepare( `
    INSERT INTO users (id,name,age) VALUES (?,?,?)`);


 

    // insert.run(1,'SHADAB',34);
    // insert.run(2,'ASIF',23);



    const AllDataShow= db.prepare(`
        SELECT * FROM users`).all();

    const query2=`SELECT * FROM users`;
    const name=`SELECT * FROM users WHERE name = ?`;
    const updateName=`UPDATE users SET name = ? WHERE id = ?`

    const lastindex=AllDataShow[AllDataShow.length-1].id;

    // console.log(lastindex);
    
    // insert.run(lastindex+1,'Tanya',22);

    // const row = db.prepare('SELECT * FROM users WHERE name = ?').get('Alice');
    // console.log(row); // Outputs: { id: 1, name: 'Alice', age: 25 }

    // console.log(db.prepare(query2).all());
    // console.log(db.prepare(name).get('Tanya'));
    console.log(db.prepare(updateName).run('Abid',5));
    console.log(db.prepare(query2).all());


    
    
