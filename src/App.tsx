import React, { useState } from "react";
import { countries } from "./data/countries";
import { getFlagUrl } from "./utils/flagsApi";

const App: React.FC = () => {
  const [team1, setTeam1] = useState<string>("BR"); // Time 1
  const [team2, setTeam2] = useState<string>("DE"); // Time 2

  // Obter o nome do país a partir do código
  const getCountryName = (code: string) => {
    return countries.find((country) => country.code === code)?.name || "Unknown";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Football Match</h1>

        {/* Seleção de Times */}
        <div className="flex justify-center gap-10 mb-12">
          {/* Dropdown para Team 1 */}
          <div className="text-center">
            <label htmlFor="team1" className="block text-lg font-medium mb-2">
              Select Team 1
            </label>
            <select
              id="team1"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown para Team 2 */}
          <div className="text-center">
            <label htmlFor="team2" className="block text-lg font-medium mb-2">
              Select Team 2
            </label>
            <select
              id="team2"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Exibição do Jogo */}
        <div className="flex items-center justify-center gap-8 text-2xl font-semibold">
          {/* Time 1 */}
          <div className="text-center -ml-48">
            <img
              src={getFlagUrl(team1, "shiny", 64)}
              alt={`Flag of ${getCountryName(team1)}`}
              className="mx-auto mb-2"
            />
            <p>{getCountryName(team1)}</p>
          </div>

          {/* "X" no meio */}
          <div className="text-4xl font-bold text-gray-700 fixed">X</div>

          {/* Time 2 */}
          <div className="text-center -mr-48 fixed">
            <img
              src={getFlagUrl(team2, "shiny", 64)}
              alt={`Flag of ${getCountryName(team2)}`}
              className="mx-auto mb-2"
            />
            <p>{getCountryName(team2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
