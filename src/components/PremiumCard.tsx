import PillButton from "./PillButton";

const PremiumCard = () => {
  return (
    <div className="p-6 m-2 border border-[#2f3336] rounded-xl">
      <h1 className="text-2xl font-bold mb-2">Subscribe to Premium</h1>
      <p className="mb-2">
        Subscribe to unlock new features and if eligible, receive a share of
        revenue.
      </p>
      <PillButton title="Subscribe" />
    </div>
  );
};

export default PremiumCard;
