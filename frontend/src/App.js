import './App.css';
import Header from './components/Header'
import Card from './components/Card';
import useMovies from './hooks/useMovies';

export default function App() {
  const movies = useMovies()

  return (
    <div className="container">
      {/* <Header/> */}
      { movies.map(({ slug, cover, title, genres, duration, rating, synopsis }) =>
        <Card
          key = { slug }
          cover = { cover }
          title = { title }
          genres = { genres }
          duration = { duration }
          rating = { rating }
          synopsis = { synopsis }
        />
      )}
    </div>
  );
}