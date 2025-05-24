import { useState } from "react"


export default function LudoBoard(){
    let [move,setMove]=useState({blue:0,yellow:0,green:0,red:0});
    let [arrB,SetArrB]=useState(["no move"]);
    let [arrY,SetArrY]=useState(["no move"]);
    let [arrG,SetArrG]=useState(["no move"]);
    let [arrR,SetArrR]=useState(["no move"]);

    let updateBlue =()=>{
        console.log(`moves.blue = ${move.blue}`);
        setMove((prevMove)=>{
            return {...prevMove, blue: prevMove.blue+1 };
        });

        SetArrB((prevArr)=>{
            return [...prevArr,", blue moves "]});
        console.log(arrB);
    }
    let updateYellow =()=>{
        console.log(`moves.yellow = ${move.yellow}`);
        setMove((prevMove)=>{
            return {...prevMove, yellow: prevMove.yellow+1 };
        });
        
        SetArrY((prevArr)=>{
            return [...prevArr,", yellow moves "]});
        console.log(arrY);
    }
    let updateGreen =()=>{
        console.log(`moves.green = ${move.green}`);
        setMove((prevMove)=>{
            return {...prevMove, green: prevMove.green+1 };
        });
        
        SetArrG((prevArr)=>{
            return [...prevArr,", green moves "]});
        console.log(arrG);
    }
    let updateRed =()=>{
        console.log(`moves.Red = ${move.red}`);
        setMove((prevMove)=>{
            return {...prevMove, red: prevMove.red+1 };
        });
        
        SetArrR((prevArr)=>{
            return [...prevArr,", red moves "]});
        console.log(arrR);
    }
    return (
        <div>
            <p>
                Game Begins!
            </p>
            <div className="board" style={{border:"2px solid white",width:"100%" ,height:"100%in",boxSizing:"border-box"}}>
                <p>Blue Moves = {move.blue}</p>
                <p>{arrB} </p>
                <button  style={{backgroundColor:"blue" ,color:"black"} } onClick={updateBlue}> +1 </button>
                <p>Yellow Moves = {move.yellow}</p>
                <p>{arrY} </p>
                <button style={{backgroundColor:"yellow" ,color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {move.green}</p>
                <p>{arrG} </p>
                <button style={{backgroundColor:"green" ,color:"black"}} onClick={updateGreen}>+1</button>
                <p>Red Moves ={move.red}</p>
                <p>{arrR} </p>
                <button style={{backgroundColor:"red" ,color:"black"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}