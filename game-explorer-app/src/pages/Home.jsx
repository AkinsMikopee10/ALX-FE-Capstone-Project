import { useEffect } from "react";
import { fetchFromRawg } from "../api/rawgApi";

function Home() {
  useEffect(() => {
    async function testFetch() {
      try {
        const data = await fetchFromRawg("/games", { page_size: 5 });
        console.log("RAWG API test data:", data);
      } catch (error) {
        console.error("API test failed:", error);
      }
    }
    testFetch();
  }, []);

  return (
    <div className="text-center text-gray-800 dark:text-gray-200 mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Game Explorer</h1>
      <p>Search and discover your favorite games!</p>
    </div>
  );
}

export default Home;
