export default function FullWidthImg({ img }) {
  return (
    <figure className="project-html__full-width-img project-html__img move-in">
      <img
        src={img.src}
        alt={img.alt}
      />
    </figure>
  );
}
