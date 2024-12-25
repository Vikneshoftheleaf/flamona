import { decryptJSON } from "@/util/decryption"
export default async function Junk() {
    const key = "goodguy"
    const filePath = "src/junk/junk.json";
    const data = await decryptJSON(key, filePath);
    return (
        <>
        <div className={` bg-gray-500}`}>
            {data !=null ? (
                <ul className="grid p-4 lg:grid-cols-4 grid-cols-1 gap-6 list-disc  bg-gray-50 ">
                    {data.map((item, index) => (
                        <ul key={index} className="mb-2 bg-white p-4 rounded-md shadow-md flex flex-col items-start gap-2 border-2">
                            <li className="text-center">{item.timeStamp}</li>
                            <hr />
                            <li>P1: {item.name1}</li>
                            <li>P2: {item.name2}</li>
                            <li>App: {item.app}</li>
                            <li className="inline-flex bg-green-400 rounded-full px-2 py-1 ">Result: {item.result}</li>
                        </ul>
                    ))}
                </ul>
            ) : (
                <p>No data available</p>
            )}
        </div>
        </>

    )
}