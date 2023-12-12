const mysql = require("mysql2")

export async function query({ query, values = []}){
    const connection = mysql.createConnection({
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
    });

    try {
        const [results] = await connection.execute(query, values);
        connection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return { error };
    }
}
