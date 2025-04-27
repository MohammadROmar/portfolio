import Profile from '../profile';
import Overview from './overview';
import Tools from './tools';

import './bg.css';

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="max-container spacing mx-auto grid min-h-screen place-items-center items-center gap-4 gap-y-8 max-lg:pt-22 lg:grid-cols-[auto_auto]">
        <Profile rounded />

        <div className="grid place-items-center items-center gap-4 gap-y-8 place-self-stretch md:grid-cols-[auto_auto]">
          <Overview />

          <Tools />
        </div>
      </div>
    </section>
  );
}
