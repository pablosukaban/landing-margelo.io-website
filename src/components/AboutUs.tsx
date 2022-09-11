import React from 'react';
import Member from './Member';
import { team } from '../constants';

const AboutUs = () => {
    return (
        <section
            className={'flex flex-col py-20 bg-white text-3xl md:text-4xl'}
        >
            <div className={'container mx-auto px-11'}>
                <p
                    className={
                        'leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'
                    }
                >
                    <strong>We will help you ship better apps, faster. </strong>
                    Our team of expert engineers has created the best user
                    experiences in some of the most popular apps worldwide.{' '}
                </p>
                {/*<p>Our services:</p>*/}
                {/*<ul>*/}
                {/*    <li>From Idea to AppStore: Full App Design and Development</li>*/}
                {/*    <li>Performance Optimization: Startup-time, Animation and overall smoothness optimization for existing*/}
                {/*        apps*/}
                {/*    </li>*/}
                {/*    <li>Custom Module Development: Development of specific UIs, animations, gestures or native modules for*/}
                {/*        existing apps*/}
                {/*    </li>*/}
                {/*    <li>Consulting: One-on-one consulting with a React Native, iOS or Android expert and bug fixing</li>*/}
                {/*</ul>*/}
            </div>
            <div className={'container mx-auto px-11 text-center mt-28'}>
                <h2 className={'font-bold capitalize'}>Our team</h2>
                <p className={'mt-2'}>the &ldquo;spec-ops&rdquo;</p>
                <div
                    className={
                        'mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'
                    }
                >
                    {team.map((item) => (
                        <Member
                            key={item.id}
                            id={item.id}
                            link={item.link}
                            name={item.name}
                            socialId={item.socialId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs