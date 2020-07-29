import React, { useEffect, useState } from "react";

const App = () => {
  const APP_ID = "e1122621";
  const APP_KEY = "e9b086109a02f466d7b7b602ffc466df";

  useEffect(() => {}, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
