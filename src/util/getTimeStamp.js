export function getTimeStamp()
    {

    const now = new Date(); // Get current date and time

    // Date
    const date = now.getDate(); // Day of the month (1-31)
    const month = now.getMonth() + 1; // Month (0-11, so add 1)
    const year = now.getFullYear(); // Full year (e.g., 2024)

    // Day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()]; // Day of the week (0-6)

    // Time
    const hours = now.getHours(); // Hours (0-23)
    const minutes = now.getMinutes(); // Minutes (0-59)
    const seconds = now.getSeconds(); // Seconds (0-59)

    // Format time with AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    return `${date}-${month}-${year},${day},${formattedHours}:${minutes}:${seconds} ${ampm}`

    }
