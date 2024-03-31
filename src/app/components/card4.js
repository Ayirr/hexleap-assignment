'use client'
import Image from "next/image"
import { Inter } from 'next/font/google';

const inter=Inter({subsets:['latin'],weight:'600'})
const interS=Inter({subsets:['latin'],weight:'400'})


export default function Card4(){
    return(
        <card className={inter.className} class="flex flex-col mt-12 p-2 w-[237px] cursor-pointer">
            <Image src="/ad.jpeg" width={217} height={385}/>
            <div>
                <div className="p-2 text-[20px]">Advertisement Title</div>
                <div className={interS.className} class=' px-5 text-[12.8px] flex break-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </card>
    )
}