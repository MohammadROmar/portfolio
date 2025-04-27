import DownloadIcon from '@/assets/icons/download';

export default function DownloadCV() {
  return (
    <a
      href="/cv.pdf"
      className="flex items-center gap-4 self-start rounded-full bg-white px-6 py-3 text-xl text-[#292F36]"
      download
    >
      <p>Download CV</p>
      <DownloadIcon className="size-6" />
    </a>
  );
}
