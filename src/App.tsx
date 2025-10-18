import NavBar from "./components/ui/NavBar";
import SecaoGaleria from "./components/ui/SecaoGaleria";
import SecaoPersonagens from "./components/ui/SecaoPersonagens";

function App() {
  return (
    <>
      <main className="w-full m-0 p-0">
        <div className="flex flex-col pt-20 h-screen w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/b215e880483789.5e55bae1238dd.gif')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/20 z-0" />
          <NavBar />
        </div>
        <SecaoGaleria />
        {/* <SecaoPersonagens /> */}
      </main>
    </>
  );
}

export default App;
