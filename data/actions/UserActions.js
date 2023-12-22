"use server"
// import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';

const cryptoJs = require("crypto-js")




 export async function getUserHandler() {
    const client = await db.connect();

    
  
    const { rows } =
    await client.sql`SELECT * FROM users`;
    

    

    return rows;
    
}

 

export async function registerHandler({ firstName, lastName, username, email, phone, pword }) {
  const client = await db.connect();

  const hashPassword = cryptoJs.AES.encrypt(pword, 'dialoG').toString();

  const { rows } = await client.sql`
    INSERT INTO users (firstName, lastName, username, email, phone, pword)
    VALUES (${firstName}, ${lastName}, ${username}, ${email}, ${phone}, ${hashPassword})
    RETURNING *
  `;

  return rows;
}



export async function loginHandler({ username, pword }) {
    const client = await db.connect();

    const { rows } =
    await client.sql`SELECT * FROM users WHERE username = ${username}`;
    if(!rows[0]){
      console.log("rows yok");
      return 0;
    }

    const hashPassword = rows[0].pword;


  
    var bytes  = cryptoJs.AES.decrypt(hashPassword, 'dialoG');
    var originalText = bytes.toString(cryptoJs.enc.Utf8);

    if(originalText === pword){
      return rows[0];
    }
  else {
    return 0;
  }

}


