import Profile from '../profile';
import Overview from './overview';
import Tools from './tools';

import './bg.css';

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="max-container spacing mx-auto min-h-screen max-lg:pt-24 grid lg:grid-cols-[auto_auto] gap-4 gap-y-8 items-center place-items-center">
        <Profile rounded />

        <div className="grid md:grid-cols-[auto_auto] items-center place-items-center gap-4 gap-y-8 place-self-stretch">
          <Overview />

          <Tools />
        </div>
      </div>
    </section>
  );
}
