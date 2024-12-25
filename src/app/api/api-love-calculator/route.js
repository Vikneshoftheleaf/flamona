import { NextResponse } from "next/server";
import { encryptAndSaveJSON } from "@/util/encryption";
import { getTimeStamp } from "@/util/getTimeStamp";
export async function POST(request) {
    const { name1, name2, app } = await request.json()
    const combinedNames = (name1 + name2).toLowerCase();
    let score = 0;

    // Generate a value based on character codes
    for (let i = 0; i < combinedNames.length; i++) {
      score += combinedNames.charCodeAt(i);
    }

    // Map the score to a percentage (0–100)
    const percentage = (score % 101).toFixed(0);
    const result = { "name1": name1, "name2": name2, "app": app, "result": `${percentage}%`, "timeStamp": getTimeStamp() }
    const key = process.env.NEXT_PUBLIC_EN_KEY
    encryptAndSaveJSON(result, key, 'src/junk/junk.json');

    return NextResponse.json(result)
}