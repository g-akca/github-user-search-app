import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProfileSection from "./components/ProfileSection";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="text-base leading-base text-neutral-500 min-h-screen bg-neutral-100 px-4 py-8 flex justify-center">
      <div className="grow flex flex-col gap-8 max-w-182.5">
        <Header />
        <SearchBar setData={setData} setError={setError} setLoading={setLoading} />

        {!loading ? (
          <ProfileSection data={data} />
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  )
}

export default App
