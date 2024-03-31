import Card1 from './card';
import { Poppins,Inter } from 'next/font/google';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';

const poppins = Poppins({ subsets: ['latin'],weight:'700', });
const inter = Inter({ subsets: ['latin'],weight:'600', });

export default function Sport(){
    return(
        <div className='m-[100px]'>
            <h1 className={poppins.className}><spam className="border-b-2 border-blue text-2xl">Sports</spam></h1>
            <div className='flex gap-4 flex-wrap'>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
                <Card2></Card2>
                <Card4></Card4>
            </div>
            <div className='flex justify-center mt-12 '>
                <button className={inter.className} class='rounded border-none bg-buttonblu px-[30px] py-[10px] text-[13px] drop-shadow-lg hover:bg-buttonhover'>See more</button>
            </div>
             </div>
    )
}