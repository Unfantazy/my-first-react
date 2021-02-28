import React, {useState} from "react";


type indicatorPropsType = {
    // on: boolean

}

export function Indicator(props: indicatorPropsType) {


   let [on, setOn] = useState(false )


    const wrapperStyle = {
        display: "flex",
        alignItems: "center",
        height: "100px",
        width: "500px"
    }
    const onStyle = {
        width: "100px",
        height: "40px",
        border: "1px solid #000",
        padding: "2px",
        backgroundColor: on ? "#81D82E" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 600
    }
    const offStyle = {
        width: "100px",
        height: "40px",
        border: "1px solid #000",
        padding: "2px",
        backgroundColor: !on ? "#D71E3E" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 600

    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid #000",
        marginLeft: "5px",
        backgroundColor: on ? "#81D82E" : "#D71E3E",
    }

    return (
        <div className="Indicator" style={wrapperStyle}>
            <div className="Indicator__on" style={onStyle} onClick={() => setOn(true)}>On</div>
            <div className="Indicator__off" style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div className="Indicator__lamp" style={indicatorStyle}></div>
        </div>
    );
}