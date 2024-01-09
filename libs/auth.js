import { jwtVerify  } from "jose";

const getJwtSecretKey = () => {
  const secretKey = process.env.JWT_SECRET_KEY;

  if(!secretKey){
    throw new Error("JWT Secret key is not matched");
  }

  return new TextEncoder().encode(secretKey);
}

export async function verifyJwtToken(token){
  try{
    const { payload } = await jwtVerify(token, getJwtSecretKey())
    return payload;
  }catch(error) {
    return null;
  }
}