import React from "react";
import '../stylesheets/FadeInSection.scss'; 

export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        },{threshold:0.1});

        const { current } = domRef;
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
    return (
        <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
        >
        {props.children}
        </div>
    );
}
