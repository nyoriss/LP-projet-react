import { Provider } from "react-redux";
import { store } from "../store";
import BookMark from "../composants/BookMark";
import BookMarkList from "../composants/BookMarkList";

export function BookMarkListComposant() {
    return (
        <Provider store={store}>
            <BookMark/>
            <BookMarkList/>
        </Provider>
    )}
