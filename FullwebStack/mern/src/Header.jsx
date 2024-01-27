import React from "react";

const Header = () => {
    let greet;
    const Customstyle = {
        color: " ",
        fontFamily: " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "
    }

    const date = new Date();
    console.log(date);
    let hour = date.getHours();

    if (hour < 12) {
        greet = "morning";
        Customstyle.color = "blue"
    } else if (hour < 18) {
        greet = "evening";
        Customstyle.color = "green"
    }
    else {
        greet = "night";
        Customstyle.color = "red"
    }
    return (
        <h2 style={Customstyle}>{`Good ${greet}`}</h2>
    )

}

export default Header;