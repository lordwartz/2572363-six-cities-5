import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  //todo. Проработать страницу
  return (
    <>
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <h1>Not Found. 404</h1>
      <Link className="not-found__main" to="/">
        На главную
      </Link>
    </>
  );
}
