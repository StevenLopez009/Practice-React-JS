import { Suspense } from "react";
import { fetchData } from "./FetchData";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function FetchPro() {
  const data = apiData.read()
  return (
    <div className="App">
      <h1>Fetch Like Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data ?.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default FetchPro;
