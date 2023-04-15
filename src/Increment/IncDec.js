import React, { useState } from "react";
import Inc from "./Inc";
import Dec from "./Dec";
import Clock from 'react-digital-clock';



const IncDec = () => {
    const[count, setCount] = useState(0)

    const Increment= () =>setCount(count+1);
    const Decrement= () =>{
        if(count > 0){
            setCount(count-1)
        }else{
            alert('Count cannot be zero')
            setCount(0)
        }
    }
    return(
        <>
        <div className="w-100 flex justify-center items-center h-screen bg-green-300">
        <div className="overflow-hidden bg-white text-center border-2 w-72 h-80 hover:w-80 rounded-3xl shadow-2xl bg-pink-600 ease-out duration-300">
            <div>
                <h1 className="p-5 text-3xl"  style={{backgroundColor:'#3f51b5'}}>
                <Clock></Clock></h1>
                <h1 className="mb-10 mt-10 h-10 text-6xl flex justify-center items-center" style={{color:'#3f51b5'}}>
                {count}
                </h1>
                <Inc Increment={Increment} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dec Decrement={Decrement}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default IncDec;