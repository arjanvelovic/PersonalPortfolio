const PortfolioInfo:Object = {
    'navbar': {
        'name': 'Arjan Velovic',
        'logo': 'images/logoBlack.png',
        'sections': ['Home', 'About', 'Projects', 'Resume'],
    },

    'home': {
        'background': 'images/background.jpg',
        'image': 'images/headshot.png',
        'title': 'Arjan Velovic',
        'blurb': 'Full Stack Engineer crafting seamless digital experiences. Expert in JavaScript, Python, React, Flask. Explore my portfolio for innovative solutions.',
        'section3': 'Projects',
        'scrollgif': 'images/scrollgif.gif',
        'links': [
            {
                'name': 'linkedin',
                'logo': 'fa-brands fa-linkedin',
                'link': 'https://www.linkedin.com/in/arjan-velovic/'
            },
            {
                'name': 'github',
                'logo': 'fa-brands fa-github',
                'link': 'https://github.com/arjanvelovic'
            },
            {
                'name': 'email',
                'logo': 'fa-solid fa-envelope',
                'link': 'mailto:arjanvelovic@gmail.com'
            },
        ]
    },

    'about':{
        'title': 'About Me',
        'subtitle': '',
        'abouttitle': 'Get to know me!',
        'abouttext': [
            "I'm a seasoned Full Stack Engineer, weaving my magic with Python, JavaScript, React, and Flask. By day, I'm deep in the aerospace industry as a Mechanical Engineer, but I've got my sights set on the thrilling world of software engineering. Always on the quest for growth, I recently wrapped up the Coding Temple Full Stack Bootcamp, diving into the latest development practices and frameworks.",

            "My journey is a unique blend of technical expertise and hands-on engineering experience. Whether it's tackling complex problems or crafting elegant solutions, I thrive on the challenge. The boot camp was a game-changer, amplifying my skills and opening new doors in the tech landscape.",

            "I'm all about embracing the dynamic nature of the software world and contributing meaningfully to transformative projects. If you're passionate about tech and innovation, let's connect and explore how my diverse background can bring a fresh perspective to your team!"
        ],

        'section4': 'Resume',

        'skilltitle': 'My Skills',
        'skills': ['Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Flask', 'Django', 'POSTGRESQL', 'SQLITE', 'MATLAB', 'HTML', 'CSS', 'TailWind', 'BootStrap', 'MUI', 'Jinja', 'Next', 'GIT', 'GitHub', 'Firebase', 'CATIA', 'SolidWorks', 'AutoCAD']
    },

    'projects': {
        'title': 'Projects',
        'subtitle': '',
        'projects': [
            {
                'title': 'Specialized Website',
                'description': "Developed a sleek full-stack website, mirroring Specialized Bike's commerce platform. It utilizes React TypeScript for the frontend and Flask Python for the backend, managing user operations, authentication, cart functionalities, and secure payments. Ensuring performance and security, the website delivers a seamless shopping experience, demonstrating proficiency in modern web development technologies.",
                'link': 'https://specializedvelovic.netlify.app',
                'github': 'https://github.com/arjanvelovic/SpecializedReact',
                'image': 'images/projectSpecailized.png'
            },
            {
                'title': 'Bidding Bazzar',
                'description': 'A Flask-powered auction webpage, where users can create accounts, list items, place bids, and manage profiles seamlessly. With real-time bidding facilitated by WebSocket technology, the platform prioritizes technical excellence with robust error handling, data validation, and security measures.',
                'link': 'https://biddingbazzar.onrender.com/',
                'github': 'https://github.com/arjanvelovic/BiddingBazzar',
                'image': 'images/projectBiddingBazzar.png'
            },
            {
                'title': 'Weather App',
                'description': 'This is a weather app which displays the current, hourly, and 7 day forecast of searched locations in the United States. The app was build with react and is primary written in typescript. The app makes API request to the National Weather Service for weather data and GeoCode for location information based on user inputs.',
                'link': 'https://velovicweather.netlify.app/',
                'github': 'https://github.com/arjanvelovic/weatherapp',
                'image': 'images/projectWeather.png'
            },
            {
                'title': 'Tesla Webpage Clone',
                'description': 'Developed a full stack Tesla clone website with a clean and beautiful user interface with a React frontend and a Flask backend. Utilized TypeScript, Python, JavaScript, SQL, and HTML/CSS to replicate the functionality and design of the official Tesla website.',
                'link': 'https://velovictesla.netlify.app/',
                'github': 'https://github.com/arjanvelovic/ReactVehicle',
                'image': 'images/projectTesla.png'
            },
            {
                'title': 'BlackJack Object Oriented',
                'description': 'A python script for blackjack, meticulously crafted with object-oriented programming. It includes logic for the complete ruleset, such as splitting, doubling down, and insurance.',
                'link': 'https://codesandbox.io/p/devbox/blackjack-969y9y?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clscoe1er0006356gz5behnp4%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clscoe1er0002356gvm09bt06%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clscoe1er0004356ghaiqvzya%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clscoe1er0005356grgy1wcga%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B52.75877924018622%252C47.24122075981378%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clscoe1er0002356gvm09bt06%2522%253A%257B%2522id%2522%253A%2522clscoe1er0002356gvm09bt06%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clscoe1er0005356grgy1wcga%2522%253A%257B%2522id%2522%253A%2522clscoe1er0005356grgy1wcga%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clscoe1er0003356g1admawr7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clscoe1er0003356g1admawr7%2522%257D%252C%2522clscoe1er0004356ghaiqvzya%2522%253A%257B%2522id%2522%253A%2522clscoe1er0004356ghaiqvzya%2522%252C%2522tabs%2522%253A%255B%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D',
                'github': 'https://github.com/arjanvelovic/BlackJack',
                'image': 'images/projectBlackJack.png'
            },
        ],
    },

    'resume': {
        'background': 'images/background.jpg',
        'title' : 'Resume',
        'image' : 'images/Velovic_Resume.jpg',
        'pdf': '/files/Velovic_Resume.pdf'
    },

    'footer': {
        'logo': 'images/logo.png',
        'copyright': '©2024 Created by Arjan Velovic',
        'crlink': 'https://velovic.netlify.app/',
        'links': [
            {
                'name': 'linkedin',
                'logo': 'fa-brands fa-linkedin',
                'link': 'https://www.linkedin.com/in/arjan-velovic/'
            },
            {
                'name': 'github',
                'logo': 'fa-brands fa-github',
                'link': 'https://github.com/arjanvelovic'
            },
            {
                'name': 'email',
                'logo': 'fa-solid fa-envelope',
                'link': 'mailto:arjanvelovic@gmail.com'
            },
        ]
    }

}

export default PortfolioInfo