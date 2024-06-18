export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Shrivatsa Deshpande',
    subtitle: 'final year CSE student at VIT Bhopal',
    description: 'final year CSE student at VIT Bhopal',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Shrivatsa Deshpande'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/shrivatsadeshpande/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/ShrivatsaDeshpande/'
        },
    ],
    hero: {
        title: 'I\'m an android developer exploring cybersecurity',
        text: "👋 Hello! I'm a final-year B.Tech Computer Science student with a strong passion for cybersecurity.\n\n🔒 My journey into the world of cybersecurity began with a curiosity about how systems are protected against threats. This curiosity quickly evolved into a commitment to mastering the skills necessary to safeguard digital environments.\n\n💻 I believe in the power of consistent learning and improvement. Each day, I dedicate time to expanding my knowledge through courses and practical experiences. This approach has provided me with a solid foundation in areas such as network security, ethical hacking, and vulnerability assessment.\n\n📚 Throughout my academic career, I have focused on courses and projects that enhance my technical skills and understanding of cybersecurity principles. Engaging in hands-on labs and simulations has allowed me to apply what I've learned in real-world scenarios.\n\n\t🔧 My technical toolkit includes:\n\t\t•⁠  ⁠Programming in Python, Java, and C++\n\t\t•⁠  Cybersecurity tools like Wireshark, Nmap, Metasploit, and Burp Suite\n\t\t•⁠  Understanding of network protocols, encryption, and security frameworks\n\n🌟 I'm interested in roles involving threat analysis, penetration testing, and cybersecurity consulting. I am eager to contribute to teams dedicated to protecting data and ensuring the integrity of systems.",
        image: {
            src: '/headshot.webp',
            alt: 'Shrivatsa Deshpande headshot'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
