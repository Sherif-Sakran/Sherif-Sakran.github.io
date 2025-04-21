export const projects = [
  {
    id: "speaker-identification",
    title: "Speaker Identification System",
    type: "Individual Project",
    description: "A desktop application that trains on speaker utterances and recognizes speakers in real time.",
    image: "../../public/screenshots/speaker-identification/Fig. A.3.JPG",
    tech: ["Sci-Kit Learn", "Tkinter", "TensorFlow", "Pydub"],
    details: "This toolkit is the outcome of a study, still unpublished, titled ‘Developing a Robust Real-Time Speaker Identification System: Comparative Evaluation and application’. This toolkit is the application part, which I developed based on the results I got from the comparative evaluation of several speaker recognition approaches. I evaluated different machine learning models, including Convolutional Neural Networks, Support Vector Machines, Gaussian Mixture Models, and I used two different forms of speaker-specific features, Spectrograms and Mel-Frequency Cepstral Coefficients (along with their first and second delta derivatives). Since I wanted the minimal training overhead, I conducted the evaluation for three conditions of signal processing: neither normalising the audio signal nor applying noise reduction; normalising the signals and not applying noise reduction; and applying both audio normalization and noise reduction. The outcomes of the study suggested that environment variability is a critical issue in speaker recognition systems, and I tackled this issue by enabling training speakers on the fly. As part of the process, I also developed an audio processing toolkit that provides functionalities to audios, including trimming and segmenting long utterances, which are useful in audio processing studies.",
    notes: "",
    galleryData:[{imagePath: "../../public/screenshots/speaker-identification/Fig. A.1.JPG",caption: "The tab of speaker enrollment from a dataset of speakers of the Speaker Identification application."},{imagePath: "../../public/screenshots/speaker-identification/Fig. A.2.JPG",caption: "The tab of training speakers on the fly of the Speaker Identification application."},{imagePath: "../../public/screenshots/speaker-identification/Fig. A.3.JPG",caption: "A screenshot from the demo showing the tab of real-time speaker identification of the Speaker Identification application while recognizing the speaker."},{imagePath: "../../public/screenshots/speaker-identification/Fig. A.4.JPG",caption: "The format conversion tab of the developed Audio Processing Toolkit."},{imagePath: "../../public/screenshots/speaker-identification/Fig. A.5.JPG",caption: "The silence removal tab of the developed Audio Processing Toolkit."}, {imagePath: "../../public/screenshots/speaker-identification/Fig. A.6.JPG",caption: "The segmentation tab of the developed Audio Processing Toolkit."}, {imagePath: "../../public/screenshots/speaker-identification/Fig. A.7.JPG",caption: "The trimmer tab of the developed Audio Processing Toolkit."}, {imagePath: "../../public/screenshots/speaker-identification/Fig. A.8.JPG",caption: "The noise reduction tab of the developed Audio Processing Toolkit."}, {imagePath: "../../public/screenshots/speaker-identification/Fig. A.9.JPG",caption: "The audio normalization tab of the developed Audio Processing Toolkit."},],
    github: " https://github.com/Sherif-Sakran/speaker_identification_toolkit",
    live: "",
    report: ""
  },
  {
    id: "ev-vehicle",
    title: "E-Vehicle Share System",
    type: "Individal & Group Project",
    description: "A Web-based system for renting and tracking electric vehicles across Glasgow.",
    image: "../../public/screenshots/e-vehicle/e-vehicle.png",
    tech: ["Django", "React", "SQLite", "Postman"],
    details: "This was developed as a group project focused on sharing vehicles where we have customers, operators, and managers. Each role has its own functionalities. I defined the database schema and built the backend of the project using Django, including user authentication, role-based access, and custom views.",
    notes: "After the completion of the project, I worked on the frontend using React and finished two out of the three main tasks of the frontend. The project now is on hold since I am focused on my coursework (and learning more about LLMs).",
    galleryData:[{imagePath: "../../public/screenshots/e-vehicle/home.png",caption: "The home screen for a customer ‘customer’."}, {imagePath: "../../public/screenshots/e-vehicle/1_available_vehicles.png",caption: "The available vehicles for rent and their locations on the map."},{imagePath: "../../public/screenshots/e-vehicle/2_rental_end_and_payment.png",caption: "The user customer is returning a vehicle. The cost is calculated per distance and time and set to a minimum of 2."},{imagePath: "../../public/screenshots/e-vehicle/3_operator_dashboard.png",caption: "The dashboard of the operator showing the list of vehicles and their statuses and locations. Operators can charge, track, move, and handle repair requests made by customers."},{imagePath: "../../public/screenshots/e-vehicle/4_operator_adding_a_partner.png",caption: "The operator adds a partner and coupons that can apply as discounts to the costs."},{imagePath: "../../public/screenshots/e-vehicle/5_admin_dashboard.png",caption: "The admin dashboard that contains different visualisations for the overall stats of the system (payments per location, rental distribution, user growth, reported vehicles, vehicles per station, and popular destinations."}, {imagePath: "../../public/screenshots/e-vehicle/6_discount_request.png",caption: "Discount request by a student."}, {imagePath: "../../public/screenshots/e-vehicle/7_approved_request.png",caption: "The student’s 10\% discount request is approved by the operator."}, {imagePath: "../../public/screenshots/e-vehicle/8_discount_requests_table.png",caption: "The discount requests table on the database hosted by Supabase. This feature was not implemented in the front end, so I thought a screenshot from the database may work!"}, {imagePath: "../../public/screenshots/e-vehicle/9_discount_applied_to_customer_account.png",caption: "The discount is applied to the customer’s record in the customers table."},],
    github: "https://github.com/Sherif-Sakran/progSD_backend",
    live: "",
    report: ""
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    type: " Group Project",
    description: "A desktop application for face recognition and image metadata recording.",
    image: "../../public/screenshots/face-recognition/0 home.PNG",
    tech: ["Python", "face-recognition", "Tkinter"], 
    details: "This project was developed during my internship at AUC Digital Libraries. I and my teammate, Andrew Hany, developed this desktop application as a tool AUC Libraries to digitise its assets. We had implemented three required functionalities: training a machine learning model on people’s faces in a given set of photos; recognising all known faces in all photos in a given directory; and storing the metadata of the photos locally. We used Python's face-recognition library provides a pre-trained model for face recognition, which is based on deep learninig techniques (mainly the few shot learning). The library uses a convolutional neural network (CNN) to extract facial features from images in the form of encodings (i.e., embeddings) and then compares these features to identify faces in new images by applying a similarity metric like cosine similarity. We used Tkinter to build the GUI for the application, which allows users to interact with the system easily. The application is designed to be user-friendly and efficient, making it suitable for libraries and other institutions that need to manage large collections of images.",


    notes: "Thanks to our mentor Mr. Muehlhaeusler, we had the opportunity to share this application in the Middle East Librarians Association (MELA) conference in 2022 as a tool that can help libraries make use of its assets.",

    galleryData:[{imagePath: "../../public/screenshots/face-recognition/1 tagging.jpg",caption: "The application detects the faces of AUC's Ex-Pres. Riccardone and Pres. Dallal but do not recognise them. This is the tagging step in which users fills in the metadata of the image stores the cropped faces for generating embeddings. "},{imagePath: "../../public/screenshots/face-recognition/2 recognition.png", caption: "The application detects and recognises the face of Sir. Magdi Yaacoup from the photo."},{imagePath: "../../public/screenshots/face-recognition/4 environment creation.jpg",caption: "The environment creation window that automatically creates the environment for training the faces and storing both the embeddings of the faces and the metadata of the photos."},{imagePath: "../../public/screenshots/face-recognition/3 metadata.png",caption: "The metadata table for the tagged images."},{imagePath: "../../public/screenshots/face-recognition/5 testing suite.png",caption: "The testing suite of one of the tests done on individual photos."},{imagePath: "../../public/screenshots/face-recognition/6 presentation.jpg",caption: "A live photo from the conference where our mentor virtually represents AUC Libraries where our project is one of the two participating projects from AUC."}, ],
    github: "https://github.com/Sherif-Sakran/face_recognition ",
    live: "",
    report: ""
  },
  {
    id: "information-visualisation",
    title: "Information Visualisation",
    type: " Individual Project",
    description: "Application of advanced concepts and techniques in information visualisation developed in Python using Altair.",
    image: "../../public/screenshots/information-visualisation/home.jpeg",
    tech: ["Python", "Altair"], 
    details: "This project was part of the coursework of the Information Visualisation course which focuses on applying advanced concepts and techniques for visualisations. The dataset I worked on contains different attributes about the world countries, and I chose to represent the countries in a grid where the countries of each continent are stacked in a column. The system implements brushing and linking in multiple plots, and it applies filters on attributes. It implements several interactive techniques that allow smooth analysis of the data, including selecting a subset, highlighting a part, zooming in and out, and dynamic selection of countries and attributes in plots. Remarkably, the system implements ‘generalised selection’ such that the hierarchy of having the countries within continents are used to generalise the selection of a country (or more) to a continent, and then to the world.",

    notes: "This project was part of a larger group project that involved the development and evaluation of three systems, and this was one of them. We also conducted an evaluation with five participants to assess the users’ performance on the three systems on a pre-defined list of twelve tasks.",

    galleryData:[{imagePath: "../../public/screenshots/information-visualisation/1 main.png",caption: "The main visualisation system in which the grid and bar chart are linked. The grid is for selection and the bar chart is for showing a dynamically chosen attributed and filtered with sliders based on other attributes."},{imagePath: "../../public/screenshots/information-visualisation/2 main.png", caption: "Multiple countries are selected from the chart at the top, and, therefore, are shown in the linked bar chart below."},{imagePath: "../../public/screenshots/information-visualisation/2.1 main.png",caption: "A screenshot showing active and inactive selected countries so that the generalised selection feature gets to know which continent to generalise to, which is an edge case."},{imagePath: "../../public/screenshots/information-visualisation/3 bar chart.png",caption: "The bar chart shows a dynamically selected attribute and allows filtering on some other attributes using sliders."},{imagePath: "../../public/screenshots/information-visualisation/4 correlation plot.png",caption: "A plot showing the correlation between two dynamically chosen variables. "},{imagePath: "../../public/screenshots/information-visualisation/5 correlation plot focus and zoom.png",caption: "The correlation plot applying group selection by continent, zooming in, and navigating through the chart."},{imagePath: "../../public/screenshots/information-visualisation/6 brushing and linking.png",caption: "Four linked charts showing the best performing 10 countries in four different attributes."}, {imagePath: "../../public/screenshots/information-visualisation/7 brushing and linking.png",caption: "Brushing is applied to the four linked charts showing the common top-performing countries amoung the different attribbutes."},],
    // github: "https://github.com/Sherif-Sakran/IV_system_A",
    // live: "https://gla-my.sharepoint.com/:v:/g/personal/3011251s_student_gla_ac_uk/ETZfkilPkrtHknJGoN_VXPAB9g09STW1gG_g6SyuJ6cZuQ?e=QJ6FD7",
    github: "https://github.com/Sherif-Sakran/IV_system_A",
    live: "https://sherif-sakran.github.io/IV_system_A/",
    report: ""
  },







  ];
  