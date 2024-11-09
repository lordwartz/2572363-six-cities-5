import { Link } from 'react-router-dom';

export default function NotFound() {
  //todo. Проработать страницу
  return (
    <>
      <h1>Not Found. 404</h1>
      <Link className="not-found__main" to="/">
        На главную
      </Link>
    </>
  );
}
