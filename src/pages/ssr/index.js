import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );
  return {
    props: {
      foods: res?.data?.data || [],
    },
  };
}

export default function FoodList({ foods }) {
  return (
    <div>
      <h1>List Makanan</h1>
      {foods.map((item) => (
        <div key={item.id} style={{ marginBottom: "30px" }}>
          <p>Nama : {item.name}</p>
          <p>Deskripsi : {item.description}</p>
          <img src={item.imageUrl} alt={item.name} style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
}
