"use server";
import CryptoJS from "crypto-js";
import fs from "fs";

// Decryption function
export async function decryptJSON(key, filePath) {
  try {
    // Read file content
    if (!fs.existsSync(filePath)) {
      console.log("File does not exist!");
      return [];
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    const encryptedDataArray = JSON.parse(fileContent);

    // Decrypt each entry
    const decryptedData = encryptedDataArray.map((encryptedData) => {
      const bytes = CryptoJS.AES.decrypt(encryptedData, key);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    });

    return decryptedData;
  } catch (err) {
    console.error("Error decrypting data:", err);
    return [];
  }
}
