import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const ViewMore = () => {
  return (
    <div className="flex items-center justify-end space-x-1">
      <Link href="/coffee" passHref>
        <a className="hover:text-white/70" href="coffee">
          View More
        </a>
      </Link>
      <AiOutlineArrowRight className="h-6 w-6" />
    </div>
  );
};

export default ViewMore;
