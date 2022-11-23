import React, { useState } from "react";
import data from "./data";
import List from "./List";


function App() {

  const [theData, setTheData] = useState(data)

  return (
    <main>
        <section className="container">
          <h3>{theData.length} birthday(s) today</h3>
          <List peopledata={theData} />
          <button onClick={() => {
            setTheData([])}}>Clear All</button>
      </section>
    </main>
  );
}



export default App;
