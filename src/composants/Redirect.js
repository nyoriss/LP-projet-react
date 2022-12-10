import { NavLink } from "react-router-dom";

export function Redirect() {
    let urlPage = window.location.href.split("/")
    let page = urlPage[urlPage.length-2];
    let numero = urlPage[urlPage.length-1];
    console.log("dans redirect")
    document.addEventListener('load', function () { 
        let bouton = document.querySelector("#nav")
        console.log(bouton)
        //bouton.click()
        let click_event = new CustomEvent('click');
        bouton.dispatchEvent(click_event);
        console.log("CLICK")
    })

    return(<button id="nav"> <NavLink to={`../${page}/${numero}`}>ok</NavLink></button>
    )}