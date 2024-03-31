import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins=Poppins({subsets:['latin'],weight:'500'});
const poppinsS=Poppins({subsets:['latin'],weight:'400'});

export default function Ticket1(){
    return(
        <card className={poppins.className} class="flex flex-col justify-center align-center text-[17px] mt-12 p-3 w-[237px] hover:scale-105 hover:duration-500 hover:drop-shadow-2xl">
            <Image src="/ticket1.jpeg" width={226} height={401} className=" border-b-2 pb-4 border-[#818A97] border-dashed"/>
            <div className="">
                <div className="p-4 text-[17px] flex justify-center">Las Vegas Aviators</div>
                <div className={poppinsS.className} >
                    <div className="scoreH p-2 text-[14px] flex justify-center text-[#DFDFDF]">OCT 15 | SUN | 4:30 PM</div>
                    <div className="scoreH p-2 text-[14px] flex justify-center text-[#DFDFDF] break-normal text-center">Las Vegas Ballpark, Las Vegas, Nevada</div>
                </div>
                <div className="flex justify-center align-center item-center">
                    <button className=" text-[12.73px] text-white bg-black p-3 px-10 text-center hover-bg-blackhover">Take Flight Collection</button>
                </div>
            </div>
        </card>
    )
}