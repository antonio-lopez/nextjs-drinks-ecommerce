import Link from 'next/link';
import { Divider } from '../components';

const success = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 2xl:px-0">
      <div className="flex min-h-screen flex-col items-center justify-center text-center text-white">
        <img
          className="h-52 w-52"
          src="./images/svg/delivery.svg"
          alt="delivery success"
        />
        <div>
          <h1 className="pb-10 text-3xl">Thank you for your order</h1>
          <p>Your order is being processed.</p>
          <p>Check your email inbox for the receipt.</p>
        </div>

        <Link href="/">
          <button
            type="button"
            className="mt-7 rounded-xl px-2 py-3 ring-2 ring-white"
          >
            Continue Shopping
          </button>
        </Link>
      </div>

      <Divider />
    </div>
  );
};

export default success;
