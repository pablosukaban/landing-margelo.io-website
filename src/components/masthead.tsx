import React from 'react';
import logo from "../assets/logo.svg"
import logo1 from "../assets/logo1.png"
import arrow from "../assets/arrow-down.svg"
import video from 'C:/Users/zapas/web_shit/projects/margelo-website-vite/src/assets/masthead-bg.mp4';

const Masthead: React.FC = () => {
    return (
        <div
            className={
                'min-h-screen flex flex-col justify-between items-center '
            }
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className={'absolute w-full h-full object-cover -z-10'}
            >
                <source src={video} type={'video/mp4'}/>
                <source src={'../assets/masthead-bg.mp4'} type={'video/mp4'}/>
            </video>
            <div className={'flex-grow-0 pt-10 transition-opacity duration-1000 w-[40px] h-[40px] '}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div
                className={
                    'p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center'
                }
            >
                <h1 className={'mb-6 text-4xl xl:text-5xl '}>Margelo</h1>
                <h2 className={'mb-2 text-2xl xl:text-3xl tracking-tight'}>
                    <span>App development,</span> <span>done right.</span>
                </h2>
            </div>
            <div className={'flex-grow-0 pb-10 md:pb-20 transition-all duration-1000'}>
                <img src={arrow} className={'w-[60px]'} alt={'arrow down'}/>
            </div>
        </div>
    );
};

export default Masthead;
