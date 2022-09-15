import "./Calculator.scss"
import { useEffect, useState } from "react";

function Calculator() {

    const [message, setMessage] = useState("");
    const [topMessage, setTopMessage] = useState("");





    //işlem önceliği vermem lazım
    // son girilen operatörü yazması lazım+++++
    //tüm işlemi sonuç veririken inputun üstünde göstermesi++


    const operatorler = ["/", "*", "+", "-"]
    const operatorNokta = ["."]
    const sıfırDegeri=["0"]

    const operatorControl = (yeniEleman) => {

        let mesajSonuOperatorMu = false;
        operatorler.forEach(operator => {

            if (message[message.length - 1] === operator) {

                mesajSonuOperatorMu = true
            }

        });

        if (mesajSonuOperatorMu === true) {

            let yeniMesaj = message;
            setMessage(yeniMesaj.slice(0, -1) + yeniEleman)

        } else {

            setMessage(
                old => old + yeniEleman
            )
        }



    }

    


    const createDigits = () => {

        const digits = [];

        for (let i = 1; i < 10; i++) {

            digits.push(
                <button key={i}
                    onClick={() => {
                        setMessage((old) => old + ('' + i));
                    }}>{i}</button>
            )
        }
        return digits;

    }


    return (
        <div className="calculator-component ">

            <div className="calculator-page">
                <div className="display1">
                    {topMessage}
                </div>
                <div className="display">
                    {message || 0}
                </div>

                <div className="operators">
                    {operatorler.map((operator, index) => {
                        return (
                            <button key={index} onClick={() => {
                                operatorControl(operator);
                            }}

                            >{operator}</button>
                        )

                    })}

                    <button onClick={() => {
                        return (setMessage("") + setTopMessage(""))
                    }} >DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                   {
                    sıfırDegeri.map((sıfır, index) => {
                        return <button key={index} onClick={() => { setMessage((old) => { return old + sıfır }) }}>{sıfır}</button>
                    })
                   }
                    {
                        operatorNokta.map((operator, index) => {
                            return <button key={index} onClick={() => { setMessage((old) => { return old + operator }) }}>{operator}</button>
                        })
                    }
                    <button onClick={() => {
                        setMessage(old => eval(old));
                        setTopMessage(message + ' = ' + eval(message));
                    }}>=</button>
                </div>



            </div>
        </div>
    )
}

export default Calculator;