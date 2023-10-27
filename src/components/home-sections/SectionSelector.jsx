import JokiSection from "./JokiSection";
import TopUpSection from "./TopUpSection";
import VoucherSection from "./VoucherSection";

export default function SectionSelector({ section }) {
  if (section === 0) {
    return <TopUpSection />;
  }

  if (section === 1) {
    return <VoucherSection />;
  }

  if (section === 2) {
    return <JokiSection />;
  }
}
