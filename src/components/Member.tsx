import React from "react"

interface MemberProps {
    id: string,
    link: string,
    name: string,
    socialId: string,
}

const Member: React.FC<MemberProps> = ({id, link, name, socialId}) => {
    const githubLink = `https://github.com/` + socialId.slice(1)
    return (
        <div>
            <img src={`src/assets/team/margelo_faces_${id}.svg`} alt={'team member image'}/>
            <p className={'text-2xl xl:text-3xl'}>{name}</p>
            <div className={'text-xl'}>
                <a target={'_blank'} href={githubLink}>
                    {socialId}
                </a>
            </div>
        </div>
    )
}

export default Member