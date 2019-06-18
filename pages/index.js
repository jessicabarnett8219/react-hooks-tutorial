import React, { useState } from "react";

const inputElement = () => {

    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([])

    return <div>
        <input
        placeholder="Enter some text"
        onChange={(e) => {
            setInputText(e.target.value)
            setHistoryList([...historyList, e.target.value])
        }} /><br/>
        {inputText}
        <ul>
            {historyList.map((record) => {
                return <div>{record}</div>
            })}
        </ul>
        </div>
}

export default inputElement