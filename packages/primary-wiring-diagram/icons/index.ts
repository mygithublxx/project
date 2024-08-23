import TripleCoil from "./components/TripleCoil";
import Arrester from "./components/Arrester";
import Coil from "./components/Coil";
import Inductance from "./components/Inductance";
import Placeholder from "./components/Placeholder";
import Isolator from "./components/Isolator";
import Ammeter from "./components/Ammeter";
import Load from "./components/Load";
import Grounding from "./components/Grounding";
import GroundingLine from "./components/GroundingLine";
import Inverter from "./components/Inverter";
import Fuse from "./components/Fuse";
import ThreePhaseInductance from "./components/ThreePhaseInductance";
import TopConnection from "./components/TopConnection";
import Unknown from "./components/Unknown";
import BottomConnection from "./components/BottomConnection";
import Indicator from "./components/Indicator";
import Transverter from "./components/Transverter";
import HorizonLine, { HorizonLineProps } from "./components/HorizonLine";
import VerticalLine from "./components/VerticalLine";
import { MetaIconComponent } from "./dto";

export {
  HorizonLine,
  VerticalLine,
  Arrester,
  TripleCoil,
  Coil,
  Inductance,
  Placeholder,
  Isolator,
  Ammeter,
  Load,
  Grounding,
  GroundingLine,
  Inverter,
  Fuse,
  ThreePhaseInductance,
  TopConnection,
  BottomConnection,
  Unknown,
  Indicator,
  Transverter,
};

export const ICON_LIST: MetaIconComponent<{} | HorizonLineProps>[] = [
  HorizonLine,
  VerticalLine,
  Arrester,
  TripleCoil,
  Coil,
  Inductance,
  Placeholder,
  Isolator,
  Ammeter,
  Load,
  Grounding,
  GroundingLine,
  Inverter,
  Fuse,
  ThreePhaseInductance,
  TopConnection,
  BottomConnection,
  Unknown,
  Indicator,
  Transverter,
];
