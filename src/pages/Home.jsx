import Card from "../components/Card";
import { cardImages } from '../assets/home/cards/cardImages';
import { useEffect } from "react";

const cards = [
    {
        title: "Tic Tac Toe",
        path: "/tic-tac-toe",
        image: cardImages.counter,
        description: "Tic Tac Toe game"
    },
    {
        title: "Counter",
        path: "/counter",
        image: cardImages.counter,
        description: "Simple counter app"
    },
    {
        title: "Digital Clock",
        path: "/digitalclock",
        image: cardImages.digitalClock,
        description: "Shows current time",
    },
    {
        title: "Analog Clock",
        path: "/analogclock",
        image: cardImages.analogClock,
        description: "CSS analog clock",
    },
    {
        title: "Todo List",
        path: "/todolist",
        image: cardImages.todo_list,
        description: "Manage your tasks",
    },
    {
        title: "Weather",
        path: "/weather",
        image: cardImages.weather,
        description: "Weather application",
    },
    {
        title: "Calculator",
        path: "/calculator",
        image: cardImages.calculator,
        description: "Calculator application",
    },
    {
        title: "Quotes",
        path: "/quotes",
        image: cardImages.calculator,
        description: "Some random quotations",
    },
];


export default function Home({ setGradient }) {

    useEffect(() => {
        setGradient("bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#141e30]");
    }, [setGradient]);


    return (
        <div
            className="min-h-screen bg-linear-to-b from-[#173670] to-[#2c6eb9] py-10"
        >

            <h1
                className="mb-8 text-center text-4xl font-bold text-white pt-10"
            >
                Tiny Web Apps
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-8 lg:px-12 xl:px-20">
                {
                    cards.map((card) => (
                        <Card key={card.path} card={card} />
                    ))
                }
            </div>

        </div>
    )
}
