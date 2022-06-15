import React from 'react'
function Btn({ type, btnType, text }) {
    return (
        <button type={type} className={`'btn' btn-${btnType}`}>{text}</button >
    )
};

export default Btn