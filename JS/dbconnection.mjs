import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'mydb',
});


function estbConnection(){
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});
}

function closeDbConn(){
    connection.end((err) => {
        if (err) {
          console.error('Error closing the database connection: ' + err.stack);
          return;
        }
        console.log('Connection closed.');
      });
      
}

estbConnection();
closeDbConn();