import { FC } from "react";

interface TrendProps {
  area: string;
  tag: string;
}

const Trend: FC<TrendProps> = ({ area, tag }) => {
  return (
    <div className="mb-5">
      <p className="text-gray-500 text-xs">Trending in {area}</p>
      <h2 className="font-bold">{tag}</h2>
    </div>
  );
};

export default Trend;
