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


  ];
  