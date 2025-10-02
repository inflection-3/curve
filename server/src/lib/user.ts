import { db } from "../db/connection";
import { users } from "../db/schema";
import type { InferInsertModel } from "drizzle-orm";


export const getUserByDynamicId = async (dynamicId: string) => {
    const user = await db.query.users.findFirst({
        where: (table, {and, eq}) => and(eq(table.dynamicId, dynamicId))
    })
    return user
}


type UserInsert = InferInsertModel<typeof users>
export const createUser = async (userInsert: UserInsert) => {
    const [newUser] = await db.insert(users).values(userInsert).returning()
    return newUser
}