import { div } from "three/webgpu";

export default function About({ visible }) {
  return (
    <div className={`about ${visible ? "" : "about--hidden"}`}>
      <div className="wrapper">
        <article className={`about__article `}>
          <header className="about__header">
            <h2 className="about__title">What am I?</h2>
            <p className="about__sub-title">And what is this site?</p>
          </header>
          <p className="about__content">
            I'm a creative soul, always dreaming and thinking of new stories and
            visuals to accompany them. There is a lot more to me but that is the
            bits I think you would care the most about and the things I'm
            willing to share.
            <br />
            <br />
            That is what this website is for sharing. The simple idea that
            somebody, anybody got the itching feeling to create something from
            this website is all I could ask for.
          </p>
        </article>
      </div>
    </div>
  );
}
