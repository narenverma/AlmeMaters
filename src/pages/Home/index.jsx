import React, { useEffect, useState } from "react";
import {
    Header,
    HomeHeroSection,
    HomeHeroWrap,
    MarqueeCarousel,
    MarqueeWrap,
    ThesisSection,
    ThesisWrap,
    ThesisContentsWrap,
    ImagineWorldSection,
    ImagineWorldWrap,
    ShimmerCardsWrap,
    ShimmerCard,
    BottomContents,
    IconCardsShimmerBorderWrap,
    ShimmerBorderCard,
    RevolutionSection,
    RevolutionWrap,
    ContentBox,
    MidContentSection,
    MarqueeBGCarouselWrapper,
    MarqueeBGCarousel,
    MarqueeBGWrap,
    TeamSection,
    TeamWrap,
    TeamRow,
    TeamImg,
    TeamInfo,
    FooterSection,
    FooterWrap,
    SubscribeBox,
    FooterInfo,
    SubscribeForm,
    RandomPosHeadings,
    MentorSection,
    MentorWrap,
    TeamCard,
    MentorImg,
    MentorContent,
    FixedMusicDisc,
    MusicDisc,
    MusicDiscThumb,
    ContentPopupWrap,
    ContentPopup,
    PopUpClose,
    ImminentFutureContent,
} from "./styled.js";
import { Link } from "react-router-dom";

import FAQsWrapper from "../../components/FAQsWrapper";
import { FAQsSection } from "../../components/FAQsWrapper/styled.js";
import SectionTopSpace from "../../components/SectionTopSpace";
import { subscribeSchema } from "../../components/schemas";
import { useFormik } from "formik";
import axios from "axios";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger);

    SectionTopSpace();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        //   return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //   };
    }, []);

    let [errorData, setErrorData] = useState("");
    let [confirmSubmit, setConfirmSubmit] = useState(false);

    const emailData = {
        email: "",
    };

    const { values, errors, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: emailData,
            validationSchema: subscribeSchema,
            onSubmit: (values) => {
                // console.log(values);

                axios
                    .post(
                        "https://am.hybclient.com/api/subscribe/subscribe",
                        { email: values.email },
                        {
                            // withCredentials: true,
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Basic YWRtaW46YWRtaW4=",
                                Accept: "*/*",
                            },
                        }
                    )
                    .then((response) => {
                        console.log(response.data);
                        // setConfirmSubmit(response.data.success);

                        response.data.success
                            ? setErrorData("")
                            : setErrorData(response.data.message);

                        setConfirmSubmit(response.data.success);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
        });

    useEffect(() => {
        // Parallax Effect start

        gsap.utils.toArray("[data-module-parallax]").forEach((section) => {
            gsap.utils
                .toArray(section.querySelectorAll("[data-parallax]"))
                .forEach((parallax) => {
                    const depth = parallax.dataset.speed;
                    const movement = -(parallax.offsetHeight * depth);
                    const rotate = parallax.dataset.rotate;

                    gsap.fromTo(
                        parallax,
                        {
                            y: -movement,
                            rotate: 0,
                        },
                        {
                            y: movement,
                            rotate: -rotate,
                            ease: "none",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 100%",
                                end: "bottom bottom",
                                scrub: true,
                                // markers: true
                            },
                        }
                    );
                });
        });

        // Parallax Effect end
    }, []);

    let [openPopup, setOpenPopup] = useState();

    openPopup
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");

    return (
        <>
            <Header className={scrollPosition > 30 ? "header-active" : ""}>
                <div className='container'>
                    <div className=' '>
                        <h4 className='text-center'>Alme Mater</h4>
                    </div>
                </div>
            </Header>
            <HomeHeroSection className='hero-section'>
                <img
                    className='bg-top-left-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-spring-elem.png")}
                    alt='spring'></img>

                <div className='container'>
                    <div className=' pt-5'>
                        <HomeHeroWrap>
                            <div className='row align-items-end gy-3'>
                                <div className='col-lg-6'>
                                    <h1 className='hero-head h2'>
                                        Welcome to the{" "}
                                    </h1>
                                    <h5 className='pixel-head '>
                                        future of Learning
                                    </h5>
                                </div>
                                <div className='col-lg-6'>
                                    <p>
                                    A Layer 3 on-chain education platform connecting educators, learners, and institutes in Web3, fostering decentralized education and collaborative learning, enabling seamless interaction and knowledge sharing in a decentralized and innovative educational ecosystem.
                                    </p>
                                    <div className='mt-5'>
                                        <Link
                                            to='https://t.me/AlmeMaterEdu'
                                            target='_blank'
                                            className='custom-btn'>
                                            Join the movement 🤝
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </HomeHeroWrap>
                    </div>
                </div>
                <div className='equal-padding-B mt-5'>
                    <MarqueeCarousel>
                        <MarqueeWrap style={{ animationDuration: 100 + "s" }}>
                            {Array.from({ length: 10 }, (_, i) => (
                                <h2 className='h-l ' key={i}>
                                    Redefining EDUCATION
                                </h2>
                            ))}
                        </MarqueeWrap>
                    </MarqueeCarousel>
                </div>
            </HomeHeroSection>

            <ThesisSection
                className='theme-bg-black-primary overflow-visible '
                data-module-parallax>
                <img
                    className='bg-top-center-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='1'
                    data-rotate='45'></img>
                <div className='overflow-hidden position-relative'>
                    <img
                        className='bg-center-right-elem bg-glass-elem'
                        src={require("../../assets/images/bg-glass-ring-2-elem.png")}
                        alt='ring'
                        data-parallax
                        data-speed='1'
                        data-rotate='30'></img>
                    <img
                        className='bg-bottom-left-elem bg-glass-elem'
                        src={require("../../assets/images/bg-glass-ring-2-elem.png")}
                        alt='ring'
                        data-parallax
                        data-speed='0.7'
                        data-rotate='-40'></img>
                    <div className='row mx-0'>
                        <div className='col-lg-8 container'>
                            <div className='equal-padding-T equal-padding-B'>
                                <ThesisWrap>
                                    <h2 className='h-xl text-center theme-text-white-primary section-head'>
                                        Thesis
                                    </h2>
                                    <ThesisContentsWrap>
                                        <p>
                                            Throughout history, education has
                                            been the cornerstone of human
                                            progress. <br />
                                            From cave paintings to the
                                            Industrial Revolution, advancements
                                            in knowledge have propelled us
                                            forward. Yet, the current education
                                            system often resembles a factory
                                            model, producing standardized
                                            graduates rather than fostering
                                            individual potential. Web3, with its
                                            emphasis on decentralization and
                                            empowerment, offers a revolutionary
                                            opportunity to reshape education.
                                        </p>
                                    </ThesisContentsWrap>
                                </ThesisWrap>
                            </div>
                        </div>
                    </div>
                </div>
            </ThesisSection>

            <ImagineWorldSection
                className='theme-bg-black-secondary'
                data-module-parallax>
                <div className='bg-blur-sphere-top-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem.png")}
                        alt='Blur Elem'
                    />
                </div>
                <div className='bg-blur-sphere-bottom-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem-2.png")}
                        alt='Blur Elem'
                    />
                </div>

                <img
                    className='bg-center-left-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-2-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='1'
                    data-rotate='30'></img>
                <img
                    className='bg-bottom-right-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-2-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='1.4'
                    data-rotate='-40'></img>
                <div className='container'>
                    <div className='equal-padding-T equal-padding-B'>
                        <ImagineWorldWrap>
                            <h3 className='pixel-head text-center'>
                                Imagine a{" "}
                            </h3>
                            <h2 className='section-head text-center h1'>
                                {" "}
                                world where{" "}
                            </h2>

                            <ShimmerCardsWrap>
                                <div className='row gy-4'>
                                    <div className='col-lg-4'>
                                        <ShimmerCard>
                                            <MarqueeCarousel>
                                                <MarqueeWrap
                                                    style={{
                                                        animationDuration:
                                                            50 + "s",
                                                    }}>
                                                    {Array.from(
                                                        { length: 10 },
                                                        (_, i) => (
                                                            <h4
                                                                className='h1 '
                                                                key={i}>
                                                                STUDENTS
                                                            </h4>
                                                        )
                                                    )}
                                                </MarqueeWrap>
                                            </MarqueeCarousel>
                                            <BottomContents>
                                                <p className='text-center'>
                                                    In Web3, students dictate
                                                    the pace, choose educators,
                                                    and curate content,
                                                    fostering personalized,
                                                    flexible, and
                                                    ownership-driven learning
                                                    experiences.
                                                </p>
                                            </BottomContents>
                                        </ShimmerCard>
                                    </div>
                                    <div className='col-lg-4'>
                                        <ShimmerCard>
                                            <BottomContents>
                                                <p className='text-center'>
                                                    Own their content and
                                                    delivery methods, creating
                                                    Dapps tailored to specific
                                                    needs and learning styles.
                                                </p>
                                            </BottomContents>
                                            <MarqueeCarousel>
                                                <MarqueeWrap
                                                    style={{
                                                        animationDuration:
                                                            50 + "s",
                                                    }}>
                                                    {Array.from(
                                                        { length: 10 },
                                                        (_, i) => (
                                                            <h4
                                                                className='h1'
                                                                key={i}>
                                                                EDUCATORS
                                                            </h4>
                                                        )
                                                    )}
                                                </MarqueeWrap>
                                            </MarqueeCarousel>
                                        </ShimmerCard>
                                    </div>
                                    <div className='col-lg-4'>
                                        <ShimmerCard>
                                            <MarqueeCarousel>
                                                <MarqueeWrap
                                                    style={{
                                                        animationDuration:
                                                            50 + "s",
                                                    }}>
                                                    {Array.from(
                                                        { length: 10 },
                                                        (_, i) => (
                                                            <h4
                                                                className='h1'
                                                                key={i}>
                                                                Institutes
                                                            </h4>
                                                        )
                                                    )}
                                                </MarqueeWrap>
                                            </MarqueeCarousel>
                                            <BottomContents>
                                                <p className='text-center'>
                                                    Become vibrant communities,
                                                    attracting learners through
                                                    innovation and diverse
                                                    offerings.
                                                </p>
                                            </BottomContents>
                                        </ShimmerCard>
                                    </div>
                                </div>
                            </ShimmerCardsWrap>

                            <div className='equal-padding-T'>
                                <div className='col-lg-11 mx-auto'>
                                    <RandomPosHeadings>
                                        <h3>This is where </h3>
                                        <h3>
                                            a decentralized education protocol{" "}
                                        </h3>
                                        <h3>comes in. By building on </h3>
                                        <h3>
                                            top of existing blockchains, it can
                                            -
                                        </h3>
                                    </RandomPosHeadings>
                                </div>

                                <IconCardsShimmerBorderWrap>
                                    <div className='row justify-content-evenly align-items-center gy-4'>
                                        <div className='col-lg-4 '>
                                            <ShimmerBorderCard className='mb-lg-5 mb-4'>
                                                <img
                                                    src={require("../../assets/images/bill-or-receipt-and-credit-card-3d-illustration-icon.png")}
                                                    alt='Enable educators to create and monetize their Dapps'
                                                />
                                                <h6>
                                                    Enable educators to create
                                                    and monetize their Dapps
                                                </h6>
                                                <p>
                                                    Imagine interactive lessons,
                                                    gamified learning
                                                    experiences, or personalized
                                                    feedback systems, all owned
                                                    and managed by educators
                                                    themselves.
                                                </p>
                                            </ShimmerBorderCard>
                                            <ShimmerBorderCard>
                                                <img
                                                    src={require("../../assets/images/foster-community-driven-governance-icon.png")}
                                                    alt='Foster community-driven governance'
                                                />
                                                <h6>
                                                    Foster community-driven
                                                    governance
                                                </h6>
                                                <p>
                                                    Tokenized incentives can
                                                    encourage collaboration and
                                                    ensure the protocol caters
                                                    to the needs of its
                                                    stakeholders, be it
                                                    educators, learners, or
                                                    developers.
                                                </p>
                                            </ShimmerBorderCard>
                                        </div>
                                        <div className='col-lg-4'>
                                            <ShimmerBorderCard>
                                                <img
                                                    src={require("../../assets/images/facilitate-secure-and-transparent-credentialing-icon.png")}
                                                    alt='Facilitate secure and transparent credentialing'
                                                />
                                                <h6>
                                                    Facilitate secure and
                                                    transparent credentialing
                                                </h6>
                                                <p>
                                                    Dapps can issue tamper-proof
                                                    digital certificates
                                                    verified by a decentralized
                                                    network, removing the need
                                                    for centralized authorities.
                                                </p>
                                            </ShimmerBorderCard>
                                        </div>
                                    </div>
                                </IconCardsShimmerBorderWrap>
                            </div>
                        </ImagineWorldWrap>
                    </div>
                </div>
            </ImagineWorldSection>

            <RevolutionSection>
                <div className='container'>
                    <div className='equal-padding-T equal-padding-B'>
                        <RevolutionWrap>
                            <div className='row'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6'>
                                    <h2 className='  section-head mb-4'>
                                        Revolutionising Education Together
                                    </h2>
                                    <p>
                                        Unveiling the future of education
                                        requires united efforts from passionate
                                        educators, forward-thinking
                                        institutions, and skilled developers.{" "}
                                    </p>
                                    <p>
                                        Together, we can break down existing
                                        barriers, paving the way for a
                                        decentralized education ecosystem that
                                        sparks innovation, enables personalized
                                        learning, and promotes lifelong
                                        knowledge acquisition.
                                    </p>
                                </div>
                            </div>
                        </RevolutionWrap>
                    </div>
                </div>
            </RevolutionSection>

            <MidContentSection className='theme-bg-black-primary overflow-visible '>
                <div className='row mx-0'>
                    <div className='container col-lg-8'>
                        <div className='equal-padding-T '>
                            <ContentBox>
                                <div className='row align-items-center'>
                                    <div className='col-lg-8'>
                                        <h5 className='mb-3 theme-text-black-primary text-lg-start text-center'>
                                            Peek into the future of learning
                                        </h5>
                                        <p className='theme-text-black-primary text-lg-start text-center'>
                                            Explore the future of education with
                                            web3, unlocking decentralized and
                                            immersive learning experiences.
                                        </p>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='mt-lg-0 mt-5 text-lg-end text-center '>
                                            <button
                                                className='custom-btn'
                                                onClick={() =>
                                                    setOpenPopup(true)
                                                }>
                                                future of learning ✨
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </ContentBox>
                        </div>
                    </div>
                </div>
                <MarqueeBGCarouselWrapper>
                    <MarqueeBGCarousel className='rotate-left'>
                        <MarqueeBGWrap style={{ animationDuration: 40 + "s" }}>
                            {Array.from({ length: 20 }, (_, i) => (
                                <h3 key={i}>our team</h3>
                            ))}
                        </MarqueeBGWrap>
                    </MarqueeBGCarousel>
                    <MarqueeBGCarousel className='rotate-right'>
                        <MarqueeBGWrap style={{ animationDuration: 40 + "s" }}>
                            {Array.from({ length: 20 }, (_, i) => (
                                <h3 key={i}>our team</h3>
                            ))}
                        </MarqueeBGWrap>
                    </MarqueeBGCarousel>
                </MarqueeBGCarouselWrapper>
            </MidContentSection>

            <TeamSection
                className='theme-bg-black-secondary  equal-padding-T '
                data-module-parallax>
                <div className='bg-blur-sphere-top-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem.png")}
                        alt='Blur Elem'
                    />
                </div>
                <div className='bg-blur-sphere-bottom-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem-2.png")}
                        alt='Blur Elem'
                    />
                </div>

                <img
                    className='bg-top-right-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-3-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='0.6'
                    data-rotate='60'></img>
                <img
                    className='bg-bottom-left-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-3-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='0.4'
                    data-rotate='-30'></img>

                <div className='row mx-0'>
                    <div className='container col-lg-7 col-md-9'>
                        <div className='equal-padding-T equal-padding-B'>
                            <TeamWrap>
                                <p className='text-center'>
                                    {" "}
                                    We are a diverse team comprising educators,
                                    technologists, and crypto enthusiasts who
                                    share a common passion for revolutionizing
                                    education through innovative and tech-driven
                                    solutions.
                                </p>
                                <TeamRow>
                                    <div className='row align-items-center mt-5 gy-4'>
                                        <div className='col-lg-4'>
                                            <TeamImg>
                                                <img
                                                    src={
                                                        require("../../assets/images/sushil-alme-profile-with-text.svg")
                                                            .default
                                                    }
                                                    alt='Sushil Alme'
                                                />
                                                {/* <img src={require("../../assets/images/sushil-alme-profile-words.svg").default} alt="Sushil Alme" className="floating-words" /> */}
                                            </TeamImg>
                                        </div>
                                        <div className='col-lg-8'>
                                            <TeamInfo>
                                                <h6>Founder</h6>
                                                <p>
                                                    An educator with two decades
                                                    of experience, having taught
                                                    over{" "}
                                                    <strong>
                                                        5000+ students
                                                    </strong>{" "}
                                                    and collaborated with{" "}
                                                    <strong>
                                                        10+ institutes.
                                                    </strong>{" "}
                                                    With an engineering
                                                    background, passionate about
                                                    problem-solving and critical
                                                    thinking. Committed to
                                                    addressing education
                                                    challenges, strive to make a
                                                    lasting impact on the
                                                    learning landscape through
                                                    web3.
                                                </p>
                                                <Link
                                                    to='https://www.linkedin.com/in/sushil-alme-%E2%AD%95%EF%B8%8F-20371b34/'
                                                    target='_blank'
                                                    className='linked-in-icon'>
                                                    <img
                                                        src={
                                                            require("../../assets/images/linkedin-icon.svg")
                                                                .default
                                                        }
                                                        alt='linkedin'
                                                    />
                                                </Link>
                                            </TeamInfo>
                                        </div>
                                    </div>
                                </TeamRow>

                                <TeamRow>
                                    <div className='row align-items-center mt-5 gy-4 flex-lg-row flex-column-reverse'>
                                        <div className='col-lg-8'>
                                            <TeamInfo>
                                                <h6>TECH ADVISORY</h6>
                                                <p>
                                                    Our tech advisory boasts
                                                    engineers with{" "}
                                                    <strong>
                                                        10+ years' experience
                                                    </strong>{" "}
                                                    from industry giants like
                                                    PayPal and Intel. Their
                                                    expertise drives innovation,
                                                    ensuring robust and scalable
                                                    solutions for our projects.
                                                </p>
                                                {/* <Link to="https://www.linkedin.com/in/ashutosh-amrutkar-0b15b5169/" target="_blank" className="linked-in-icon"><img src={require("../../assets/images/linkedin-icon.svg").default} alt="linkedin" /></Link> */}
                                            </TeamInfo>
                                        </div>
                                        <div className='col-lg-4'>
                                            <TeamImg>
                                                <img
                                                    src={require("../../assets/images/tech-advisory-icon.png")}
                                                    alt='Ashutosh'
                                                />
                                                {/* <img src={require("../../assets/images/ashutosh-amurtk-profile-words.svg").default} alt="Sushil Alme" className="floating-words" /> */}
                                            </TeamImg>
                                        </div>
                                    </div>
                                </TeamRow>
                            </TeamWrap>
                            <ContentBox className='mt-5'>
                                <div className='text-center mb-4'>
                                    <img
                                        src={require("../../assets/images/reflexical-logo.png")}
                                        alt='Reflexical'
                                        style={{
                                            height: " ",
                                            width: "100%",
                                            objectFit: "contain",
                                            aspectRatio: 10 / 1,
                                        }}
                                    />
                                </div>
                                <p className='theme-text-black-primary text-center'>
                                    We are backed by{" "}
                                    <strong>
                                        Reflexical's Fellowship Program
                                    </strong>
                                    . Reflexical is helping us scale by drawing
                                    on their proprietary 6-pillar process,
                                    insider access, and global presence.
                                    (Blessed!)
                                </p>
                            </ContentBox>
                        </div>
                    </div>
                </div>
            </TeamSection>

            <MentorSection className='theme-bg-black-secondary   '>
                <div className='row mx-0'>
                    <div className='col-xl-7 col-lg-8 col-md-9 container'>
                        <div className='equal-padding-T equal-padding-B'>
                            <MentorWrap>
                                <div className='row align-items-center gy-4'>
                                    <div className='col-lg-7'>
                                        <h2 className='section-head     '>
                                            Our Mentor
                                        </h2>
                                        <p>
                                            Ajeet  is a leading name in the
                                            cryptocurrency industry.Earlier, in
                                            his role as CEO of Zebpay (India’s
                                            largest cryptocurrency exchange at
                                            that time), he took it from being a
                                            one-country exchange to a global
                                            exchange. As CEO of the business
                                            incubator at IIT Bombay (India’s
                                            premier engineering school), he
                                            helped commercialize several ideas
                                            from the concept stage. As an
                                            advisor to Venture Capital firms in
                                            India, China, US, and Canada, he has
                                            an eye for promising founders.
                                        </p>
                                    </div>
                                    <div className='col-lg-5 col-md-6 mx-auto'>
                                        <TeamCard>
                                            <MentorImg>
                                                <img
                                                    src={require("../../assets/images/ajeet-khurana-mentor.png")}
                                                    alt='Ajeet Khurana '
                                                />
                                            </MentorImg>
                                            <MentorContent>
                                                <h6>Ajeet Khurana</h6>
                                                <p>
                                                    Founder of Reflexical Pte
                                                    Ltd
                                                </p>
                                                <Link
                                                    to='https://ae.linkedin.com/in/ajeetkhurana'
                                                    target='_blank'
                                                    className='linked-in-icon'>
                                                    <img
                                                        src={
                                                            require("../../assets/images/linkedin-icon.svg")
                                                                .default
                                                        }
                                                        alt='linkedin'
                                                    />
                                                </Link>
                                            </MentorContent>
                                        </TeamCard>
                                    </div>
                                </div>
                            </MentorWrap>
                        </div>
                    </div>
                </div>
            </MentorSection>

            <FAQsSection
                className='theme-bg-black-secondary  '
                data-module-parallax>
                <div className='bg-blur-sphere-top-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem.png")}
                        alt='Blur Elem'
                    />
                </div>
                <div className='bg-blur-sphere-bottom-elem'>
                    <img
                        src={require("../../assets/images/vivid-blurred-colorful-bg-elem-2.png")}
                        alt='Blur Elem'
                    />
                </div>
                <img
                    className='bg-top-left-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-spring-2-elem.png")}
                    alt='spring'
                    data-parallax
                    data-speed='0.9'
                    data-rotate='40'></img>
                <img
                    className='bg-bottom-right-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-spring-elem.png")}
                    alt='spring'
                    data-parallax
                    data-speed='0.6'
                    data-rotate='-20'></img>
                <div className='row mx-0'>
                    <div className='container col-lg-9'>
                        <div className='equal-padding-T equal-padding-B'>
                            <h2 className='section-head mb-5 text-center '>
                                frequently asked questions
                            </h2>
                            <FAQsWrapper />
                        </div>
                    </div>
                </div>
            </FAQsSection>

            <FooterSection data-module-parallax>
                <img
                    className='bg-top-left-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='0.9'
                    data-rotate='40'></img>
                <img
                    className='bg-center-right-elem bg-glass-elem'
                    src={require("../../assets/images/bg-glass-ring-elem.png")}
                    alt='ring'
                    data-parallax
                    data-speed='0.7'
                    data-rotate='20'></img>
                <div className='container'>
                    <div className='equal-padding-T equal-padding-B'>
                        <FooterWrap>
                            <div className='row mx-0 gy-4'>
                                <div className='col-lg-8'>
                                    <h2>Connect with a Global Community</h2>
                                    <p>
                                        Alme Mater is open-source and
                                        community-focused. Join us on Discord
                                        and connect with lively and highly
                                        engaged humans working in the field of
                                        Education with a positive outlook
                                        towards its future.
                                    </p>
                                    <div className='mt-4'>
                                        <Link
                                            to='https://t.me/AlmeMaterEdu'
                                            target='_blank'
                                            className='custom-btn'>
                                            Join our Community 🤝
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <SubscribeBox>
                                        <h4 className='text-center theme-text-black-primary'>
                                            SIGN UP FOR OUR NEWSLETTER
                                        </h4>
                                        <p className='text-center theme-text-black-primary'>
                                            Stay updated on major developments
                                            about Alme Mater.
                                        </p>
                                        <form onSubmit={handleSubmit}>
                                            <div className='position-relative'>
                                                <SubscribeForm>
                                                    <input
                                                        type='email'
                                                        placeholder='Enter your email'
                                                        name='email'
                                                        id='email'
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />

                                                    {values.email !== "" ? (
                                                        <>
                                                            <div className='error-message  '>
                                                                {errors.email}
                                                            </div>{" "}
                                                        </>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <button
                                                        type='submit'
                                                        className='custom-btn'>
                                                        <img
                                                            src={
                                                                require("../../assets/images/arrow-right-white.svg")
                                                                    .default
                                                            }
                                                            alt='Submit Form'
                                                        />
                                                    </button>
                                                </SubscribeForm>
                                                {errorData !== "" ? (
                                                    <>
                                                        <div className=' theme-text-error mt-2 text-center'>
                                                            {errorData}
                                                        </div>{" "}
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                                {confirmSubmit === true ? (
                                                    <>
                                                        <div className=' theme-text-success mt-2 text-center'>
                                                            Thank you for
                                                            subscribing!
                                                        </div>
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </form>
                                    </SubscribeBox>
                                </div>
                            </div>
                            <FooterInfo className='equal-padding-T'>
                                <div className='row gy-4 justify-content-center'>
                                    <div className='col-lg-4 col-md-6'>
                                        <strong>Email Us:</strong>{" "}
                                        <Link
                                            to='mailto:edu@almemater.com'
                                            className='text-decoration-underline'>
                                            edu@almemater.com
                                        </Link>
                                    </div>
                                    <div className='col-lg-4 col-md-6'>
                                        <p className='mb-0'>
                                            <strong>© 2024</strong> Alme Mater.
                                            All Rights Reserved
                                        </p>
                                    </div>
                                    <div className='col-lg-4 col-md-6'>
                                        <ul>
                                            {/* <li>
                                                <Link to="/">LinkedIn</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Instagram</Link>
                                            </li> */}
                                            <li>
                                                <Link
                                                    to='https://twitter.com/almemater'
                                                    target='_blank'>
                                                    <del>Twitter</del> X
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='https://t.me/AlmeMaterEdu'
                                                    target='_blank'>
                                                    Telegram
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </FooterInfo>
                        </FooterWrap>
                    </div>
                </div>
                <div className=''>
                    <MarqueeCarousel>
                        <MarqueeWrap style={{ animationDuration: 100 + "s" }}>
                            {Array.from({ length: 10 }, (_, i) => (
                                <h2 className='h-l ' key={i}>
                                    {" "}
                                    ALME MATER -{" "}
                                </h2>
                            ))}
                        </MarqueeWrap>
                    </MarqueeCarousel>
                </div>
            </FooterSection>

            <FixedMusicDisc
                data-popover
                data-popovertitle='This song inspired every bone in our body to start our journey in the Web3!'>
                <Link
                    to='https://open.spotify.com/track/4gMgiXfqyzZLMhsksGmbQV?si=8o0lAXiqSOCPTjP3MWFUag'
                    target='_blank'>
                    <MusicDisc>
                        <img
                            src={require("../../assets/images/music-disk-icon.png")}
                            alt='Music Disc'
                        />
                        <MusicDiscThumb>
                            <img
                                src={require("../../assets/images/music-disc-thumbnail.png")}
                                alt='Music Disc'
                            />
                        </MusicDiscThumb>
                    </MusicDisc>
                </Link>
            </FixedMusicDisc>

            <ContentPopupWrap className={openPopup ? "active" : ""}>
                <ContentPopup className='imminent-future-wrap'>
                    <PopUpClose onClick={() => setOpenPopup(false)}>
                        <img
                            src={
                                require("../../assets/images/close-cross-fill-icon.svg")
                                    .default
                            }
                            alt='close icon'
                        />
                    </PopUpClose>
                    <ImminentFutureContent>
                        <div className='row gx-0'>
                            <div className='col-lg-6'></div>
                            <div className='col-lg-6 pe-3'>
                                <h3>Imminent Future</h3>

                                <p>
                                    In the bustling city of Lumina, 14-year-old
                                    Anya dreamt of becoming an astrophysicist.
                                    But traditional schools felt stagnant, rote
                                    learning leaving her uninspired. Then, she
                                    discovered Alme Mater, a decentralized
                                    learning platform built on the Web3
                                    foundation.
                                </p>
                                <p>
                                    Unlike the restrictive systems she knew,
                                    Alme Mater was a vibrant, global community.
                                    Anya explored immersive VR simulations of
                                    distant galaxies, guided by passionate
                                    mentors who were actual astrophysicists. Her
                                    learning journey wasn't confined to
                                    textbooks - she collaborated with peers
                                    across continents, building virtual
                                    telescopes and sharing findings using DAOs
                                    (decentralized autonomous organizations).
                                </p>
                                <p>
                                    Instead of grades, Anya earned "Alme Tokens"
                                    for her contributions. These tokens weren't
                                    just digital rewards; they held real value,
                                    allowing her to access advanced learning
                                    modules or even contribute to research
                                    projects with renowned institutions. Anya's
                                    data? Completely hers. She controlled who
                                    could access it and even earned
                                    micro-payments when others used her learning
                                    materials.Alme Mater wasn't just about
                                    science. From artists co-creating
                                    interactive murals in history class to
                                    musicians composing symphonies across
                                    borders in music lessons, Web3 enabled
                                    boundless collaboration and learning
                                    experiences. Imagine history lessons brought
                                    to life with AR tours of ancient
                                    civilizations, or language classes where
                                    students directly interact with native
                                    speakers through immersive simulations.
                                </p>
                                <p>
                                    However, challenges existed. Not everyone
                                    had the technology or skills to navigate
                                    Web3. Some feared the uncertainty of
                                    decentralized systems. But Anya and her
                                    peers, the "Web3 Natives," bridged the gap,
                                    spreading awareness and helping others
                                    access the platform.As Anya progressed, she
                                    realized Alme Mater wasn't just about her
                                    own learning. It was about building a global
                                    knowledge commons, where education was
                                    accessible, engaging, and empowering for
                                    all. This was the true potential of Web3 in
                                    education - a future where curiosity
                                    thrived, boundaries dissolved, and learning
                                    became a collective journey towards a
                                    brighter tomorrow.
                                </p>
                            </div>
                        </div>
                    </ImminentFutureContent>
                </ContentPopup>
            </ContentPopupWrap>
        </>
    );
}
