import React from 'react'
import { PillMinHead } from "../../assets/css/globalStyle"
import { FAQsWrap } from "./styled.js"

export default function FAQsWrapper() {


    const faqsList = [
        {
            faqHeading: "What's the core innovation behind this project?",
            faqContent: "We empower educators to create personalized Dapps. Students drive learning, choosing pace, educators, and curating content for ownership-driven experiences."
        },
        {
            faqHeading: "Who are the main beneficiaries of this platform?",
            faqContent: "Educators, teachers, institutions, learners, and developers – each gain opportunities and ownership within the ecosystem."
        },
        {
            faqHeading: "How does this solve current problems in the education system?",
            faqContent: "We break down the limitations of standardized learning by offering flexibility, collaboration to learners and direct monetization for educators."
        },
        {
            faqHeading: "What kind of Dapps can educators create on this platform?",
            faqContent: "Interactive lessons, gamified experiences, personalized feedback systems, and more – possibilities are endless!"
        },
        {
            faqHeading: "What technical skills are needed to create Dapps?",
            faqContent: "We aim for beginner-friendliness, but programming knowledge and specific tools will be provided."
        },
        {
            faqHeading: "How does the tokenomics incentivize participation?",
            faqContent: "Token rewards and governance rights drive educator engagement while students get rewarded with tokens while learning."
        },
        {
            faqHeading: "What measures ensure the security and privacy of user data?",
            faqContent: "We prioritize blockchain-based security protocols and transparent data access policies."
        },
        {
            faqHeading: "How does your project address existing educational systems?",
            faqContent: "We aim for interoperability with existing platforms, allowing smooth integration and credentialing."
        },
        {
            faqHeading: "What's the current development stage of this project?",
            faqContent: "We're in the midst of building our community, actively welcoming like-minded individuals who share our vision. Your feedback is invaluable as we shape the future together."
        },
        {
            faqHeading: "How can I stay involved and learn more?",
            faqContent: "Join our community, contact us for collaboration opportunities!"
        },
    ]


    return (
        <>
            <FAQsWrap> 

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            {
                                faqsList.map((item, index) => (

                                    <div className="accordion-item" key={index}>
                                        <h6 className="accordion-header" id={"panelsStayOpen-heading" + (index + 1)}>
                                            <button className={"accordion-button " + ((index + 1) === 1 ? "" : " collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + (index + 1)} aria-expanded={(index + 1) === 1 ? "true" : "false"} aria-controls={"panelsStayOpen-collapse" + (index + 1)}>
                                               {(index + 1)}. {item.faqHeading}
                                            </button>
                                        </h6>
                                        <div id={"panelsStayOpen-collapse" + (index + 1)} className={"accordion-collapse collapse " + ((index + 1) === 1 ? "show" : "")} aria-labelledby={"panelsStayOpen-heading" + (index + 1)}>
                                            <div className="accordion-body">
                                                <p>{item.faqContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>  
            </FAQsWrap>
        </>
    )
}
