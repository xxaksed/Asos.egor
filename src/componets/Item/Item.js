import React from "react";
import { ItemStyled, NameStyled, PriseStyled, PlusStyled } from "./ItemStyled";
import styled from "styled-components";









function Item({brand, model, prise}){
     return(
        <ItemStyled>
            <NameStyled>
            {brand}{model}
            </NameStyled>
            <PriseStyled>
            {prise}
            </PriseStyled>
            <PlusStyled>
            </PlusStyled>
        </ItemStyled>
     )
}

export default Item