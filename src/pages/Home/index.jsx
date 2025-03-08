import { useState } from "react";
import "./style.css";
import {
  games,
  consoleColors,
  ratingColors,
  difficultyColors,
} from "../../lib/utils";

function App() {
  return (
    <div className="container">
      <div className="flex-col gap-8 w-full justify-items-center">
        {/* Form Container */}
        <div className="w-lg self-center">
          <h1 className="text-4xl mb-6 text-center font-bold">
            Gaming Tracker
          </h1>
          <form className="w-full mx-auto">
            {[
              { id: "Game", label: "Game" },
              { id: "Console", label: "Console" },
              { id: "Gênero", label: "Gênero" },
              { id: "Tipo", label: "Tipo" },
              { id: "Início", label: "Início" },
              { id: "Fim", label: "Fim" },
              { id: "Condição de Zeramento", label: "Condição de Zeramento" },
              { id: "Nota", label: "Nota" },
              { id: "Dificuldade", label: "Dificuldade" },
            ].map(({ id, label }) => (
              <div key={id}>
                <input
                  id={id}
                  className="border border-gray-300 rounded-md h-10 px-4 my-1.5 w-full"
                  name={id}
                  type="text"
                  placeholder={label}
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Table Container */}
        <div className="mt-6 overflow-x-auto overflow-hidden w-dvw px-10">
          <table className="border table-auto w-full">
            <thead>
              <tr className="bg-[#1A1A1A] text-white text-center ">
                {[
                  "Game",
                  "Console",
                  "Gênero",
                  "Tipo",
                  "Início",
                  "Fim",
                  "Pra Zerar",
                  "Nota",
                  "Dificuldade",
                ].map((header, i) => (
                  <th
                    key={header}
                    className={`px-2 py-8 font-medium ${
                      i === 0 ? "text-left" : "text-center"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {games.map((game) => (
                <tr key={game.id} className=" transition">
                  <td className="px-2 py-4 text-left italic">{game.name}</td>
                  <td
                    className={`px-2 py-3 ${
                      consoleColors[game.console] || "bg-gray-300"
                    } text-center`}
                  >
                    {game.console}
                  </td>
                  <td className="px-2 py-4">{game.genre}</td>
                  <td className="px-2 py-4">{game.category}</td>
                  <td className="px-2 py-4">{game.startDate}</td>
                  <td className="px-2 py-4">{game.completionDate || "N/A"}</td>
                  <td className="text-sm px-2 py-4">{game.condition}</td>
                  <td
                    className={`px-2 py-3 ${
                      ratingColors[game.rating] || "bg-cyan-300"
                    } text-center`}
                  >
                    {game.rating}
                  </td>
                  <td className="px-2 py-4">
                    <div className="inline-flex items-center gap-2">
                      <span>{game.difficulty}</span>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          difficultyColors[game.difficulty] || "bg-gray-300"
                        }`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
