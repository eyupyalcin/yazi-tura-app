import React from 'react'
import "./CoinStyles.css"



const Coin = (props) => {
    const { currentStatus, donuyor } = props;
    return (
        <div className="Coin-container">
            <div className={`Coin ${donuyor ? "Coin-rotate " : ""}`} >
            <img src={require("../1-lira-tura.png")} alt="Tura" className={
                props.currentStatus == "YAZI" ? "Coin-back" : "Coin-front"
            } />
            <img src={require("../1-lira-yazi.png")} alt="Yazi" className={
                props.currentStatus == "YAZI" ? "Coin-front" : "Coin-back"
            } />
            
           
        </div>
        

        </div >
    )
}
export default Coin;
