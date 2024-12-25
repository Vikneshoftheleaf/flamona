import { NextResponse } from "next/server";
import { decryptJSON } from "@/util/decryption";
export async function POST(request) {
    const { key } = await request.json()
    const filePath = "src/junk/junk.json";
    const res = decryptJSON(key, filePath);
    return NextResponse.json(res)
}