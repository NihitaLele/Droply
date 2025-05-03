import { drizzle } from 'drizzle-orm/neon-http';
import {neon} from "@neondatabase/serverless"

import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, {schema}) //connection via drizzle(if we want to fire via drizzle, adding, connecting)

export {sql} //whenever we want to fire up raw sql queries