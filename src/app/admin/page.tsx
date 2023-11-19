import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce | Dashboard",
  description: "E-commerce by Savlatbek",
};

const page = () => {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
    </section>
  );
};

export default page;
