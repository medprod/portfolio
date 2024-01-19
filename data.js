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
        
        {
            projectName: "OpenWeather ETL Pipeline Automation",
            image: "images/airflow_openweather.png",
            summary:
                "In this project, I extracted weather forecast data of the city of Chicago using OpenWeather Map API. Post extraction, I performed appropriate transformations on the data. Using Apache Airflow, I orchestrated & scheduled the data pipeline and loaded the output into an AWS S3 bucket.",
            preview: "https://github.com/medprod/OpenWeather-Airflow",
            techStack: ["Apache Airflow", "ETL", "AWS", "Python"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Financial Time Series Analysis",
            image: "images/timeseries_financial.png",
            summary:
                "Using time series data of stock values of 3 major banks for a given period of time, I found the best time series model between ARMA, ARIMA, and SARIMA for stock prediction. ",
            preview: "https://github.com/medprod/analysis-of-a-financial-time-series",
            techStack: ["Python", "Time Series Modelling"],
        },
        {
            projectName: "Plagiarism Check",
            image: "images/plag_check.webp",
            summary:
                "Here, I designed a blog search tool to retrieve the top K least redundant blogs. Using basic text processing techniques like edit distance and n-gram models, I developed a plagiarism check tool as a metric for evaluation.",
            preview: "https://github.com/medprod/plagiarism-check",
            techStack: ["Python", "Levinstein's Edit Distance", "N-Gram Model"],
        },
        {
            projectName: "Fake News Classification Model",
            image: "images/fakenews.webp",
            summary: "In this project, I performed data cleaning & processing using NLP techniques and used ML Algorithms like Logistic Regression, Random Forrest, and SVM to classify news as fake/real.",
            preview: "https://github.com/medprod/Detecting-Fake-News",
            techStack: ["Python", "Machine Learning"],
        },
        {
            projectName: "Work Co-Occurrences: Fluke or Not",
            image: "images/word_co.png",
            summary:
                "Word Co-occurrence analysis is widely used in various forms of research and aims to find similarities between word pairs and patterns. Here, we use nltk - natural language tool kit, pandas, and NumPy libraries to analyze two .txt files and understand the co-occurrence of words.",
            preview: "https://github.com/medprod/word-co-occurrence",
            techStack: ["NLTK Library", "Pandas", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "Instagram Data Cloning",
            image: "images/instagram.png",
            summary:
                "Extracted instagram data and performed various sql queries to analyze.",
            preview: "https://github.com/medprod/Insta-Data-Cloning",
            techStack: ["SQL"],
        },
        {
            projectName: "Optimizing Non-Linear Programming Techniques",
            image: "images/opti.png",
            summary:
                "Developed a repository of computer programs with all standard optimization and AI algorithms mainly using Python.",
            preview: "https://github.com/medprod/Non-Linear-Optimization-Techniques",
            techStack: ["Python", "Optimization Techniques AI"],
        },
        {
            projectName: "Email Waitlist Web Application",
            image: "images/waitlist.jpg",
            summary:
                "Developed a sample waitlist application using SQL to simulate the common functions of moving through a web queue and used various NodeJS libraries and packages to generate random users that stand presorted for an authentic experience.",
            preview: "https://github.com/medprod/basic-web-app",
            techStack: ["Python", "Nodejs", "SQL", "Javascript"],
        },
        {
            projectName: "Web Scraping Bot",
            image: "images/web-scraping-diagram.png",
            summary:
                "Using BeautifulSoup to build a Web Scraping Bot; Scraping stock data on a day to day basis & Sending through Mail.",
            preview: "https://github.com/medprod/webscraping-bot",
            techStack: ["Python", "Web Scraping"],
        },

    ],
    freelanceProjects: [
        {
            projectName: "Data Visualization with R",
            image: "images/r.png",
            summary:
                "Recreated a plot from The Economist using ggplot2 and R. Worked with Geom & the ggthemes package to reproduce the scatterplot as accurately as possible.",
            preview: "https://github.com/medprod/data-visualization-R",
            techStack: ["R Programming", "ggplot2", "Geom", "ggthemes"],
        },
        {
            projectName: "Analysis: Flavors of Cacao",
            image: "images/cacao.png",
            summary: "A thorough analysis and visualization of a dataset that focuses on expert ratings of various types of dark chocolates.",
            preview:
                "https://github.com/medprod/open-data-proj2",
            techStack: ["Python", "Data Analysis", "Data Visualization"],
        },
        {
            projectName: "Analysis: City of Chicago Salaries",
            image: "images/chicago.png",
            summary: "A thorough analysis and visualization of the employees, positions, and salaries in Chicago.",
            preview:
                "https://github.com/medprod/open-data-proj1",
            techStack: ["Python", "Data Analysis", "Data Visualization"],
        },
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