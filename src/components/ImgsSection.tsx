export default function ImgSection({ title, text, imgs }) {
  return (
    <section className="project-html-section wrapper col-span-full">
      <div className="project-html-section__content move-in">
        <header>
          <h2 className="h3">{title}</h2>
        </header>
        <div
          className="project-html-section__text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
      <div className="project-html-section__imgs">
        {imgs.map((img, index) => (
          <figure
            className="project-html__img move-in"
            data-delay={index ? 0.1 + index * 0.1 : 0}
            key={`sectionIndex-${img.src}${img.alt}${index}`}
          >
            <img
              src={img.src}
              alt={img.alt}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
