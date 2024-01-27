"use server";

// import { sql } from '@vercel/postgres';
import { db } from "@vercel/postgres";

const cryptoJs = require("crypto-js");


// get user by token
export async function getUserByTokenHandler({ token }) {
  const client = await db.connect();
  // ${userid}
  const { rows } = await client.sql`SELECT * FROM users where pword = ${token}`;

}



export async function getUserHandler() {
  const client = await db.connect();

  const { rows } =
  await client.sql`SELECT * FROM users`;

  return rows;

}








export async function registerHandler({
  firstname,
  lastname,
  username,
  email,
  phone,
  pword,
}) {
  const client = await db.connect();

  const hashPassword = cryptoJs.AES.encrypt(pword, "dialoG").toString();

  const { rows } = await client.sql`
    INSERT INTO users (firstName, lastName, username, email, phone, pword)
    VALUES (${firstname}, ${lastname}, ${username}, ${email}, ${phone}, ${hashPassword})
    RETURNING *
  `;

      return rows;
   
}


export async function loginHandler({ username, pword }) {
 
  const client = await db.connect();

  const { rows } =
    await client.sql`SELECT * FROM users WHERE username = ${username}`;
  if (!rows[0]) {
    console.log("rows yok");
    return 0;
  }

  const hashPassword = rows[0].pword;



  var bytes = cryptoJs.AES.decrypt(hashPassword, "dialoG");
  var originalText = bytes.toString(cryptoJs.enc.Utf8);


  if (originalText === pword) {
    return {
      id: rows[0].id,
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      username: rows[0].username,
      email: rows[0].email,
      phone: rows[0].phone,
      success:true,
      token:hashPassword
    };
      
    
  } else {  
    return 0; 
  }
}

 // message handler
export async function messageHandler({ messageid, receiverid, senderid, message, createddate, deletedate, type, messagestatus }) {
  const client = await db.connect();

  const { rows } = await client.sql`
    INSERT INTO message (receiverid, senderid, message, createddate)
    VALUES (${receiverid}, ${senderid}, ${message}, ${createddate})
    RETURNING *
  `;

  return rows;
}