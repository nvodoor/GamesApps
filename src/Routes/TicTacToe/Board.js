import React from 'react'
import './Board.css';

const Board = (props) => {
    // console.log(props.clicked)
    return (
        <div>
            <table className='tboard'>
                <tbody>
                    <tr className='trow'>
                        <td className='tcell' id='1' onClick={props.clicked} ></td>
                        <td className='tcell' id='2' onClick={props.clicked} ></td>
                        <td className='tcell' id='3' onClick={props.clicked} ></td>
                    </tr>
                    <tr className='trow'>
                        <td className='tcell' id='4' onClick={props.clicked} ></td>
                        <td className='tcell' id='5' onClick={props.clicked} ></td>
                        <td className='tcell' id='6' onClick={props.clicked} ></td>
                    </tr>
                    <tr className='trow'>
                        <td className='tcell' id='7' onClick={props.clicked} ></td>
                        <td className='tcell' id='8' onClick={props.clicked} ></td>
                        <td className='tcell' id='9' onClick={props.clicked} ></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board;