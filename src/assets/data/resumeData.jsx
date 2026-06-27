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
                    "Cumulative GPA: A3",
                    "Research interests: Affective Computing, Human-Computer Interaction (HCI), and Natural Language Processing (NLP).",
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
                    "Awarded the Empower full merit-based scholarship",
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
                    "Awarded the Erasmus+ Scholarship for Study Abroad",
                ]
            },
        ]
    },
    {
        sectionName: "Technical Experience",
        sectionBlocks: [
            {
                title: {
                    bold: "Engineering Graduate Trainee (Data Science & AI)",
                    regular: "Property Finder – Dubai, UAE"
                },
                date: {
                    start: "Nov 2025",
                    end: "Current"
                },
                points: [
                    "Built a scalable SQL-based recommender system using collaborative filtering on millions of user interactions to enhance property listing discovery.",
                    "Developed a listing price prediction model using LightGBM, improving the current state performance significantly (MAPE: 20.6% to 10.9%, MDAPE: 10% to 6%, R2: 85% to 93%, coverage: 88.3% to 95.8%).",
                    "Evaluated anomaly detection techniques (IQR, DBSCAN, and Isolation Forest) to identify pricing irregularities across communities and neighbourhoods.",
                    " Developed a statistical outlier detection model (price, size, price-to-size), achieving 97\% precision that conservatively flags 0.6\% of online UAE listings.",
                    "Scaled the UAE price and size realism system to Qatar and Bahrain to flag 1.4\% and 1.5\% listings, respectively.",
                    "Deployed the price and size realism system on a SageMaker endpoint served with FastAPI to block agents from publishing unrealistic listings on the platform.",
                    "Introduced a feedback loop to incorporate reported false positives into model computations, improving its robustness across segments, and to bypass the system for the approved listings.",
                    "Built a validation pipeline that assesses the agreement score of new model releases trained on new data against a baseline isolation forest model to block new releases in case of score drifts from the specified thresholds.",
                    "Implemented a dashboard with Evidently AI to monitor data and model performance drift across releases.",
                    "Built a complete pipeline from data retrieval, pre-processing, and modeling to validation, deployment, and monitoring that re-trains and deploys weekly as a Fargate task."

                ]
            },
            {
                title: {
                    bold: "Research Intern (Deep Learning)",
                    regular: "AUC and Osaka University – online"
                },
                date: {
                    start: "June 2023",
                    end: "Aug 2023"
                },
                points: [
                    "Researched and delivered presentations on state‑of‑the‑art indoor localisation models.",
                    "Leveraged explainable AI (SHAP, LIME) to interpret indoor location predictions from CNNs and XGBoost.",
                    "Boosted cross‑building floor prediction accuracy of StoryTeller by up to 25\% through hyperparameter tuning and enhanced input representations."
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
                    bold: "Speech Is All You Need – MSc Dissertation",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Investigated cross-modal transfer learning by adapting the XLSR speech foundation model to interpret physiological signals for stress recognition.",
                    "Evaluated XLSR-based physiological signal embeddings against handcrafted statistical features, demonstrating the efficacy of speech pre-trained models in non-audio domains.",
                    "Implemented transfer learning pipelines integrating multimodal datasets (e.g., speech and electrodermal activity), leveraging foundation models and dimensionality reduction techniques.",
                    "Tech: Hugging Face Transformers, scikit-learn."
                ]
            },
            {
                title: {
                    bold: "Quantitative Energy Trading Pipeline \& Live Inference Endpoint",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Developed a robust data pipeline harvesting physical grid drivers from the ENTSO-E and Open-Meteo APIs, incorporating automated schema validation and QA checks using Pydantic.",
                    "Optimised dual LightGBM architectures using Optuna; applied early stopping and strict chronological splitting to eliminate out-of-sample data leakage, and reduced baseline MAE by 46\%.",
                    "Containerised the pipeline using Docker with FastAPI and GitHub Actions CI/CD and built an automated LLM diagnostic tool via the Gemini API to analyse prediction anomalies during extreme market events.",
                    "Tech: FastAPI, Docker, Gemini API, GitHub Actions, HF Spaces, HF Hub, Pydantic, LightGBM, Optuna."
                ]
            },
            {
                title: {
                    bold: "Safa - The Well-Being Assistant",
                    regular: ""
                },
                date: {
                    start: "",
                    end: ""
                },
                points: [
                    "Engineered an end-to-end empathetic dialogue system leveraging LangChain and a locally deployed Llama 3 model fine-tuned via Unsloth to provide contextual emotional support.",
                    "Curated and structured a custom synthetic dataset of 100+ multi-turn dialogues across 8 distinct affective states (e.g., stress, loneliness) and self-alignment profiles to guide model persona and guardrails.",
                    "Implemented a Retrieval-Augmented Generation (RAG) pipeline utilising ChromaDB to dynamically inject psychoeducational concepts and meditation scripts based on user intent.",
                    "Tech: Unsloth, ChromaDB, LangChain, Ollama, Streamlit."
                ]
            },
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
                    bold: "Languages: Python, SQL, C++",
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
                    bold: "Data Science \& Analytics: Pandas, NumPy, Matplotlib, Scikit‑learn",
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
                    bold: "Machine Learning \& Gen AI: PyTorch, Hugging Face Transformers, LangChain, Ollama",
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
                    bold: "MLOps: Git, Docker, GitHub Actions, FastAPI, Hugging Face Spaces, Hugging Face Hub, Evidently AI",
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
                    bold: "AWS: RedShift, S3, SageMaker AI, ECR, ECS, CloudWatch",
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