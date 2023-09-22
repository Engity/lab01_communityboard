import React from "react";
import Card from "./Card"
import '../assets/styles/DisplayBoard.css'

import VSALogo from '../assets/images/VSA_Logo.png'
import LatinXLogo from '../assets/images/LatinX_Logo.png'
import HuskyKaiLogo from '../assets/images/HuskyKai_Logo.png'
import MESAALogo from '../assets/images/MESAA_Logo.png'
import MSALogo from '../assets/images/MSA_Logo.png'
import FASALogo from '../assets/images/FASA_Logo.png'
import BSULogo from '../assets/images/BSU_Logo.png'
import PISALogo from '../assets/images/PISA_Logo.png'
import PSYLogo from '../assets/images/PSY_Logo.png'
import TPPLogo from '../assets/images/TheProgrammingProject_Logo.png'

const DisplayBoard = (props) => {
    let count = 0;
    let setCount = () => {
        count++;
        return count;
    }

    const originalClubData = [{
        name: "Vietnamese Student Organization",
        description: `
                Vietnamese Student Association is committed to increasing the visibility of Vietnamese and Vietnamese-American culture 
                through education, organizing cultural events, experiential opportunities, and other methods.
                   
                Join VSAUWT now and you won't regret it!
                Meeting Information: To be announced for Autumn Quarter
            `,
        image: VSALogo,
        link: "https://www.instagram.com/uwtvsa/",
    },
    {
        name: "Black Student Union",
        description: `
            Our mission is to offer a sense of community and unity for Black students on campus by providing an open and positive forum for students to express their views. 
            Topics include, but are not limited to: current events, academics, culture, community service, student life and professional development. 
            Members will be able to expand their networking with various departments, earn DawgBones by attending meetings and events, and enjoy provided refreshments, snacks, and games.
            `,
        image: BSULogo,
        link: "https://www.instagram.com/uwtbsu/",
    },
    {
        name: "Filipino-American Student Association",
        description: `
            FASA sa UWT is a club that shares and celebrates the Filipino American Identity as well as our culture in the Philippines. 
            We have events that involve our four main pillars showcasing the Fil-Am Identity: Educational, Political, Cultural, and Social. 
            Although we are a cultural club, any that wants to learn more about Filipino history and identity can join!
            `,
        image: FASALogo,
        link: "https://www.instagram.com/fasasauwt",
    },
    {
        name: "Latinx Student Union",
        description: `
                LSU is committed to building an inclusive, supportive, and empowering community for all Latinx Students at UWT.
                Meeting Information: To be announced for Autumn Quarter
            `,
        image: LatinXLogo,
        link: "https://www.instagram.com/lsuuwt",
    },
    {
        name: "Pacific Islander Student Alliance",
        description: `
            The Pacific Islander Student Alliance works towards perpetuating the uniqueness of Pacific Island cultures while also encouraging the importance of community service. 

            Why Join? PISA isn't limited to Pacific Islanders only. We are open to any student who wants to feel a sense of belonging on campus as well as opened to contributing their time to serving our Tacoma community. 
            
            Meeting Information: To be announced for Autumn Quarter
            `,
        image: PISALogo,
        link: "https://www.instagram.com/pisauwt/",
    },
    {
        name: "Huskykai Japanese Student Association",
        description: `
            Huskykai, the Japanese Student Association, gives voice to students of Japanese heritage on campus. 
            We celebrate and enjoy Japanese culture together through annual meetings and events throughout a year. 
            As an identity-based organization, we also welcome any student to come and learn more about Japanese culture.
            `,
        image: HuskyKaiLogo,
        link: "https://www.instagram.com/uwtacoma_huskykai",
    },
    {
        name: "Middle Eastern South Asian Association (MESAA)",
        description: `
            Our goal is to share similarities and differences within our cultures as well as socialize and make friends from different backgrounds. 
            As the Middle Eastern South Asian Association at the University of Washington Tacoma campus, we are committed to promoting Middle Eastern and South Asian culture throughout the campus and creating a sense of belonging.

            Meeting Information: To be announced for Autumn Quarter
            `,
        image: MESAALogo,
        link: "https://www.instagram.com/mesaa_uwt/",
    },
    {
        name: "Muslim Student Association",
        description: `
            We, the members of the Muslim Students Association at the University of Washington Tacoma, hereby establish this constitution to govern the organization and promote its mission. 
            Our purpose is to provide a supportive community for Muslim students and to increase awareness and understanding of Islam and Muslim culture on campus. 
            This constitution outlines the rules, objectives, and functioning of the organization, defines the powers and responsibilities of its officers and members, and serves as a guide for decision making and conflict resolution. 
            We strive to make the Muslim Students Association a dynamic and inclusive organization that contributes to the growth and enrichment of the university community.
            `,
        image: MSALogo,
        link: "https://www.instagram.com/msauwt/",
    },
    {
        name: "The Programming Project",
        description: `
            A space where first and second year computer science students can share project ideas and receive help/advice from their peers. 
            The organization will also conduct a quarterly project for those who would like to participate.
            `,
        image: TPPLogo,
        link: "https://www.instagram.com/uwtprogramming/",
    },
    {
        name: "Psychology Club",
        description: `
            We, the Psychology Club at UWT, aim to encourage interaction among students in the Psychology program,
            provide academic support, aid in career development, and to share resources to those in our community.
            Meeting Information: To be announced for Autumn Quarter
            `,
        image: PSYLogo,
        link: "https://www.instagram.com/uwtpsych/",
    },
    ];
    let clubData = originalClubData;
    if (props.searchVal && props.searchVal !== '') {
        const searchValue = props.searchVal.toLowerCase();
        clubData = originalClubData.filter((club) => {
            return club.name.toLowerCase().search(searchValue) != -1 || club.description.toLowerCase().search(searchValue) != -1
        }
        )
    }
    clubData.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="DisplayBoard">
            {
                clubData.map((club) => {
                    return <Card
                        key={setCount()}
                        id={count}
                        description={club.description}
                        image={club.image}
                        name={club.name}
                        link={club.link}
                    />
                })
            }
        </div>
    )
}

export default DisplayBoard;