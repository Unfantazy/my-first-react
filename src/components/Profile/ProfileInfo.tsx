import s from "../../styles/profile.module.css";
import React from "react";

export function ProfileInfo() {
    return (
        <div>
            <div className={s.contentImg}>
                <img
                    src="https://www.visitflorida.com/content/dam/visitflorida/en-us/images/cities/panama-city-beach/St%20Andrews%20State%20Park%20Beach%2002.jpg.1280.500.rendition"
                    alt=""/>
            </div>
            <div className={s.contentUser}>
                <div className={s.contentAvatar}>
                    <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg" alt=""/>
                </div>
                <div className={s.contentInfo}>
                    <div className={s.contentName}>Angelina</div>
                    <div className={s.contentBirth + '' + s.contentInformation}> Birthday: 09/02/1998</div>
                    <div className={s.contentCity + '' + s.contentInformation}>City: Tula</div>
                    <div className={s.contentEducation + '' + s.contentInformation}>Education: Tula State Pedagogigal
                        University
                    </div>
                    <div className={s.contentSite + '' + s.contentInformation}>WebSite: vk.com</div>
                </div>
            </div>
        </div>
    )
}