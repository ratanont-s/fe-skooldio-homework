import { useEffect, useState } from "react";
import axios from "axios";
import CourseList from "./components/CourseList";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
        );
        console.log("🚀 ~ fetchData ~ response.data:", response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-screen h-screen overflow-y-auto bg-[#f3f3f3] py-4">
      <div className="container-2xl px-4 mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <CourseList courses={data} />}
      </div>
    </main>
  );
}

export default App;
