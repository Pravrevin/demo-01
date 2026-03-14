"use client";

import { Link, useParams } from 'react-router-dom';
import { Play, Star, Calendar, Clock, Share2, Info, ChevronRight, ArrowRight } from 'lucide-react';
import { getMovieById, getRecommendedMovies } from '../data/movies';

export default function MovieDetailPage() {
    const { movieId } = useParams();
    const movie = getMovieById(movieId);
    const recommendations = getRecommendedMovies(movie?.genre)?.filter((item) => item.id !== movie?.id);

    if (!movie) {
        return (
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
                <p className="text-sm font-semibold text-gray-500">404</p>
                <h1 className="text-2xl font-bold mt-2">Movie unavailable</h1>
                <Link to="/" className="inline-block mt-6 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition">
                    Return to listings
                </Link>
            </div>
        );
    }

    return (
        <div className="relative z-10 min-h-screen pb-24 md:pb-0">
            <section className="relative h-[70vh] w-full overflow-hidden border-b border-white/5">
                <img
                    src={movie.banner}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px] opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-[#09090E]/80 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-end pb-16">
                    <div className="flex flex-col md:flex-row md:items-end gap-8">
                        <div className="hidden md:block w-64 aspect-[2/3] overflow-hidden rounded-xl shadow-2xl border border-white/10 -translate-y-12 bg-white/5">
                            <img src={movie.poster || movie.image || movie.banner} alt={movie.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="space-y-3">
                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                    <span className="bg-indigo-600 px-3 py-1 rounded-full font-medium">In Cinemas</span>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">{movie.certification}</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">{movie.title}</h1>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                                <span className="flex items-center gap-2"><Star size={14} className="text-yellow-500 fill-yellow-500" /> {movie.rating}/10</span>
                                <span className="flex items-center gap-2"><Clock size={14} /> {movie.duration}</span>
                                <span className="flex items-center gap-2"><Calendar size={14} /> {movie.releaseDate || '2026'}</span>
                                <span>{movie.genre}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    to={`/movie/${movie.id}/booking`}
                                    className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold flex items-center gap-2"
                                >
                                    Book now <ArrowRight size={16} />
                                </Link>
                                <button
                                    type="button"
                                    className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                                    aria-label="Share movie"
                                >
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid lg:grid-cols-12 gap-10 xl:gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                            <h2 className="text-2xl font-semibold">Overview</h2>
                            <p className="text-base leading-7 text-gray-300">{movie.description}</p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-2xl font-semibold">Gallery & Trailer</h2>
                                <p className="text-sm text-gray-400">Photos and preview</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative group cursor-pointer aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/20">
                                    <img
                                        src={movie.gallery?.[0] || movie.banner}
                                        alt="Trailer"
                                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                            <Play size={24} fill="white" />
                                        </div>
                                    </div>
                                    <p className="absolute bottom-4 left-4 text-sm font-medium">View trailer</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {(movie.gallery || []).slice(1, 3).map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${movie.title} still ${idx + 1}`}
                                            className="w-full h-full min-h-[160px] object-cover rounded-xl border border-white/10"
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-2xl font-semibold">Audience Reviews</h2>
                                <p className="text-sm text-gray-400">What viewers are saying</p>
                            </div>

                            <div className="space-y-4">
                                {movie.reviews.map((review, i) => (
                                    <article key={i} className="rounded-xl border border-white/10 bg-black/20 p-5 flex gap-4">
                                        <div className="hidden sm:flex w-10 h-10 rounded-full bg-white/10 items-center justify-center text-xs font-semibold">
                                            {review.user.substring(0, 2)}
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="flex justify-between items-center gap-3">
                                                <p className="text-sm font-semibold">{review.user}</p>
                                                <span className="text-sm font-medium text-indigo-300">{review.score}/10</span>
                                            </div>
                                            <p className="text-sm text-gray-300 leading-6">“{review.comment}”</p>
                                            <p className="text-xs text-gray-500">{review.time}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="lg:col-span-4 space-y-8">
                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-semibold">Cast & Crew</h2>
                            <div className="space-y-5">
                                {movie.cast.map((actor) => (
                                    <div key={actor.name} className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                            <img src={actor.image} alt={actor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">{actor.name}</p>
                                            <p className="text-sm text-gray-400">{actor.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Director</p>
                                    <p className="text-sm font-semibold">Christopher Nolan</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Writer</p>
                                    <p className="text-sm font-semibold">Jonathan Nolan</p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
                            <div className="flex items-center gap-3">
                                <Info size={16} className="text-indigo-400" />
                                <h2 className="text-2xl font-semibold">Theatre Features</h2>
                            </div>
                            <ul className="space-y-3">
                                {['Dolby Atmos 7.1', '4K laser projection', 'Recliner seating'].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <ChevronRight size={14} className="text-indigo-400" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
                            <h2 className="text-2xl font-semibold">Suggested Movies</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {recommendations?.slice(0, 2).map((rec, i) => (
                                    <Link key={i} to={`/movie/${rec.id}`} className="group space-y-2">
                                        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-black/20">
                                            <img
                                                src={rec.banner}
                                                alt={rec.title}
                                                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-200 group-hover:text-white transition truncate">{rec.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </aside>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#09090E]/80 backdrop-blur-xl border-t border-white/10 flex justify-between items-center gap-4">
                <div className="min-w-0">
                    <p className="text-xs text-gray-500">Now viewing</p>
                    <p className="text-sm font-semibold truncate">{movie.title}</p>
                </div>
                <Link
                    to={`/movie/${movie.id}/booking`}
                    className="px-5 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold whitespace-nowrap"
                >
                    Book now
                </Link>
            </div>
        </div>
    );
}