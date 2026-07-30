import Card from "../components/Card";
import {cardImages} from '../assets/home/cards/cardImages';

const cards = [
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
        path: "/todo",
        image: cardImages.todo_list,
        description: "Manage your tasks",
    },
    {
        title: "Weather",
        path: "/weather",
        image: cardImages.weather,
        description: "Weather application",
    },
];


export default function Home() {
    return (
        <div
            className="min-h-screen bg-linear-to-br from-blue-500 to-violet-500 p-10"
        >

            <h1
                className="mb-8 text-center text-4xl font-bold text-white"
            >
                React Mini Projects
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    cards.map((card) => (
                        <Card key={card.path} card={card} />
                    ))
                }
            </div>

        </div>
    )
}
