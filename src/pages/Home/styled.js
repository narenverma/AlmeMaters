import { styled, keyframes } from "styled-components";

export const Header = styled.header`
    padding: 2rem 1rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;

    transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &.header-active {
        padding: 0.5rem;
        background-image: linear-gradient(180deg, #72053d 2%, #0000 100%);
    }
`;

export const HomeHeroSection = styled.section`
    background: url(${require("../../assets/images/noise-and-texture-bg.png")})
            center/cover no-repeat,
        url(${require("../../assets/images/vivid-blurred-colorful-bg.png")})
            center/cover no-repeat;
    background-blend-mode: multiply;
    --equal-paddings: 9.5rem;

    & .bg-top-left-elem {
        position: absolute;
        top: -5%;
        left: 7.63rem;
        transform: rotate(-45deg);
    }

    @media screen and (max-width: 768px) {
        --equal-paddings: 3.25rem;
    }
`;
export const HomeHeroWrap = styled.div`
    ${"" /* & h1{
    font-size: 3rem; 
    letter-spacing: 0.03rem;
} */
    }

    @media screen and (max-width:768px) {
        & h1 {
            font-size: 3.1rem;
        }
    }
`;

export const MarqueeCarousel = styled.div`
    overflow: hidden;
`;
export const MarqueeWrap = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    gap: 2rem;

    animation: infinite-RTL 0s linear infinite;

    & h2 {
        background: linear-gradient(
            180deg,
            #fffef9 4.92%,
            rgba(255, 254, 249, 0) 77%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 768px) {
        gap: 1rem;
    }
`;

export const ThesisSection = styled.section`
    & .bg-top-center-elem {
        position: absolute;
        right: 30%;
        top: -7%;
        transform: rotate(-25.052deg);
    }

    & .bg-center-right-elem {
        position: absolute;
        right: -8%;
        top: 40%;
        transform: rotate(338deg);
    }
    & .bg-bottom-left-elem {
        position: absolute;
        left: -8%;
        bottom: 10%;
        transform: rotate(24deg);
        filter: blur(5px);
    }
`;
export const ThesisWrap = styled.div`
    & h2 {
        transform: translateY(22%);
        position: relative;
        z-index: 1;
    }
`;
export const ThesisContentsWrap = styled.div`
    background-color: var(--theme-black-secondary);
    border-radius: 1rem;
    padding: 2.5rem;
    position: relative;
    z-index: 4;

    & p {
        font-size: 2.25rem;
        line-height: 138.889%;
        color: var(--theme-white-primary);
    }

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
        & p {
            font-size: 1.25rem;
        }
    }
`;

export const ImagineWorldSection = styled.section`
    position: relative;
    z-index: 4;

    & :is(.bg-blur-sphere-top-elem, .bg-blur-sphere-bottom-elem) {
        position: absolute;
        width: 100%;
        z-index: -1;
        pointer-events: none;
    }
    & .bg-blur-sphere-top-elem {
        top: 0;
        left: 50%;
        translate: -50% -50%;
    }
    & .bg-blur-sphere-bottom-elem {
        bottom: -30%;
        right: -35%;
    }

    & .bg-center-left-elem {
        position: absolute;
        left: -10%;
        top: 50%;
        transform: translateY(-50%) rotate(150.639deg);
        filter: blur(5px);
    }

    & .bg-bottom-right-elem {
        position: absolute;
        bottom: 10%;
        right: -9%;
        transform: rotate(-27deg);
    }
`;
export const ImagineWorldWrap = styled.div``;
export const BottomContents = styled.div`
    padding: 6rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
`;
export const ShimmerCard = styled.div`
    border-radius: 1rem;
    height: 100%;
`;
export const ShimmerCardsWrap = styled.div`
    & .row {
        & > div:nth-child(1) ${ShimmerCard} {
            background: url(${require("../../assets/images/vivid-blur-colorful-bg-card-var-1.png")})
                center/cover no-repeat;
            & h4 {
                margin-top: 4rem;
            }
        }
        & > div:nth-child(2) ${ShimmerCard} {
            background: url(${require("../../assets/images/vivid-blur-colorful-bg-card-var-2.png")})
                center/cover no-repeat;
            & h4 {
                margin-bottom: 4rem;
            }

            & ${MarqueeWrap} {
                animation: infinite-LTR 0s linear infinite;
            }
        }
        & > div:nth-child(3) ${ShimmerCard} {
            background: url(${require("../../assets/images/vivid-blur-colorful-bg-card-var-3.png")})
                center/cover no-repeat;
            & h4 {
                margin-top: 4rem;
            }
        }
    }

    @media screen and (max-width: 992px) {
        & .row {
            & > div:nth-child(2) ${ShimmerCard} {
                display: flex;
                flex-direction: column-reverse;
            }
            & h4 {
                margin-top: 4rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        & h4 {
            font-size: 6rem;
        }
    }
`;

export const RandomPosHeadings = styled.div`
    margin-bottom: 5.19rem;

    & h3:nth-child(1) {
        padding-left: 12.69rem;
    }
    & h3:nth-child(2) {
        padding-left: 16.87rem;
    }
    & h3:nth-child(3) {
        padding-left: 8.44rem;
    }
    & h3:nth-child(4) {
        padding-left: 15.87rem;
    }

    @media screen and (max-width: 768px) {
        & h3:nth-child(1) {
            padding-left: 0rem;
        }
        & h3:nth-child(2) {
            padding-left: 0rem;
        }
        & h3:nth-child(3) {
            padding-left: 0rem;
        }
        & h3:nth-child(4) {
            padding-left: 0rem;
        }
    }
`;
export const IconCardsShimmerBorderWrap = styled.div``;
export const ShimmerBorderCard = styled.div`
    padding: 3rem;
    border-radius: 1rem;
    border: 2px solid #6ca0e3;
    background-color: var(--theme-black-secondary);

    & img {
        margin-bottom: 2rem;
    }
    & h6 {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const RevolutionSection = styled.section`
    background: linear-gradient(#0000, var(--theme-black-primary)),
        url(${require("../../assets/images/revolutionising-education-together-banner.png")})
            center/cover no-repeat;
`;
export const RevolutionWrap = styled.div``;

export const ContentBox = styled.div`
    padding: 2.5rem;
    border-radius: 1.125rem;
    border: 1.5px solid #fff;
    background: linear-gradient(
        50deg,
        #6ca0e3 -5.55%,
        #aca3de 2.67%,
        #b3a9d7 10.36%,
        #85e4b2 14.94%,
        #70d6dd 19.8%,
        #97acf1 23.97%,
        #d9b9e1 28.73%,
        #e7ddd5 33.09%,
        #e5cbd9 40.68%,
        #e4b7df 48.72%,
        #b8b6e9 56.17%,
        #8db6f2 65.45%,
        #b2a9f0 73.83%,
        #e3b2e8 79.67%,
        #e9ddda 85.96%,
        #81f5f7 93.28%,
        #7ba3f4 98.61%
    );

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const MidContentSection = styled.section``;

export const MarqueeBGCarouselWrapper = styled.div`
    overflow: hidden;
    translate: 0 50%;
    position: relative;
    z-index: 11;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 992px) {
        height: 10rem;
    }
`;
export const MarqueeBGCarousel = styled.div`
    overflow: hidden;
    background: url(${require("../../assets/images/vivid-blurred-colorful-bg.png")})
        center/100% 100% no-repeat;
    padding: 1rem 0;
    scale: 1.05;

    &.rotate-left {
        rotate: -4.889deg;
        translate: 0 50%;
    }
    &.rotate-right {
        rotate: 4.889deg;
        translate: 0 -50%;
    }
`;
export const MarqueeBGWrap = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    animation: infinite-RTL 0s linear infinite;
    & h3 {
        position: relative;

        &:after {
            content: "";
            position: relative;
            width: 2.625rem;
            height: 2.625rem;
            background: url(${require("../../assets/images/white-star-icon.svg").default}) center/cover no-repeat;
            display: inline-block;
        }
    }

    @media screen and (max-width: 768px) {
        & h3 {
            &:after {
                width: 1.625rem;
                height: 1.625rem;
            }
        }
    }
`;

export const TeamSection = styled.section`
    position: relative;
    z-index: 4;

    & :is(.bg-blur-sphere-top-elem, .bg-blur-sphere-bottom-elem) {
        position: absolute;
        width: 100%;
        z-index: -1;
        pointer-events: none;
    }
    & .bg-blur-sphere-top-elem {
        top: -40%;
        right: -40%;
    }
    & .bg-blur-sphere-bottom-elem {
        bottom: -40%;
        left: -50%;
    }

    & .bg-top-right-elem {
        position: absolute;
        top: 10%;
        right: -10%;
        transform: rotate(27deg);
    }

    & .bg-bottom-left-elem {
        position: absolute;
        bottom: 10%;
        left: -10%;
        transform: rotate(222deg) scale(0.9);
        filter: blur(6px);
    }
`;
export const TeamWrap = styled.div``;
export const TeamRow = styled.div``;
export const TeamImg = styled.div`
    & img:not(.floating-words) {
        width: clamp(170px, 100%, 400px);
        height: clamp(170px, 100%, 400px);
        object-fit: contain;
    }

    ${"" /* & .floating-words{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%; 
} */
    }
    ${"" /* & img:not(.floating-words){
    width: 100%;
    height: 100%; 
    object-fit:contain;
    scale: .8;
    border-radius:50%;
} */
    }

@media screen and (max-width: 992px) {
        text-align: center;
        ${"" /* & img:not(.floating-words){
    width: 50%;
    height: 50%; 
    } */
    }
    }
`;
export const TeamInfo = styled.div`
    & h6 {
        font-family: "Switzer-V-Bold";
        font-size: 1.5rem;
        line-height: 150%;
    }

    & p {
        font-size: 1.375rem;
    }

    @media screen and (max-width: 992px) {
        text-align: center;
        & h6 {
            font-size: 1.4rem;
        }
        & p {
            font-size: 1rem;
        }
    }
`;

export const MentorSection = styled.section`
    background: var(--theme-black-secondary)
        url(${require("../../assets/images/bg-bg-blur-element.png")})
        center/auto no-repeat;
`;
export const MentorWrap = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--theme-black-secondary);
    border-radius: 1rem;

    @media screen and (max-width: 768px) {
        padding: 1.2rem 1.5rem;
    }
`;
export const TeamCard = styled.div`
    background-color: var(--theme-white);
    text-align: center;

    & * {
        color: var(--theme-black-primary);
    }
`;
export const MentorContent = styled.div`
    padding: 1rem 0.88rem 0.89rem 0.88rem;
`;
export const MentorImg = styled.div`
    width: 100%;
    ${"" /* height: 13.75rem; */}
    ${"" /* margin-bottom: 1rem; */}

& img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${"" /* object-position: 0 -1.5rem; */}
    }
`;

export const FooterSection = styled.footer`
    background: url(${require("../../assets/images/noise-and-texture-bg.png")})
            center/cover no-repeat,
        url(${require("../../assets/images/vivid-blurred-colorful-bg.png")})
            center/cover no-repeat;
    background-blend-mode: multiply;
    --equal-paddings: 7rem;
    position: relative;
    overflow: hidden;

    & .bg-top-left-elem {
        position: absolute;
        top: 23%;
        left: -10%;
        transform: rotate(41deg);
    }

    & .bg-center-right-elem {
        position: absolute;
        top: 50%;
        right: -6%;
        transform: translate(0%, -50%) scale(0.9) rotate(47deg);
        filter: blur(5px);
    }

    @media screen and (max-width: 768px) {
        --equal-paddings: 3.25rem;
    }
`;
export const FooterWrap = styled.div`
    & h2 {
        font-size: 8.125rem;
    }

    @media screen and (max-width: 768px) {
        & h2 {
            font-size: 4.125rem;
        }
    }
`;

export const SubscribeBox = styled.div`
    border-radius: 1rem;
    border: 2px solid #fff;
    padding: 3rem 2.15rem;
    background: conic-gradient(
        from 127deg at 50.42% 51.28%,
        #c0d7f3 39.906227588653564deg,
        #b6d0f7 73.67929995059967deg,
        #eef4e1 118.94376039505005deg,
        #e2c1f9 155.6249964237213deg,
        #bfd1f9 209.30935621261597deg,
        #fafcfe 252.6490044593811deg,
        #bae4e2 316.5242886543274deg,
        #8c6be3 358.05930376052856deg
    );

    & p {
        font-size: 1.125rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const SubscribeForm = styled.div`
    border-radius: 0.5rem;
    background-color: var(--theme-white);
    padding: 0.38rem 0.5rem 0.38rem 1.31rem;
    display: grid;
    grid-template-columns: auto max-content;

    & input {
        border: 0;
        font-size: 1rem;
        width: 100%;
        color: var(--theme-black-primary);
    }
    & button {
        padding: 0.75rem 0.69rem;
    }

    & .error-message {
        border-radius: 0.7rem;
        right: 0rem;
        top: -0.9rem;
    }
`;

export const FooterInfo = styled.div`
    * {
        color: var(--theme-white-primary);
        font-size: 1.125rem;
        text-align: center;
    }

    & ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    @media screen and (max-width: 992px) {
        * {
            font-size: 1rem;
        }
    }
`;

export const RotateAnimation = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const FixedMusicDisc = styled.div`
    position: fixed;
    left: calc(100% - 11rem);
    bottom: 4rem;
    z-index: 1111;

    &[data-popover]:after {
        content: attr(data-popovertitle);
        display: block;
        position: absolute;
        top: -100%;
        left: 50%;
        translate: -50% 0;
        font-size: 0.85rem;
        font-family: "Switzer-V-Regular";
        opacity: 0;
        width: 14rem;
        text-align: center;
        background-color: var(--theme-black-primary);
        padding: 0.8rem;
        border-radius: 0.5rem;
        pointer-events: none;
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: -20%;
        left: 50%;
        translate: -50% 0;
        opacity: 0;
        width: 1rem;
        height: 1rem;
        text-align: center;
        background: url(${require("../../assets/images/bottom-fill-arrow-icon.svg").default}) center center/contain no-repeat;
        pointer-events: none;
    }

    &:hover:after,
    &:hover:before {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        left: auto;
        right: 1rem;
        bottom: 1rem;

        &[data-popover]:after {
            top: auto;
            bottom: 0;
            left: auto;
            right: calc(100% + 0.5rem);
            translate: 0% 0;
            opacity: 1;
            width: calc(100vw - 6rem);
            text-align: start;
            padding: 0.4rem 0.6rem;
        }
        &:before{
            display: none;
        }
    }
`;
export const MusicDisc = styled.div`
    animation: ${RotateAnimation} 2s linear infinite;

    @media screen and (max-width: 768px) {
        & img {
            width: 3rem;
        }
    }
`;
export const MusicDiscThumb = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 65%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ContentPopupWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1111;
    display: grid;
    place-items: center;
    background-image: linear-gradient(180deg, #72053d60 2%, #000000 100%);
    backdrop-filter: blur(8px);
    opacity: 0;
    pointer-events: none;

    &.active {
        opacity: 1;
        pointer-events: auto;
    }
`;
export const ContentPopup = styled.div`
    position: relative;

    border-radius: 1.375rem;
    border: 1.5px solid #fff2;

    &.imminent-future-wrap {
        padding: 6.63rem 4.59rem;
        background: linear-gradient(90deg, #0000, var(--theme-black-primary)),
            url(${require("../../assets/images/revolutionising-education-together-banner.png")})  14% center/cover no-repeat;
        max-width: 81.71744rem;
        width: calc(100% - 2rem);
        height: 90vh;
    }

    @media screen and (max-width: 768px) {
        &.imminent-future-wrap {
            padding: 2.3rem 1.5rem;
        }
    }
`;
export const PopUpClose = styled.button`
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    @media screen and (max-width: 768px) {
        right: 1rem;
        top: 1rem;
        & img {
            width: 2rem;
        }
    }
`;
export const ImminentFutureContent = styled.div`
    overflow: auto;
    height: 100%;
`;
