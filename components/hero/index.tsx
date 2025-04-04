import Profile from './profile';
import Overview from './overview';
import Tools from './tools';

export default function Hero() {
  return (
    <section className="spacing min-h-dvh max-lg:mt-20 grid lg:grid-cols-[auto_auto] gap-4 gap-y-8 items-center place-items-center">
      <Profile />

      <div className="grid md:grid-cols-[auto_auto] items-center place-items-center gap-4 gap-y-8 place-self-stretch">
        <Overview />

        <Tools />
      </div>
    </section>
  );
}
