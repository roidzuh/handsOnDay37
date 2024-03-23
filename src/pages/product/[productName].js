import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const route = useRouter();
  return (
    <div>
      Detail dari halaman <h1>{route.query.productName}</h1>
    </div>
  );
}
