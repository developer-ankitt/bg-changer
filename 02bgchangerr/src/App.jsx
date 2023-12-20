import { useState } from "react"


function App() {
  const [color, setColor] = useState("#f1d299")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
            onClick={() => setColor("#ff3737")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ff3737" }}
          >Red</button>

          <button
            onClick={() => setColor("#a72626")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#a72626" }}
          >Maroon</button>

          <button
            onClick={() => setColor("#ff74bc")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ff74bc" }}
          >Pink</button>

          <button
            onClick={() => setColor("#bf51e0")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#bf51e0" }}
          >Purple</button>

          <button
            onClick={() => setColor("#414796")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#414796" }}
          >Navy</button>

          <button
            onClick={() => setColor("#333333")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#333333" }}
          >Black</button>

          <button
            onClick={() => setColor("Grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Grey" }}
          >Grey</button>

          <button
            onClick={() => setColor("#ff9351")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ff9351" }}
          >Orange</button>

          <button
            onClick={() => setColor("#cf5e08")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#cf5e08" }}
          >Brown</button>

          <button
            onClick={() => setColor("#FF9800")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF9800" }}
          >Yellow</button>

          <button
            onClick={() => setColor("rgb(160 160 185)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "rgb(160 160 185)" }}
          >Lavender</button>

          <button
            onClick={() => setColor("Teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Teal" }}
          >Teal</button>

          <button
            onClick={() => setColor("#7BD3EA")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#7BD3EA" }}
          >Blue</button>

          <button
            onClick={() => setColor("#eba39c")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#eba39c" }}
          >Peach</button>

          <button
            onClick={() => setColor("#f1d299")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#f1d299" }}
          >Beige</button>

          <button
            onClick={() => setColor("#afbf8d")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#afbf8d" }}
          >Sage</button>


        </div>
        {/* <footer style={{ marginTop: '20px' }}>
          <p>Background Changer App - Created by <span className="text-red-800"><a href="https://www.instagram.com/developer_ankitt/" target="_blank" rel="noopener noreferrer">@developer_ankitt</a></span></p>
        </footer> */}
        <footer className="text-center py-4 lg:py-8 text-black">
          <p className="mb-2">Background Changer App - Created by <span className="text-red-800"><a href="https://www.instagram.com/developer_ankitt/" target="_blank" rel="noopener noreferrer">@developer_ankitt</a></span></p>
        </footer>
      </div>
    </div>
  )
}

export default App