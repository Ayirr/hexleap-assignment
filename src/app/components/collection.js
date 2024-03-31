import { Poppins } from "next/font/google";
import Image from "next/image";
import Ticket1 from "./ticket1";
import Ticket2 from "./ticket2";

const poppin=Poppins({subsets:['latin'],weight:'700'})

export default function Collection(){
    return(
        <div className="collection m-20">
            <div className="p-20">
                <div className={poppin.className} class='text-[50px] font-bold flex justify-center'>Collection Spotlight</div>
                <p className="flex justify-center break-normal p-10 text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className="flex justify-center">
                    <button className="border border-[#2C9CF0] h-10 mt-72 mr-20 py-5 px-3 flex flex-col justify-center align-center hover:scale-105"><Image src="/left.svg" width={10} height={5} className=""/></button>
                    <div className="flex gap-10">
                        <Ticket1/>
                        <Ticket2/>
                        <Ticket1/>
                    </div>
                    <button className="border border-[#2C9CF0] flex flex-col justify-center mt-72 ml-20 h-10 py-5 px-3 hover:scale-105"><Image src='/right.svg' width={10} height={5} className=""/></button>
                </div>
            </div>        
        </div>
    )
}