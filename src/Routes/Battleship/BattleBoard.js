import React from 'react';
import './BattleBoard.css';

const battleboard = (props) => {
    return (
    <div>
        <table className='bboard'>
            <tbody>
                <tr className='brow'>
                    <td className='bcell' id='1' onClick={props.clicked} ></td>
                    <td className='bcell' id='2' onClick={props.clicked} ></td>
                    <td className='bcell' id='3' onClick={props.clicked} ></td>
                    <td className='bcell' id='4' onClick={props.clicked} ></td>
                    <td className='bcell' id='5' onClick={props.clicked} ></td>
                </tr>
                <tr className='brow'>
                    <td className='bcell' id='6' onClick={props.clicked} ></td>
                    <td className='bcell' id='7' onClick={props.clicked} ></td>
                    <td className='bcell' id='8' onClick={props.clicked} ></td>
                    <td className='bcell' id='9' onClick={props.clicked} ></td>
                    <td className='bcell' id='10' onClick={props.clicked} ></td>
                </tr>
                <tr className='brow'>
                    <td className='bcell' id='11' onClick={props.clicked} ></td>
                    <td className='bcell' id='12' onClick={props.clicked} ></td>
                    <td className='bcell' id='13' onClick={props.clicked} ></td>
                    <td className='bcell' id='14' onClick={props.clicked} ></td>
                    <td className='bcell' id='15' onClick={props.clicked} ></td>
                </tr>
                <tr className='brow'>
                    <td className='bcell' id='16' onClick={props.clicked} ></td>
                    <td className='bcell' id='17' onClick={props.clicked} ></td>
                    <td className='bcell' id='18' onClick={props.clicked} ></td>
                    <td className='bcell' id='19' onClick={props.clicked} ></td>
                    <td className='bcell' id='20' onClick={props.clicked} ></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default battleboard;