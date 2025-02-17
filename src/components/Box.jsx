// components
import Song from "./Song";
import Tools from "./Tools";

function Box() {
  return (
    <main className="flex flex-col gap-3 items-center justify-center max-w-64 m-auto">
      <Song />
      <Tools />
    </main>
  );
}

export default Box;
