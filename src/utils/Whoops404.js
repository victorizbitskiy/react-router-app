import { useLocation } from "react-router";

export function Whoops404() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}