// Footer.jsx
import React from "react";
import flowerImg from "../images/plant.png";

const Footer = () => {
    return (
        <footer id="site-footer"
            style={{
                width: "100%",
                background: "#0d1b08",
                padding: "40px 50px",
                color: "white",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                {/* Left Section */}
                <div style={{ width: "380px" }}>
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            border: "none",
                            width: "230px",
                            padding: "10px",
                        }}
                    >
                        <img
                            src={flowerImg}
                            alt="flower"
                            style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "contain",
                                marginRight: "12px",
                            }}
                        />

                        <h1
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                margin: 0,
                            }}
                        >
                            FloraVision.
                        </h1>
                    </div>

                    {/* Description */}
                    <p
                        style={{
                            marginTop: "25px",
                            width: "580px",
                            fontSize: "18px",
                            lineHeight: "1.5",
                            textAlign: "left",
                        }}
                    >
                        "From lush indoor greens to vibrant <br>
                        </br>outdoor blooms, our plants are crafted to<br>
                        </br> thrive and elevate your living environment."
                    </p>
                    
                    {/* Social Icons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "25px",
                            marginTop: "55px",
                            fontWeight: "700",
                            fontSize: "24px",
                        }}
                    >
                        <span>FB</span>
                        <span>TW</span>
                        <span>LI</span>
                    </div>
                </div>

                <div style={{ marginLeft: "80px" }}>
                    <h2
                        style={{
                            fontSize: "28px",
                            marginBottom: "20px",
                            fontWeight: "700",
                        }}
                    >
                        Quick Link's
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            fontSize: "20px",
                        }}
                    >
                        <span>Home</span>
                        <span>Types of plant's</span>
                        <span>Contact</span>
                        <span>About</span>
                    </div>
                </div>

                {/* Right Section */}
                <div style={{ width: "420px" }}>
                    <h2
                        style={{
                            fontSize: "28px",
                            marginBottom: "25px",
                            fontWeight: "700",
                        }}
                    >
                        For Every Update.
                    </h2>

                    {/* Subscribe Box */}
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "65px",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter Email"
                            style={{
                                flex: 1,
                                border: "1px solid white",
                                background: "transparent",
                                padding: "0 15px",
                                color: "white",
                                fontSize: "18px",
                                outline: "none",
                            }}
                        />

                        <button
                            style={{
                                width: "170px",
                                border: "none",
                                background: "white",
                                color: "black",
                                fontWeight: "700",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        >
                            SUBSCRIBE
                        </button>
                    </div>

                    {/* Bottom Text */}
                    <p
                        style={{
                            marginTop: "90px",
                            textAlign: "center",
                            fontSize: "22px",
                        }}
                    >
                        FloraVision © all right reserve
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;