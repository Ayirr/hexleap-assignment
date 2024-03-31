'use client'
import Image from "next/image"
import { Inter } from 'next/font/google';

const inter=Inter({subsets:['latin'],weight:'500'})
const interS=Inter({subsets:['latin'],weight:'400'})



export default function Card1(){
    return(
        <card className={inter.className} class="flex flex-col mt-12 p-2 w-[237px] ">
            <Image src="/player1.jpeg" width={217} height={385} className="hover:scale-105 hover:duration-500 hover:drop-shadow-2xl"/>
            <div>
                <div className=" p-2 text-[17px] cursor-pointer ">Sacramento River Cats</div>
                <div className='cursor-pointer score p-2 '>
                    <div className={interS.className} class="scoreH text-[12px] flex justify-start gap-10">
                        <div>Total events</div>
                        <div>Sport</div>
                    </div>
                    <div className="text-[14px] flex justify-start gap-11">
                        <div>48 events</div>
                        <div>Basketball</div>
                    </div>
                </div>
            </div>
        </card>
    )
}