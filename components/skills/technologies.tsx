import { technologies } from '@/data/technologies';

export default function Technologies() {
  return (
    <ul>
      {technologies.map(({ text, icon: Icon }) => (
        <li className="flex flex-col">
          <Icon className="rounded-full p-4 " />
          <h5>{text}</h5>
        </li>
      ))}
    </ul>
  );
}
