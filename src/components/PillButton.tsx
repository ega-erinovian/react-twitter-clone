interface PillButtonProps {
  title: string;
}

const PillButton = ({ title }: PillButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-[#1d9bf0] hover:bg-[#1d86f0] px-5 py-1 rounded-full font-semibold text-lg transition-all">
      {title}
    </button>
  );
};

export default PillButton;
