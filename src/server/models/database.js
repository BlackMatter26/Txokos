const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'txokosdb.cdianfbzfzwh.us-west-1.rds.amazonaws.com',
  user: 'PinkArmadillo',
  password: 'txokospfa26',
  port: '3306',
  database: 'PinkArmadillo',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
