import { useState } from 'react';
import circle from './assets/circle.png'
import cross from './assets/cross.png'
import './TicTacToe.css'


function TicTacToe() {

    const [data, setData] = useState(["","","","","","","","",""]);
    const [lock, setLock] = useState(false);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("Player X's turn");

    const toggle = (index) => {
        if(lock || data[index] != "") return;

        const newData = [...data];
        newData[index] = count % 2 === 0? "x" : "o";
        setData(newData);
        
        const result = checkWinner(newData);

        if(!result){
            const nextCount = count+1;
            setCount(nextCount);
            setStatus(`Player ${count%2==0?"O":"X"}'s Turn`);
        }
    }

    const checkWinner = (board) => {
        const wins = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]    
        ]

        for (let combo of wins){
            const [a,b,c] = combo;
            if(board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
                setLock(true);
                setStatus(`Player ${board[a].toUpperCase()} Wins!`);
                //alert("Winner found")
                return "win";
            }
        }
        if(!board.includes("")){
                setLock(true);
                setStatus("It's a Draw");
                //alert("Draw");
                return "draw"
        }
        return null;
    }

    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setStatus("Player X's Turn");
        setLock(false);
    }


    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe</h1>
            <h2 className="status">{status}</h2>
            <div className="board">
                {
                    data.map((val, index) => (
                        <div className="boxes" key={index} onClick={() => toggle(index)}>
                            {val === "x" && <img src={cross} alt="X"/>}
                            {val === "o" && <img src={circle} alt="O"/>}
                        </div>
                    ))
                }
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    )
}

export default TicTacToe;