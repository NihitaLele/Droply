import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless"

import * as dotenv from "dotenv"

dotenv.config({path : ".env.local"})

if(!process.env.DATABASE_URL){
    throw new Error("Database url is not set in .env.local")
}

//npx drizzle-kit migrate(can directly run this), if not 

//custom migration function(can create a custom migration by ourselves) 
async function runMigration() {
    try{
        const sql = neon(process.env.DATABASEURL!)
        const db = drizzle(sql)

        await migrate(db, {migrationsFolder : "./drizzle"})
        console.log("All migartions are successfully done")
    }catch(error){
        console.log("All migartions are not successfully done")
        process.exit(1)
    }
}
runMigration()