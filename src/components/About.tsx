export default function About({ visible }) {
	return <article className={`about ${visible ? "": "hidden"}`}>
		<header>
			lorem
		</header>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque libero praesentium perspiciatis quae, distinctio provident, aut suscipit in perferendis molestiae, odio dolorem facere eos commodi! Corporis illum eaque nostrum.</p>
	</article>;
}
