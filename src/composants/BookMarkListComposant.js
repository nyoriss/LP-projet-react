import { Provider } from "react-redux";
import { store } from "../store";
import BookMark from "../composants/BookMark";
import BookMarkList from "../composants/BookMarkList";

export function BookMarkListComposant(numeroPokemon) {
    return (
        <Provider store={store}>
            <BookMark numeroPokemon={numeroPokemon}/>
            <BookMarkList/>
        </Provider>
    )}
