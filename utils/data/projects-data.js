import shop from '/public/image/123.png';
import crefin from '/public/image/landing-animation.gif';
import realEstate from '/public/image/real-estate.png';
import flashloan from '/public/image/flashloan.png';
import bc1 from '/public/image/bc1.png';
import bc2 from '/public/image/bc2.png';
import travel from '/public/image/travel-app.gif';

export const projectsData = [
    {
        id: 1,
        name: 'AI Financial App',
        description: "Me and my team built an A trading platform seamlessly integrating an AI-powered Chatbot designed to enhance trading experience within a simulated environment",
        tools: ['yahoo-finance-api' ,'stock-market', 'prisma-client', 'supabase', 'chatgpt-api', 'shadcn-ui', 'nextjs14-typescript'],
        role: 'Backend Developer',
        code: 'https://github.com/pandablue0809/AI-Powered-Financial-App',
        demo: 'https://dynamitetrade.vercel.app/',
        image: crefin,
        tags:['next.js','chatgpt-api','prisma','shadcn-ui']
    },        
    {
        id: 2,
        name: 'Real Estate',
        description: 'Pillar is a commercial real estate investment platform designed to facilitate discovery, diligence, execution, and ongoing management of direct deals for institutional CRE investors.',
        tools: ['React', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: 'https://github.com/pandablue0809/AI-Powered-Financial-App',
        role: 'Full Stack Developer',
        demo: 'https://dynamitetrade.vercel.app/',
        image: realEstate,
        tags:['React', 'SCSS', 'Express', 'TypeScript']
    },
    {
        id: 3,
        name: 'E-Commerce',
        description: "MERN-E-Commerce-Frontend is the frontend of an e-commerce web application built with ReactJS ,Material UI, ContextAPI, React-router-dom. MERN-E-Commerce-Backend is the backend of an e-commerce web application built with MongoDB, NodeJS, and ExpressJS.",
        tools: ['react', 'nodejs', 'ecommerce', 'mongodb',  'exressjs'],
        role: 'Backend Developer',
        code: 'https://github.com/pandablue0809/Ecommerce_frontend_MERN',
        demo: 'https://e-shopit.vercel.app/',
        image: shop,
        tags:['react', 'nodejs', 'ecommerce', 'mongodb',  'exressjs']
    },    
    {
        id: 4,
        name: 'Travel App',
        description: 'A travel app that obtains a desired trip location & date from the user, and displays the predicted weather forecast and an image of the location using information obtained from external APIs',
        tools: ['nodejs', 'babel' ,  'weather-forecast' ],
        role: 'Fullstack developer',
        code: 'https://github.com/pandablue0809/travel-app',
        demo: 'https://gotaplan.onrender.com/',
        image: travel,
        tags:['Javascript','nodejs', 'babel' , 'weather-forecast' ]
    },    
    {
        id: 5,
        name: 'Sqf coin ERC20 Smart Contract',
        description: "My team and I developed a Sqf coin ERC20 Smart Contract",
        tools: ['React', 'Material UI', 'Web3.js', 'Solidity' ],
        code: 'https://github.com/pandablue0809/pillar-',
        demo: 'https://pillar-landing-app.vercel.app/',
        image: bc2,
        role: 'Full stack developer',
        tags:[]
    },
    {
        id: 6,
        name: 'flash-loan-bot',
        description: "Crypto arbitrage bot that searches for a significant difference in crypto prices on a number of exchanges and will execute the simultaneous buying and selling of said crypto through a flash loan provided by the AAVE Flash Loan Smart Contract V2.",
        tools: ['nodejs', 'javascript', 'ethereum', 'dapp', 'cryptocurrency', 'solidity'],
        code: 'https://github.com/pandablue0809/flash-bot-solidity',
        demo: 'https://github.com/pandablue0809/flash-bot-solidity',
        image: flashloan,
        role: 'Blockchain Developer',
        tags:['solidity','cryptocurrency','nodejs', 'ethereum', 'dapp']
    },    
    {
        id: 7,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
        tags:['1','2','3']
    },
    {
        id: 8,
        name: 'All-in-one platform for decentralized asset trading and arbitrage',
        description: 'I have designed and developed a All-in-one platform for decentralized asset trading and arbitrage. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Web3.js, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', "Web3.js", "NestJS", "TypeScript"],
        role: 'Blockchain Developer',
        code: '',
        demo: '',
        image: bc1,
        tags:[]
    },
    {
        id: 8,
        name: 'All-in-one platform for decentralized asset trading and arbitrage',
        description: 'I have designed and developed a All-in-one platform for decentralized asset trading and arbitrage. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Web3.js, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', "Web3.js", "NestJS", "TypeScript"],
        role: 'Blockchain Developer',
        code: '',
        demo: '',
        image: bc1,
        tags:[]
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },