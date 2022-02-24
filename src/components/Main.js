import React from "react";

const Main = () => {
  return (
    <main>
      <section>
        <article className="card">
          <ul className="card_list">
            <li className="card_list_element icon">
              <svg className="social_media_icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#178FF5"
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                />
              </svg>
              <span className="social_media_name">@nathanf</span>
            </li>
            <li className="card_list_element">
              <span className="social_media_number">1987</span>{" "}
              <span className="social_media_followers">Followers</span>
            </li>
            <li className="card_list_element">
              {" "}
              <span className="social_media_increase">12 Today</span>
            </li>
          </ul>
        </article>

        <article>@nathanf 1044 Followers 99 Today</article>
        <article>@realnathanf 11k Followers 1099 Today</article>
        <article>Nathan F. 8239 Subscribers 144 Today</article>
      </section>
      <section>
        Overview - Today
        <article>Page Views 87 3%</article>
        <article>Likes 52 2%</article>
        <article>Likes 5462 2257%</article>
        <article>Profile Views 52k 1375%</article>
        <article>Retweets 117 303%</article>
        <article>Likes 507 553%</article>
        <article>Likes 107 19%</article>
        <article>Total Views 1407 12%</article>
      </section>
    </main>
  );
};

export default Main;
