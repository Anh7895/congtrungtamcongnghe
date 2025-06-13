import { Link } from 'react-router-dom';

export default function ButtonDichVu() {
  return (
    <Link
      to="/lien-he"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Liên hệ
    </Link>
  );
}

