import Album from "@/components/Album";
import axios from "axios";
import type { NextPage, GetStaticProps } from "next";

export interface ImageType {
  url: string;
  title: string;
  user: number;
  description: string;
  id: string;
}

interface HomeProps {
  images: ImageType[];
}

const Home: NextPage<HomeProps> = ({ images }) => {
  return (
    <div className="container p-5 mx-auto">
      <header className="mb-5">
        <h1 className="text-2xl">
          <b>Brainscape App Coding Exercise</b>
        </h1>
        <h2>Photo Album Generator by John Bessey</h2>
      </header>
      <Album photos={images} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const API_ENDPOINT = "https://api.slingacademy.com/v1/sample-data/photos"; // Adjust if needed

  try {
    const images: ImageType[] = await axios
      .get(`${API_ENDPOINT}?limit=100`)
      .then((res) => res.data.photos);

    return {
      props: {
        images,
      },
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    return {
      props: {
        images: [],
      },
    };
  }
};

export default Home;
