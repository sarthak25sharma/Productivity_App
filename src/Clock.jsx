import React,{useState,useEffect} from "react";
function Clock(){
    const[time,setTime]=useState(new Date());
    useEffect(()=>{
        const intervalId =setInterval(() =>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        const merd=hours >=12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds}:${merd}`
    }
    
    return(<div className=" flex-1 clock-container">
            <div className=" text-9xl clock m-20">
                <span>{formatTime()}</span>
            </div>
        </div>);
}
export default Clock