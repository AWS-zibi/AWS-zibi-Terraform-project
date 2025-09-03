import { Client } from "pg";

let client;

export async function getClient() {
  if (!client) {
    client = new Client({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: "postgres", // or your DB name
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    await client.connect();
    console.log("✅ Connected to RDS");
  }
  return client;
}
