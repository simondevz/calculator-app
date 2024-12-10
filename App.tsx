import { AppProvider } from "./provider";
import Calculator from "./src/pages/calculator";

export default function App() {
  return (
    <AppProvider>
      <Calculator />
    </AppProvider>
  );
}
