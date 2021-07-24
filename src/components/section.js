import React from "react";
export const Section = (props) => {
    return (
        <section className={"l-grid l-inner"}>
            <div className={"l-grid-full"}>
                <div className={"c-section"}>
                    <h2 className={"c-section-title"}>{props.title}</h2>
                    <p className={"c-section-desc"}>{props.copy}</p>
                </div>
            </div>
            {props.children}
        </section>
    );
};
