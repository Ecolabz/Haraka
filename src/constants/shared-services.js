import { Route } from "react-router-dom";

export const goToFaq = () => {
    setTimeout(() => {
        const activeSect = document.querySelector(".faq-section");
        activeSect.scrollIntoView({
            behavior: 'smooth'
        });
    }, 100);
}


export const FaqLink = () => {
    return <Route render={({ history}) => (
        <span className="clickable" onClick={() => { history.push('/'); goToFaq() }}>FAQs</span>
    )} />
}