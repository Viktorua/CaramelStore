import React from "react";
import MainImages from "../components/main_images/MainImages";
import OurShop from '../components/our_shop/OurShop'

export default function MainPage() {
    return (
        <div className={'main-page'}>
            <MainImages/>
            <OurShop/>
        </div>
    )
}