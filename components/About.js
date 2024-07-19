import React, { useState } from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    let myStyle ={
        color:props.mode === 'dark'?'white':'#042743',
        backgroundColor:props.mode === 'dark'?'#042743':'white',
    }
    
    // const [btntext, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setBtnText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // };

    return (
        <div className="container" style={myStyle}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Welcome to Capitalization, the ultimate text transformation and analysis tool! Easily convert your text to uppercase or lowercase with just a click. 
                        Analyze your text for insights, including word count, character count, and more. 
                        Streamline your text manipulation and analysis needs in one convenient platform!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free To Use</strong>    
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Streamline your text manipulation and analysis needs in one convenient platform, all at no cost!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Our website is designed to be fully compatible with all modern web browsers, ensuring a seamless and consistent user experience no matter which browser you prefer. 
                            Enjoy the convenience of text transformation and analysis on any device, at any time.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

