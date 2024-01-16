export const bio = [
    "Hello! I am Medha Prodduturi, a Computer Science and Engineering undergraduate major.",
    `My skill work is based on Python and SQL. Executing analytical experiments, collecting (un)structured datasets, and interpreting the trends & patterns is quite intriguing to me.`,
    `I am actively looking for internships & full-time opportunities in the field of data science and engineering. Looking forward to applying my in-depth understanding to industry relevant projects!`,
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, R Programming, SQL ",
        color: "1",
        percentage: "100",
    },
    {
        title: "Azure",
        skillName: "AWS, Azure Data Factory, Azure DevOps, Azure Data Lake",
        color: "6",
        percentage: "100",
    },
    {
        title: "Design",
        skillName: "Snowflake, Databricks",
        color: "4",
        percentage: "100",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA",
        color: "7",
        percentage: "100",
    },
    {
        title: "Tools",
        skillName: "PySpark, Hadoop, Airflow, PowerBI",
        color: "10",
        percentage: "100",
    },
    {
        title: "Databases",
        skillName: "MySQL, MSSQL, MongoDB, PostgreSQL",
        color: "5",
        percentage: "100",
    },
    {
        title: "IDE",
        skillName: "VS Code, RStudio, SQL Server Management Studio",
        color: "6",
        percentage: "100",
    },
];

export const projects = {
    webProjects: [
        // {
        //     projectName: "Programming Diaries",
        //     image: "images/programmingdiaries.png",
        //     summary:
        //         "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
        //     preview: "https://programmingdiaries.herokuapp.com/",
        //     techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        // },
        // {
        //     projectName: "Find Your Bank",
        //     image: "images/findyourbank.png",
        //     summary:
        //         "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
        //     preview: "https://clever-fermi-0d5d76.netlify.app",
        //     techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        // },
        // {
        //     projectName: "Web Portfolio",
        //     image: "images/portfolio.png",
        //     summary:
        //         "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
        //     preview: "https://github.com/vinaysomawat/Travographer-Portal",
        //     techStack: ["HTML", "Bootstrap", "JavaScript"],
        // },
        // {
        //     projectName: "Resume Builder",
        //     image: "images/resume-builder.png",
        //     summary:
        //         "Browser based editor to build and download Resumes in a customizable templates.",
        //     preview: "https://vinaysomawat.github.io/Resume-Builder",
        //     techStack: ["HTML", "Bootstrap", "JavaScript"],
        // },
    ],
    softwareProjects: [
        {
            projectName: "Financial Time Series Analysis",
            image: "images/pizzaorderchatbot.png",
            summary:
                "Using time series data of stock values of 3 major banks for a given period of time, I found the best time series model between ARMA, ARIMA, and SARIMA for stock prediction. ",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        // {
        //     projectName: "WhatsApp-Bot",
        //     image: "images/whatsappbot.jpg",
        //     summary:
        //         "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
        //     preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
        //     techStack: ["Selenium", "Chrome Webdriver", "Python"],
        // },
        // {
        //     projectName: "Bill Generator",
        //     image: "images/billgenerator.png",
        //     summary:
        //         "GUI to transfer data to excel sheets and generate bills on the local shops.",
        //     preview: "https://github.com/vinaysomawat/Bill-Generator",
        //     techStack: ["Tkinter", "Openxlpy", "Python"],
        // },
    ],
    androidProjects: [
        // {
        //     projectName: "NITW-CSE",
        //     image: "images/nitwcse.jpg",
        //     summary:
        //         "The Application display details of Department courses, reference books, research, publication and faculty profile.",
        //     preview: "https://github.com/vinaysomawat/NITW-CSE",
        //     techStack: ["JAVA", "XML", "Android"],
        // },
        // {
        //     projectName: "CareerHigh-App",
        //     image: "images/carrerhigh.png",
        //     summary:
        //         "The Application display the webpages of website careerhigh.in in android devices.",
        //     preview: "https://github.com/vinaysomawat/CareerHigh-Android",
        //     techStack: ["JAVA", "XML", "Android"],
        // },
    ],
    freelanceProjects: [
        // {
        //     projectName: "SnylloAir.com",
        //     image: "images/snylloair.png",
        //     summary:
        //         "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
        //     preview: "https://www.snylloair.com/",
        //     techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        // },
        // {
        //     projectName: "Delivery+",
        //     image: "images/AM-Logo-.png",
        //     summary: "Android Application to display website in android devices.",
        //     preview:
        //         "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
        //     techStack: ["Android", "JAVA", "Play Store"],
        // },
    ],
};

export const experience = [
    {
        title: "Schlumberger (SLB)",
        duration: "May 2023 - Aug 2023",
        subtitle: "Data Engineer Intern",
        details: [
            `Adept in utilizing Azure Data Factory for ETL processes, orchestrating data movement and transformations across
            various data sources and destinations.`,
            `Played a key role in the Alteryx Migration Project, developing and optimizing data flows and data pipeline architecture
            to ensure data integrity and accuracy.`,
            `Experienced in writing complex SQL queries using Microsoft SQL Server Management Studio for data extraction and
            transformation.`,
            `Demonstrated proficiency in Agile principles, collaborating with cross-functional teams using Scrum frameworks to
            deliver high-quality results.`
        ],
        tags: ["Azure Data Factory", "Azure DevOps", "Alteryx", "Data Warehousing", "Agile", "SQL"],
        icon: "briefcase",
    },
    
];

export const education = [
    {
        title: "CISE Senior Certificate Program",
        duration: "Jan 2024 - May 2024",
        subtitle: "University of Florida, Gainesville, USA",
        details: [],
        tags: [
            "Data Science",
            "Advanced Data Structures",
            "UI/UX Design",
            "Software Testing and Verification",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Computer Science and Engineering (B.Tech)",
        duration: "Aug 2020 - Jun 2024",
        subtitle: "Mahindra University, Hyderabad, India",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Natural Language Processing",
            "Database Management Systems",
            "Software Engineering",
            "OOPS with Java",
            "Machine Learning with Python",
            "Deep Learning", "Operating Systems"
        ],
        icon: "graduation-cap",
    },
    {
        title: "High School Diploma",
        duration: "Aug 2016 - Jun 2020",
        subtitle: "William Fremd High School, Palatine, USA",
        details: [],
        tags: ["AP Computer Science", "AP Calculus", "AP Statistics", "AP Physics", "AP Chemistry"],
        icon: "graduation-cap",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            
            {
                text: "GitHub",
                link: "https://github.com/medprod",
            },
            
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/medha-prodduturi/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/",
            },
            
        ],
    },
    {
        label: "copyright-text",
        data: [
            "&copy; 2024 All rights reserved by Medha Prodduturi",
        ],
    },
];