import { getSQLServerPool } from "@/lib/db";
import { IUser } from "@/types/User";

export async function findUserByUsername(username: string): Promise<IUser | null>{
    const pool = await getSQLServerPool()
    const sql = `SELECT * from dbo.Users WHERE username = @username`

    try {
        const result = await pool
            .request()
            .input('username', username)
            .query(sql)
        return result.recordset[0] as IUser
    } catch (error) {
        console.log(error)
        return null
    }
}