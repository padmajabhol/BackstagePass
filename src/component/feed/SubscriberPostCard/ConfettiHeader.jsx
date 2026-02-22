import bannerBg from '../../../assets/images/BG.png';

export default function ConfettiHeader({ title }) {
  return (
    <div className="relative bg-[#E6F6EB] dark:bg-[#132D21] rounded-t-2xl sm:rounded-t-full py-2.5 sm:py-3 text-center font-semibold text-base sm:text-lg overflow-hidden">
      <img
        src={bannerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative text-[#218358] dark:text-[#3ED68C] z-10">
        {title}
      </div>
    </div>
  );
}
