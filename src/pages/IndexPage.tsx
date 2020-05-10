import * as React from "react";
import {CSSTransition} from 'react-transition-group'
import './index.css'

export function IndexPage() {
    const [showAnimate, setShowAnimate] = React.useState(false);

    React.useEffect(() => {
        setShowAnimate(true);
    })

    return (
        <div style={{
            backgroundColor: "#58acec",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#f75337",
            fontSize: "24px"
        }}>
            <CSSTransition
                in={showAnimate}
                classNames="fade"
                timeout={3000}
                unmountOnExit
                appear={true}
            >
                <div>你好呀 一粒</div>
            </CSSTransition>
        </div>
    )
}

