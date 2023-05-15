import React from "react";
import holy from "./assest/holyvible.jpeg";
import batman from "./assest/batman.jpeg";
import AdditionalLinks from "./components/AdditionalLinks";

function Blog() {
  return (
      <div className="container">
        <h1 className="title">Holy Vible</h1>
        <div className="flex-tools">
          <div className="flex-image">
            <img src={holy} alt="index" className="project" />
          </div>
          <div className="flex-quote">
            <q>
              <i>
                The Vible is a universal path into the door of faith in a
                grander plan. They remade a theory of belief, placed it onto a
                single page on the internet, and made it atheist proof! It seems
                inevitable paired with the branding to not have insane mimetic
                spread
              </i>
            </q>
            -Elon Musk ✅
          </div>
        </div>
        <div className="list-items">
        <h2>The Newest Testament</h2>
        <hr className="hr" />
          <ol>
            <li>
              Everything you can’t change happened for a good reason. If it did
              not, it is better to think that it did.
            </li>
            <li>
              Have faith things are going to be great. If you do, you
              <sup>'</sup>ll at least get closer to where you want to be.
            </li>
            <li>Have Faith in having Faith, and nothing can limit it.</li>
            <li>Limitless faith leads to limitless hope.</li>
            <li>Limitless hope leads to limitless love.</li>
            <li>Limitless love is the vibe of heaven.</li>
            <li>Together, through faith, we can bear witness to heaven.</li>
            <li>
              Don<sup>'</sup>t doubt the vibe, spread it.
            </li>
            <li>Gods amazing grace is coming back.</li>
            <li>We lost our hope when we lost our faith.</li>
            <li>
              Now our faith is returning and with it a new hope will multiply.
            </li>
            <li>
              For hope is a necessary ingredient for our hopes to become
              reality.
            </li>
            <li>Our dreams is only limited by how hard we can meme</li>
          </ol>
        </div>
       <div className="paragraph">
       <p>
          The universe was made for you, if it wasn't, it is better to think
          that it was. To some extent (perhaps a greater extent than we can yet
          quite fathom), how we perceive and approach the world creates a world
          that appears to us in that form — as “real.”As Werner Heisenberg put
          it: “What we observe is not nature itself, but nature exposed to our
          method of questioning.” The future is going to be better than you can
          imagine, if it<sup>'</sup>s not it<sup>'</sup>s better to think that
          it is. Not just because it gives you better vibes in the moment, but
          because it actually increases the chance that it is better. Our limits
          are only defined by how high we meme.
        </p>
       </div>
      <div className="paragraph">
      <img src={batman} alt="batman" className="batman-image" />
        <p>
          I ACTUALLY GOT TIRED OF THE FACT THAT OUR ENTIRE WORLD IS BEING RAN BY{" "}
          <b>ENGAGEMENT ALGORITHMS</b> WHICH ARE NO BETTER THAN{" "}
          <b>SOUL SUCKING DEMONS</b> AND MADE THIS APP THAT RANKS VIDEOS BASED
          ON WHAT INSPIRES PEOPLE THE MOST:
        </p>
      </div>
      <div>
        <AdditionalLinks />
      </div>
    </div>
  );
}

export default Blog;
