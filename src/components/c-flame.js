"use client"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import banner from "@/images/flames.png"
export default function FlameComponent() {

    const [name1, setname1] = useState("")
    const [name2, setname2] = useState("")
    const [result, setresult]  = useState("")
    const [modal, setmodal] = useState("hidden")

    function getResult() {
        fetch('api/api-flames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Your data here
                "name1": name1,
                "name2": name2,
                "app": "flames-finder"
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response if it's JSON
            })
            .then(data => {
                // Handle the response data here
                setresult(data.result)
            })
            .catch(error => {
                // Handle any errors here
                console.error('Error:', error);
            });
    }

    useEffect(()=>{
        if (result !=""){
            setmodal("block")
        }
    },[result])

    return (
        <>

            <div class=" flex justify-center items-center lg:h-screen">

                <div class="grid lg:grid-cols-2 grid-col-1 lg:m-20 rounded-[8px]">

                    <div class="col ">
                        <Image src={banner} height={500} width={500} alt="banner-images" />
                    </div>
                    <div class="col p-8 rounded-[8px] bg-white flex flex-col gap-4 justify-center items-center">


                        <div class="text-4xl lg:text-6xl font-black text-red-950">
                            Find What The Relationship Is! <i class="fa-solid fa-heart text-red-500"></i>
                        </div>
                        <div id="doflame" class="flex flex-col gap-2 w-full" >
                            <label for="name1" class="text-md font-semibold">Your Name</label>
                            <input onChange={(e) => { setname1(e.target.value) }} type="text" id="name1" class="p-4 bg-red-200" placeholder="Eg:James" required />

                            <label for="name2" class="text-md font-semibold">Partner Name</label>
                            <input onChange={(e) => { setname2(e.target.value) }} type="text" id="name2" class="p-4 bg-red-200" placeholder="Eg:Clara" required />

                            <button onClick={() => { getResult() }} class="bg-red-500 mt-2 rounded-[8px] font-bold text-2xl text-red-50 py-4 px-4">CalculatecFLAMES <i class="fa-solid fa-fire"></i></button>
                            <br />
                            <br />
                        </div>
                        <div id="result" className={`${modal} absolute h-screen w-screen bg-white/20 top-0 left-0`}>
                            <div class="h-full w-full flex justify-center items-center">
                                <div class="h-[300px] w-[300px] lg:h-[300px] lg:w-[300px] z-10 rounded-[8px] bg-white border-2 shadow-lg">
                                    <button onClick={()=>{setmodal("hidden");setresult("")}} id="close" class="text-red-900 p-2 float-right"><i
                                        class="fa-solid fa-xmark fa-xl"></i></button>
                                    <div class="flex flex-col p-4 h-[60%] items-center justify-center w-full">
                                        <span id="words" class="text-8xl font-black uppercase">{result[0]}</span>
                                        <span id="relbar" class="text-2xl font-semibold">{result}</span>
                                        <span id="err" class="text-2xl font-semibold"></span>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>



                </div>

            </div>

            

        </>
    )
}