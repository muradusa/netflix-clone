import React from 'react'
import Img from "../images/tab-1-pic.png"
import styled from "styled-components";
import { Button } from "./Button"

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <span>If you decide netflix isn't for you - no problem. No commitment. Cancel online anytime.</span>
                    <br/>
                    <Button>try it now</Button>
                    <img src={Img} alt="alt goes here"/>

                </div>
            </div>
            </TabContentContainer>
    )
}

export default TabContentOne

// Main Content Container

const TabContentContainer = styled.div`
background: var(--main-deep-dark);

img {
    width: 31.875rem;
}

.tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
}

`;
