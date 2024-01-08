import React from "react";
import "./header.css";
import ashoksign from "../../images/ashoksign.png";
import logo from "../../images/rj_logo_.png";
import { Switch, Stack, Tooltip, Button } from "@chakra-ui/react";
const Header = () => {
    return (
        <div className="parent_container">
            <div className="logo_div_container">
                <img src={ashoksign} alt="ashoksign" />
                <img src={logo} alt="rajlogo" />
                <p>राजस्थान पुलिस</p>
            </div>
            <div className="content_div_container">
                <div className="content_div_container_child_1">
                    <div className="switch">
                        <Stack align="center" direction="row">
                            <Switch size="lg" />
                        </Stack>
                        <p>Eng</p>
                    </div>
                    <div className="button_div">
                        <Tooltip hasArrow label="dark mode" bg="purple">
                            <Button bg="gray"></Button>
                        </Tooltip>
                        <Tooltip hasArrow label="light mode" bg="cyan">
                            <Button bg="black"></Button>
                        </Tooltip>
                        <Tooltip
                            hasArrow
                            label="black and white mode "
                            bg=" gray.300">
                            <Button bg="green"></Button>
                        </Tooltip>
                        <Tooltip hasArrow label="old pannel" bg="RGB(36 35 35)">
                            <Button bg="yellow"></Button>
                        </Tooltip>
                    </div>
                
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
