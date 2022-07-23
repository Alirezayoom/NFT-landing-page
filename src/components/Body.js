import { Fragment } from "react";
import Header from "./Header"
import Section1 from "./Section1";
import Section2 from "./Section2";

const Body = () => {
    return(
        <Fragment>
            <Header />
            <Section1 />
            <Section2 />
        </Fragment>
    )
}

export default Body;