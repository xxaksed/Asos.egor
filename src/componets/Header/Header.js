import React from "react";
import { HeaderStyled, LogoStyled, MenStyled, InputStyled, WomenStyled, ProfImgStyled, HeartImgStyled, CartImgStyled }  from "./style";
import { profImg, logoImg, heartImg, cartImg} from "../../assets"





function Header(){
    return(
        <HeaderStyled>
            <LogoStyled src={logoImg}></LogoStyled>
            <MenStyled>MEN</MenStyled>
            <WomenStyled>WOMEN</WomenStyled>
            <InputStyled></InputStyled>
            <ProfImgStyled src={profImg}></ProfImgStyled>
            <HeartImgStyled src={heartImg}></HeartImgStyled>
            <CartImgStyled src={cartImg}></CartImgStyled>

        </HeaderStyled>
    )
}

export default Header;