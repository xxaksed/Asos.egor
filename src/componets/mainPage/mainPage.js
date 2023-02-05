import React from "react";
import db from "../../db/db_text";
import { MainPageStyled} from "./mainStyle";
import Item from "../Item/Item";



function MainPage(){
    const items = db.map((item)=>{
        const { id, brand, model, prise} = item;
        return(
            <Item key={id}
            brand={brand}
            model={model}
            prise={prise}/>
        )
    }
    
    )
console.log(items)

    return(
        <MainPageStyled>
            {items}
        </MainPageStyled>
    )
}

export default MainPage