"use server"
import { sql } from '@vercel/postgres';
 
export default getUserHandler = async () => {
    const likes = 100;
const { rows, fields } =
  await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT 5;`;


  if(!rows[0]){
    return {
      error : "User not found"
    }

  }

  return rows;
}