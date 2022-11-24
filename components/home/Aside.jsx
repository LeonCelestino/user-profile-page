import React from 'react'
import HomeStyle from '../../styles/Home.module.css'
import Image from 'next/image'
import profile from "../../images/perfilphoto.jpeg"
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'


function Aside() {
    return (
        <aside className={HomeStyle.aside}>
            <div className={HomeStyle.profile}>
                <div className={HomeStyle.imgWrap}>
                    <Image
                        src={profile}
                        width={150}
                        height={150}
                        placeholder="blur"
                        style={{ borderRadius: '50%' }}
                    />
                </div>
                <h2 className={HomeStyle.name}>Leandro Retechuki</h2>

            </div>
            <div className={HomeStyle.socialmedias}>
                <Link href="www.facebook.com">Facebook <span><FaExternalLinkAlt /></span></Link>
                <Link href="www.instagram.com">instagram <span><FaExternalLinkAlt /></span></Link>
                <Link href="www.github.com">github <span><FaExternalLinkAlt /></span></Link>
            </div>
            <h5 className={HomeStyle.creationDate}>Conta criada em: 16/11/2022 às 17:31</h5>
        </aside>
    )
}

export default Aside