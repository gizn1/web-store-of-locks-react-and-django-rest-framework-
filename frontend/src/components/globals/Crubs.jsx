import React from "react";
import CrumbCss from "../../style/globals/crumbs";

const Crumbs = (props) =>{
    const {ConteinerCrumb,MainItem} = CrumbCss
    return(

<>
<ConteinerCrumb><MainItem>Главная /  </MainItem> {props.arr.map(item=>{return( <> {item} / </>)})}</ConteinerCrumb>
</>
    )
}
export default Crumbs