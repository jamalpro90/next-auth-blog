import CardsJS from "../components/CardsJS";
import InputSearchJS from "../components/InputSearchJS";
import LayoutJS from "../components/LayoutJS";

export default function Home() {
  return (
    <LayoutJS>
      <InputSearchJS />
      <CardsJS />
    </LayoutJS>
  );
}
