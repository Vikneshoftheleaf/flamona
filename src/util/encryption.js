"use server";
import CryptoJS from "crypto-js";
import fs from "fs";

// Encryption function
export async function encryptAndSaveJSON(data, key, filePath) {
  try {
    // Encrypt data
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();

    // Check if file exists
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      if (fileContent.trim()) {
        existingData = JSON.parse(fileContent);
      }
    }

    // Append new data
    existingData.push(encryptedData);

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");
    console.log("Data saved successfully!");
  } catch (err) {
    console.error("Error saving data:", err);
  }
}
