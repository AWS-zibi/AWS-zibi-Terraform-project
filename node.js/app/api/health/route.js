import { getClient } from "@/lib/db";

export async function GET() {
  try {
    const client = await getClient();
    const result = await client.query("SELECT NOW()"); // test query

    return Response.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    console.error("❌ DB error:", err);
    return Response.json({ status: "error", message: err.message }, { status: 500 });
  }
}
