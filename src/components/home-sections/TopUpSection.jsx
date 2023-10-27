import { topUpDummy } from "../../services/dummy/data-dummy/dataDummy";
import Card from "../../components/Card";

export default function TopUpSection() {
  return (
    <>
      {/* SECTION CARDS START*/}
      <div className="flex flex-wrap justify-center gap-1 pt-4 pb-4">
        {topUpDummy.map((e, index) => (
          <Card key={index} title={e.title} />
        ))}
      </div>
      {/* SECTION CARDS END*/}
    </>
  );
}
