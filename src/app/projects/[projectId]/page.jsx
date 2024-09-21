import Image from "next/image";

export default function Project({ params }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Image src="https://placehold.co/600x400" alt="fsdf" className="img" />
      </div>
    </div>
  );
}
