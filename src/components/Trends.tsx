import Trend from "./Trend";

const Trends = () => {
  return (
    <div className="p-6 m-2 border border-[#2f3336] rounded-xl">
      <h1 className="text-2xl font-bold mb-5">Trends for you</h1>
      <Trend area="Indonesia" tag="#bisadipegang" />
      <Trend area="Worldwide" tag="#siskaernita" />
      <Trend area="Indonesia" tag="#wadadidaw" />
      <Trend area="Video Games" tag="GTA 6" />
      <Trend area="Indonesia" tag="#menonjoltapibukanbakat" />
      <Trend area="Indonesia" tag="#cekerbabat" />
      <Trend area="Indonesia" tag="#besartapibukanmimpi" />
      <Trend area="Indonesia" tag="Kaesang" />
      <Trend area="Worldwide" tag="#meganfoxisback" />
    </div>
  );
};

export default Trends;
