import { createRoot } from "react-dom/client";
import Dlt from "/src/components/projects/Dlt.jsx";
import Snp from "/src/components/projects/Snp.jsx";
import MaximumClosureSolver from "/src/components/projects/MaximumClosureSolver";
import Header from "/src/components/Header.jsx";
import WebsiteProject from "/src/components/projects/WebsiteProject.jsx";
import MarkovTextChain from "/src/components/projects/MarkovChainText.jsx"

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <main>
      <Dlt />
      <Snp />
      <MaximumClosureSolver />
      <WebsiteProject />
      <MarkovTextChain />
    </main>
  </>
)