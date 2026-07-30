import { Link } from 'react-router-dom';

export default function Card({ card }) {
    return (
        <Link
            to={card.path || '#'}
            className='group relative block overflow-hidden rounded-xl shadow-lg border border-white/10 bg-zinc-900 aspect-video w-full'
        >
            <img
                src={card.image}
                alt={card.title}
                className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
            />

            <div
                className='absolute
                            bottom-0
                            left-0
                            w-full
                            h-12
                            p-2
                            flex
                            flex-col
                            justify-start
                            items-center
                            bg-linear-to-br
                            from-purple-600/70
                            to-blue-600/70
                            backdrop-blur-xs
                            transition-all
                            duration-500
                            ease-in-out
                            group-hover:h-full
                            group-hover:justify-center'
            >
                <h3 className='text-lg font-bold text-white transition-all duration-300 group-hover:text-2xl text-center line-clamp-1'>
                    {card.title}
                </h3>

                <p className='
                    text-center
                    text-sm
                    text-white/90
                    line-clamp-3
                    max-w-md
                    max-h-0
                    opacity-0
                    translate-y-4
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:max-h-24
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:mt-3
                '>
                    {card.description}
                </p>
            </div>
        </Link>
    );
}