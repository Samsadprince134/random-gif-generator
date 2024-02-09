import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="flex flex-col w-screen  background items-center min-h-[100vh] ">
      <h1 className=" text-4xl mt-12 bg-white w-11/12 text-center p-2 rounded-lg font-bold" >RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
