export const resumeSections = [
    {
        sectionName: "Education",
        sectionBlocks: [
            {
                title: {
                    bold: "The University of Glasgow (UofG), UK,",
                    regular: "MSc in Computing Science"
                },
                date: {
                    start: "Sep 2024",
                    end: "Aug 2025"
                },
                points: [
                    "Cumulative GPA: A4",
                    "Research interests: Natural Language Processing (NLP) and Human-Computer Interaction (HCI)",
                    "Awarded the African Excellence full scholarship (Acceptance rate: 1-1.5\%)",
                    "Coursework includes: Machine Learning and AI, Deep Learning, Text-as-Data, Data Science and Systems,  HCI Design and Evaluation, Mobile HCI, Information Visualisation, and Conversational Interfaces (audited)."
                ]
            },
            {
                title: {
                    bold: "The American University in Cairo (AUC), Egypt",
                    regular: "BSc in Computer Engineering"
                },
                date: {
                    start: "Sep 2019",
                    end: "June 2024"
                },
                points: [
                    "GPA: 3.845/4.0 (Highest Honors)",
                    "Double minor: Mathematics, Business Administration",
                    "Coursework includes: Fundamentals of Computing (I & II), Analysis and Design of Algorithms, Programming Languages, Computer Organisation and Assembly, Computer Architecture, Operating Systems, Database Systems, Embedded Systems, Distributed Systems, and Digital Design (I and II)"
                ]
            },
            {
                title: {
                    bold: "The University of Edinburgh (UoE), UK",
                    regular: "Study Abroad Semester"
                },
                date: {
                    start: "Sep 2022",
                    end: "Jan 2023"
                },
                points: [
                    "Coursework: Human-Computer Interaction, Computer Networks, Software Testing, and Bioinformatics",
                ]
            },
        ]
    },
    {
        sectionName: "Technical Experience",
        sectionBlocks: [
            {
                title: {
                    bold: "Reserach Intern (Deep Learning)",
                    regular: "AUC and Osaka University – online"
                },
                date: {
                    start: "June 2023",
                    end: "Aug 2023"
                },
                points: [
                    "Boosted cross‑building floor prediction accuracy by up to 25% through hyperparameter tuning and enhanced input representations.",
                    "Leveraged explainable AI (SHAP, LIME) to interpret indoor location predictions from CNNs and XGBoost.",
                    "Delivered research presentations on state‑of‑the‑art indoor localization models."
                ]
            },
            {
                title: {
                    bold: "Undergraduate Teaching Assistant (CS II)",
                    regular: "AUC – Cairo, EG"
                },
                date: {
                    start: "Feb 2023",
                    end: "May 2023"
                },
                points: [
                    "Taught supplemental labs implementing OOP concepts and sorting algorithms.",
                    "Held office hours to explain concepts and answer student questions.",
                    "Assisted students with coursework and project requirements."
                ]
            },
            {
                title: {
                    bold: "Software Development Engineering Intern",
                    regular: "Cairo, EG"
                },
                date: {
                    start: "Aug 2022",
                    end: "Aug 2022"
                },
                points: [
                    "Automated multi-machine Jenkins jobs with Bash and Python scripts.",
                    "Implemented Git pre-push hooks to automate checks and tasks.",
                    "Achieved 16% speed-up for an internal testing tool through synchronisation improvements.",
                ]
            },
            {
                title: {
                    bold: "Software Engineering Intern",
                    regular: "AUC Digital Libraries – Cairo, EG"
                },
                date: {
                    start: "June 2022",
                    end: "July 2022"
                },
                points: [
                    "Developed a face recognition system to digitise and catalog library assets.",
                    "Utilised few-shot learning to enable accurate face training and recognition within a custom GUI tool.",
                    "The project was showcased and shared with librarians at the 2022 MELA Conference as a library tool."
                ]
            },
            {
                title: {
                    bold: "Undergraduate Teaching Assistant (CS I)",
                    regular: "AUC – Cairo, EG"
                },
                date: {
                    start: "Sep 2020",
                    end: "Dec 2020"
                },
                points: [
                    "Taught programming fundamentals (number systems, data structures).",
                    "Held office hours to explain concepts and answer student questions.",
                    "Prepared exam review notes for students."
                ]
            },
        ]
    },
    {
        sectionName: "Selected Projects",
        sectionBlocks: [
            {
                title: {
                    bold: "Hadi - The Weather Chatbot, UofG Coursework",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Developed an NL dialogue system that recognises intent and extracts location/date from user queries.",
                    "Integrated LangChain with a locally run LLaMA 3.2 via Ollama to manage conversation flow and external API calls for real-time weather forecasts.",
                    "Built an interactive front end using Streamlit, with OpenStreetMap for geocoding and WeatherAPI for forecast data.",
                    "Tech: LangChain, Ollama, LLaMA 3.2, Streamlit, WeatherAPI, OpenStreetMap."
                ]
            },
            {
                title: {
                    bold: "Text Classification for Museum Institutions, UofG Coursework",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Developed a multi-class text classifier across four transformer-based architectures.",
                    "Implemented preprocessing: tokenisation, custom label mapping, and data collators.",
                    "Tech: Hugging Face Transformers, Trainer API."
                ]
            },
            {
                title: {
                    bold: "E-Vehicle Share System, UofG Coursework Expansion",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Designed the database schema and developed backend APIs for core functionality.",
                    "Developed the React frontend pages of the system for the users and coordinators.",
                    "Tech: Django, PostgreSQL, Postman, React."
                ]
            },
            {
                title: {
                    bold: "Video Conference Voice Recognition, Undergraduate Dissertation",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Reviewed state-of-the-art speaker identification approaches and datasets.",
                    "Evaluated speaker identification performance across various feature extraction methods (spectrograms, MFCCs, pretrained model embeddings) and machine learning models (GMM, CNN, SVM).",
                    "Built a real-time desktop application for speaker identification and an audio dataset processing toolkit.",
                    "Tech: TensorFlow, scikit-learn.",
                ]
            },
            {
                title: {
                    bold: "Virtual Building Approach for Floor Prediction, Internship",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Implemented a building- and access point-independent floor predictor and used XAI to explain predictions.",
                    "Processed and augmented public Wi-Fi/AP datasets to build a new dataset for the virtual-building approach.",
                    "Tech: TensorFlow, scikit-learn, OpenCV."
                ]
            },
            {
                title: {
                    bold: "Face Recognition, Internship",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Built a desktop GUI application to tag persons, recognise faces, and construct photo metadata.",
                    "Designed a test suite and performed black- and white-box testing for recognition and metadata construction.",
                    "Tech: Tkinter (Python GUI package)."
                ]
            },
        ]
    },
    {
        sectionName: "Languages and Technologies",
        sectionBlocks: [
            {
                title: {
                    bold: "Languages: C/C++, Python, Java, R, SQL, Verilog",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Data/ML: Pandas, NumPy, PyTorch, Hugging Face Transformers, TensorFlow, scikit-learn, OpenCV",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Back end: Django, PostgreSQL",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Front end: HTML, CSS, JavaScript, React",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
        ]
    },
    {
        sectionName: "Activities and Leadership",
        sectionBlocks: [
            {
                title: {
                    bold: "President",
                    regular: "Resala AUC"
                },
                date: {
                    start: "January 2024",
                    end: "June 2024"
                },
                points: [
                    "Led a team of 14 heads/directors to reshape the organisation’s image and partnerships.",
                    "Partnered with Shabab El-Geel NGO (El-Deweiqa) to re-establish core mandate.",
                    "Connected Resala AUC with Resala NGO and opened a donations account for Resala AUC.",
                    "Organised and led a Ramadan packs event and prepared 600 packs for families in need.",
                    "Led fundraising totaling 76k LE through nine partnerships and 25k LE in donations.",
                    "Hosted a blood drive on campus and collected 96 blood donation bags.",
                    "Collaborated with a scouting team on a trip to entertain members and promote our Orphans Day.",
                    "Organised an Orphans Day and distributed food, clothes, and toys for 36 children.",
                    "Coordinated external visits to Resala NGO for medical-supplies assistance.",
                    "Developed Resala’s website to showcase activities and attract volunteers.",
                ]
            },
            {
                title: {
                    bold: "External Affairs Director",
                    regular: "Sabeel Foundation, AUC"
                },
                date: {
                    start: "Spring 2021",
                    end: "Fall 2021"
                },
                points: [
                    "Designed posters using Photoshop and moderated Sabeel’s social media accounts",
                    "Led 23 members to execute marketing campaigns for member recruitment and the Open Discussion Project",
                    "Coordinated opening and closing ceremonies"
                ]
            },
        ]
    },
    {
        sectionName: "Awards and Honors",
        sectionBlocks: [
            {
                title: {
                    bold: "The African Excellence Award, UofG - 2024/2025",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "AUC student organisations Progress Award (Resala), AUC - May 2024",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "AUC student organisations Best Collaboration Award (Resala), AUC - May 2024",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Erasmus+ Award for Study Abroad, UoE - Fall 2022",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Empower Full Merit Scholarship at AUC - (Fall 2019 - Spring 2024)",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "Top 10 in Math Section in Thanawya Amma in Fayoum - July 2019",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "National Finalist in Environmental Engineering, Intel ISEF - March 2019",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
            {
                title: {
                    bold: "First Place in the \"I Am an Explorer\" Students Competition, Fayoum - April 2018",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                ]
            },
        ]
    },
];