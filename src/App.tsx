import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";

import type { Itechnologies } from "./type/TechnologiesType";

const technologiesFeach = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFeach();

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={false} />
      <Nav />
      <Banner />

      <Suspense fallback={<p className="p-10 text-center">Loading...</p>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;