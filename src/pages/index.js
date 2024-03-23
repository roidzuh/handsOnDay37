import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const route = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getFoods = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    setData(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getFoods();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

  return (
    <div>
      {/* <ul>
        <Link href="/about">about</Link>
        <Link href="/muhammad/saifur">Saifur</Link>
        <Link href="/muhammad/subhan">subhan</Link>
      </ul> */}
      <h1>List Makanan</h1>
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: "30px" }}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <img src={item.imageUrl} alt={item.name} style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
}
