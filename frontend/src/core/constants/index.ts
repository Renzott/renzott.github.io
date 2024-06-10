import { Proyect } from "../../shared/models/Proyect";

interface HelmetProps {
    title: string;
}

export const HELMET_PROPS: HelmetProps = {
    title: "Home Page"
}

export const WIP_DATA_PROYECTS: Proyect[] = [
    {
        id: 1,
        title: "Discord Bot con Rust (Serenity)",
        description: "Un bot de Discord hecho en Rust con la librería Serenity, Songbird y YT-DLP. Se agregaron comandos de música, búsqueda de videos de YouTube y más. Pronto se agregaran mas funcionalidades.",
        thumbnail: "https://via.placeholder.com/150",
        date_release: "1703001737",
        skills: [
            {
                title: "Rust",
                icon: "https://cdn.simpleicons.org/rust/white"
            },
            {
                title: "Docker",
                icon: "https://cdn.simpleicons.org/docker/white"
            }
        ],
        urls: {
            github: "https://github.com/Renzott/discord-serenity-bot",
        }
    },
    {
        id: 2,
        title: "Tienda de Productos",
        description: "Este proyecto es una aplicación web que permite a los usuarios encontrar, actualizar, borar y crear productos de una Tienda. Tambien permite hacer una busqueda de productos por nombre, CRUD.",
        thumbnail: "https://via.placeholder.com/150",
        date_release: "1715360460",
        urls: {
            github: "https://github.com/Renzott/haciendola-tech-frontend-test",
            demo: "https://renzott.github.io/haciendola-tech-frontend-test/",
            backend: "https://haciendola-tech-backend-test.onrender.com/docs"
        },
        skills: [
            {
                title: "TypeScript",
                icon: "https://cdn.simpleicons.org/typescript/white"
            },
            {
                title: "NodeJS",
                icon: "https://cdn.simpleicons.org/nodedotjs/white"
            },
            {
                title: "Angular",
                icon: "https://cdn.simpleicons.org/angular/white"
            },
            {
                title: "Fastify",
                icon: "https://cdn.simpleicons.org/fastify/white"
            },
            {
                title: "RxJS",
                icon: "https://cdn.simpleicons.org/ngrx/white"
            },
            {
                title: "MongoDB",
                icon: "https://cdn.simpleicons.org/mongodb/white"
            }, {
                title: "Sequelize",
                icon: "https://cdn.simpleicons.org/sequelize/white"
            }
        ]
    },
    {
        id: 3,
        title: "Encriptador de Tarjetas de Crédito",
        description: "Este proyecto es una aplicación web que permite a los usuarios encriptar y desencriptar tarjetas de crédito. Se utilizó el algoritmo AES-128 para encriptar y desencriptar la información.",
        thumbnail: "https://via.placeholder.com/150",
        date_release: "1705905585",
        urls: {
            github: "https://github.com/Renzott/culqi-tech-backend-test",
            demo: "https://culqi-tech-frontend-test-nedddp1jf-renzott.vercel.app/"
        },
        skills: [
            {
                title: "TypeScript",
                icon: "https://cdn.simpleicons.org/typescript/white"
            },
            {
                title: "NodeJS",
                icon: "https://cdn.simpleicons.org/nodedotjs/white"
            },
            {
                title: "Serverless",
                icon: "https://cdn.simpleicons.org/serverless/white"
            },
            {
                title: "AWS Lambda",
                icon: "https://cdn.simpleicons.org/awslambda/white"
            },
            {
                title: "DynamoDB",
                icon: "https://cdn.simpleicons.org/amazondynamodb/white"
            },
            {
                title: "Next.JS",
                icon: "https://cdn.simpleicons.org/nextdotjs/white"
            },
            {
                title: "TailwindCSS",
                icon: "https://cdn.simpleicons.org/tailwindcss/white"
            },
            {
                title: "Shadcn/UI",
                icon: "https://cdn.simpleicons.org/shadcnui/white"
            }
        ]
    }
];