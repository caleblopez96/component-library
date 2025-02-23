import "./Card.css";

export default function Card() {
  return (
    <div className="border-2 border-red-500 h-[500px] w-[400px] rounded-lg box-border p-6 flex">
      <div className="top-bar rounded-full border-2 border-blue-500 h-[15px] p-4 w-[100px] flex gap-2 justify-center items-center">
        <div className="w-5 h-5 bg-blue-500 rounded-full">X</div>
        <div>-</div>
        <div>^</div>
      </div>
    </div>
  );
}
