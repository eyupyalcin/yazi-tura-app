import React, { Component } from 'react'
import "./CoinFlipperStyle.css"
import Coin from './Coin'


const options = ["YAZI", "TURA"]
const getRandomElFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomItem = arr[randomIndex];
    return randomItem;

}
class CoinFlipper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false

        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true
        })
        const rastgeleEleman = getRandomElFromArr(options);

        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false


            })


        }, 1000)


    }


    render() {
        const { currentStatus, donuyor, gelenler } = this.state;
        const yazilar = gelenler.filter(yazi => {
            return yazi == "YAZI"
        })
        const turalar = gelenler.filter(tura => {
            return tura == "TURA"
        })
        return (
            <div className="CoinFlipper">
                <h1>Yazı mı Tura mı? </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor} />
                <button onClick={this.atisYap} className="button">ATIŞ YAP</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus}  GELDİ </h3>
                }


                {
                    <>
                        <div>Toplam Atış: {gelenler.length} </div>
                        <div>Yazı Sayısı :  {yazilar.length}</div>
                        <div>Tura Sayısı : {turalar.length}</div>
                    </>

                }



            </div>
        )
    }
}
export default CoinFlipper
