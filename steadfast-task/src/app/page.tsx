import Image from "next/image";
import Navbar from "./components/navbar";
import NavigationBar from "./components/header";

export default function ProductDetailsPage() {
  return (
    <div className="bg-red-600 text-black">
      <Navbar />
      <NavigationBar />
    </div>
  );
}
