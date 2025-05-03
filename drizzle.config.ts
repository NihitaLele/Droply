import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';

dotenv.config({path : ".env.local"})

if(!process.env.DATABASE_URL){
    throw new Error("Database url is not set in .env.local")
}

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  //optional
  migrations : {
    table : "__drizzle_migration",  //while migrating this is gonna name the tables/files as this name
    schema : "public" 
  },
  verbose : true, //will show all the things behind the scene 
  strict : true, //gives a pop up asking should it really do a thing
});
