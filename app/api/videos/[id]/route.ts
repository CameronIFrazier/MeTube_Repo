import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("API called with params:", id);

  const videoId = id ? parseInt(id) : null;

  if (!videoId) {
    console.error("Missing video id in request");
    return NextResponse.json({ error: "Missing video id" }, { status: 400 });
  }

  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      port: parseInt(process.env.MYSQLPORT || "3306"),
      connectTimeout: 5000,
    });

    console.log("DB connected successfully");

    const [rows] = await connection.execute(
      "SELECT * FROM videos WHERE id = ?",
      [videoId]
    );

    console.log("Query result:", rows);

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json((rows as any[])[0]);
  } catch (err) {
    console.error("DB connection or query failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}