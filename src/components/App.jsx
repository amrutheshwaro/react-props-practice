import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  for (const contact of contacts) {
    return (
      <div>
        <Card
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      </div>
    );
  }
}

export default App;
