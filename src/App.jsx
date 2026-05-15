import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="text-base leading-base text-neutral-500 min-h-screen bg-neutral-100 px-4 py-8 flex justify-center">
      <div className="grow flex flex-col gap-8 max-w-182.5">
        <Header />
        <SearchBar />
        <ProfileSection />
      </div>
    </div>
  )
}

export default App
