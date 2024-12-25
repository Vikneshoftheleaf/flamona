import { NextResponse } from "next/server";

import { encryptAndSaveJSON } from "@/util/encryption";
import { getTimeStamp } from "@/util/getTimeStamp";

export async function POST(request) {
    const { name1, name2, app } = await request.json()


    const flamesResult = ["Friends", "Lovers", "Affection", "Marriage", "Enemies", "Siblings"];


    // Remove spaces and convert to lowercase
    let n1 = name1.replace(/\s+/g, "").toLowerCase();
    let n2 = name2.replace(/\s+/g, "").toLowerCase();

    // Remove common letters
    for (let char of n1) {
        if (n2.includes(char)) {
            n1 = n1.replace(char, "");
            n2 = n2.replace(char, "");
        }
    }

    // Count remaining letters
    const count = n1.length + n2.length;

    // Calculate FLAMES index
    let index = (count % flamesResult.length) - 1;
    if (index < 0) index = flamesResult.length - 1;

    const result = { "name1": name1, "name2": name2, "app": app, "result": flamesResult[index], "timeStamp": getTimeStamp() }

    const key = process.env.NEXT_PUBLIC_EN_KEY
    encryptAndSaveJSON(result, key, 'src/junk/junk.json');

    return NextResponse.json(result)


}