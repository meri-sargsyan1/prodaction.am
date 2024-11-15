import AppHeader from "../appHeader/AppHeader";
import AppHeaderForm from "../appHeaderForm/AppHeaderForm";
import AppSlider from "../appSlider/AppSlider";
import AppInfo from "../appInfo/AppInfo";
import AppFooterForm from "../appFooterForm/AppFooterForm";
import AppFooter from "../appFooter/AppFooter";

const App = () => {
    return (
        <>
            <AppHeader/>
            <AppHeaderForm/>
            <div className="title"><p>Գեղեցիկ Է Ամեն Նկար, Երբ Այն Նկարվում Է Սիրուվ</p></div>
            <AppSlider/>
            <div className="title"><p>Երջանիկ Պահերը Կիսելն Ու Ֆիքսելը Մեր Ամենասիրելի Մասնագիտությունն Է</p></div>
            <AppInfo/>
            <div className="title"><p>Մեր Առաքելությունն Է Ընդգծել և Ֆիքսել Յուրահատուկ Գեղեցկությունը</p></div>
            <AppFooterForm/>
            <AppFooter/>
        </>
    )
}

export default App;