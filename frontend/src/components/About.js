import "../css/about.css";
import creators from "../services/about.json";
export const About = () => {
  return (
    <section>
      <h2>Sobre nosotros</h2>
      {creators.map((creator) => {
        return (
          <section key={creator.id} className="container-about">
            <img
              src={require(`../img/about-${creator.image}.png`)}
              alt={creator.image}
             className="image-about"/>
            <article className="container-text-about">
              <p className="name-about">
                <strong>
                  {creator.name} {creator.lastname}
                </strong>
              </p>
              <p className="living-about">
                {creator.population}, {creator.province}, {creator.country}
              </p>
              <p className="email-about">{creator.email}</p>
              <p className="job-about">{creator.job}</p>
              <p className="text-about">{creator.testimonial}</p>
            </article>
          </section>
        );
      })}
    </section>
  );
};
