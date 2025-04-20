export const projects = [
  {
    id: "ev-vehicle",
    title: "E-Vehicle Share System",
    type: "Group Project",
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
  ,
    {
      id: "chatbot-ui",
      title: "Custom Chatbot UI",
      type: "Personal Project",
      description: "A React interface for interacting with AI models in real time.",
      image: "/screenshots/chatbot.jpg",
      tech: ["React", "Tailwind", "OpenAI API"],
      github: "https://github.com/sherif/chatbot-ui",
      report: "https://report.sherif.dev",
      live: "https://chatbot.sherif.dev",
      details: "This chatbot UI allows real-time interaction with different AI models. I focused on intuitive design and API response handling.",
      galleryData:[{imagePath: "../../public/screenshots/Screenshot.png",caption: "screenshot 0"},{imagePath: "../../public/screenshots/Screenshot.png",caption: "screenshot 1"},{imagePath: "../../public/screenshots/Screenshot.png",caption: "screenshot 2"},{
        imagePath: "../../public/screenshots/Screenshot.png",caption: "screenshot 3"},]
    }
  ];
  