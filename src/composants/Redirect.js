import { NavLink } from "react-router-dom";

export function Redirect() {
    let urlPage = window.location.href.split("/")
    let page = urlPage[urlPage.length-2];
    let numero = urlPage[urlPage.length-1];

    return(<button> <NavLink to={`../${page}/${numero}`}>ok</NavLink></button>
    )}