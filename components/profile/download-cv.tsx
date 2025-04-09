import DownloadIcon from '@/assets/icons/download';

export default function DownloadCV() {
  return (
    <a
      href="/cv.pdf"
      className="bg-white rounded-full px-6 py-3 text-xl text-[#292F36] flex items-center gap-4 self-start"
      download
    >
      <p>Download CV</p>
      <DownloadIcon className="size-6" />
    </a>
  );
}
