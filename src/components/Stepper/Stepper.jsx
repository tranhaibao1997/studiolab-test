import React,{useState} from 'react'
import Step from '../Step/Step'
import { useEffect } from 'react';
export default function Stepper() {

    useEffect(()=>{
        setStep(1);
    },[])
    var [step,setStep]=useState(1);
    function chooseStep(stepNum)
    {
           setStep(stepNum);
    }
    console.log(step)

    return (
        <>
            <div className="stepper-container">
                <div className="stepper">
                    <ul className="stepper-list">
                        <li className="step" onClick={(a)=>chooseStep(1)}>
                            <div className="step-wrapper">
                            <ul>
                                    <li className="step-number">
                                        <div>
                                            <span className={ step===2 || step===3 ||step===4 ?"line active" :"line"}></span>
                                            <span className="number number-active">1</span>
                                        </div>
                                    </li>
                                    <li className="step-title text-active">Supplier</li>
                                </ul>

                            </div>
                        </li>
                        <li className="step" onClick={(a)=>chooseStep(2)} >
                            <div className="step-wrapper">
                            <ul>
                                    <li className="step-number">
                                        <div>
                                            <span className={ step===3 || step===4 ?"line active" :"line"}></span>
                                            <span className={step===2 || step===3 || step===4 ?"number number-active" :"number"}>2</span>
                                        </div>
                                    </li>
                                    <li className={step===2 || step===3 || step===4 ?"step-title text-active" :"step-title"}>Basic Information</li>
                                </ul>

                            </div>
                        </li>
                        <li className="step" onClick={(a)=>chooseStep(3)}>
                            <div className="step-wrapper">
                                <ul>
                                    <li className="step-number">
                                        <div>
                                            <span className={ step===4 ?"line active" :"line"}></span>
                                            <span className={  step===3 || step===4 ?"number number-active" :"number"}>3</span>
                                        </div>
                                    </li>
                                    <li className={step===3 || step===4 ?"step-title text-active" :"step-title"}>Lanuage</li>
                                </ul>

                            </div>
                        </li>
                        <li className="step" onClick={(a)=>chooseStep(4)}>
                            <div className="step-wrapper">
                            <ul>
                                    <li className="step-number">
                                        <div>
                                            <span className={ step===5 ?"line active" :"line"}></span>
                                            <span className={ step===4 ?"number number-active" :"number"}>4</span>
                                        </div>
                                    </li>
                                    <li className={step===4 ?"step-title text-active" :"step-title"}>Sample</li>
                                </ul>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}