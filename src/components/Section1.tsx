export default function Section1({ title, text, img }) {
  return (
    <>
      <div className="project-html__bottom-img-2 project-html__img move-in">
        <img
          src={img.src}
          alt={img.alt}
        />
      </div>
      <section className="project-html__section-1 move-in">
        <header>
          <h2 className="h3">{title}</h2>
        </header>
        <div
          className="flex flex-col gap-4"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </section>
    </>
  );
}
