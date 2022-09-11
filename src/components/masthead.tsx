import React, { useContext, useRef } from 'react';
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow-down.svg';
import video from 'C:/Users/zapas/web_shit/projects/margelo-website-vite/src/assets/masthead-bg.mp4';
import { ScrollContext } from '../utils/scroll-observer';

const Masthead: React.FC = () => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);
    const { current: elContainer } = refContainer;

    let progress = 0;

    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }

    console.log("progress:", progress) // 0...1
    console.log("scrollY:", scrollY)
    console.log("elContainer.clientHeight:", elContainer?.clientHeight) // 975
    console.log("result: ", progress * 20)

    return (
        <div
            ref={refContainer}
            style={{
                transform: `translateY(-${progress * 20}vh)`,
            }}
            className={
                'min-h-screen flex flex-col justify-between items-center sticky top-0 -z-10'
            }
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className={'absolute w-full h-full object-cover '}
            >
                <source src={video} type={'video/mp4'} />
                <source src={'../assets/masthead-bg.mp4'} type={'video/mp4'} />
            </video>
            <div
                className={
                    'flex-grow-0 z-10 pt-10 transition-opacity duration-1000 w-[40px] h-[40px] '
                }
            >
                <img src={logo} alt={'logo'} />
            </div>
            <div
                className={
                    'p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center z-10'
                }
            >
                <h1 className={'mb-6 text-4xl xl:text-5xl '}>Margelo</h1>
                <h2 className={'mb-2 text-2xl xl:text-3xl tracking-tight'}>
                    <span>App development,</span> <span>done right.</span>
                </h2>
            </div>
            <div
                className={
                    'flex-grow-0 pb-10 md:pb-12 transition-all duration-1000 z-10'
                }
            >
                <img src={arrow} className={'w-[60px]'} alt={'arrow down'} />
            </div>
        </div>
    );
};

export default Masthead;
