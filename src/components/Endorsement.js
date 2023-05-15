import React from "react";
import AdditionalLinks from "./AdditionalLinks";
import { Helmet } from "react-helmet";

function Endorsement() {
  return (
    <div>
      <Helmet>
        <title> ✅ This is Endorsement of Vible</title>
      </Helmet>
      <h1>This is Endorsement of Vible</h1>
      <div className="content">
        <div>
          <p>
            <q>
              The Vible is a functional mental shield to block the bad vibes,
              low minded thoughts, fears, and roadblocks we all face by
              reminding ourselves that continuing to look towards abundance,
              means increasing the chance of achieving it.
            </q>{" "}
            - Neobuddhist Movement
          </p>
        </div>
        <div>
          <p>
            <q>
              The Vible condenses the essence of every religion and creates a
              short and sweet testimony to recreate the same feelings of faith,
              hope, and acceptance that lies as the core message of other
              religious texts.
            </q>{" "}
            - Jack Jay
          </p>
        </div>
        <div>
          <p>
            <q>
              Its made so perfectly for this day in age where condensed
              universal pragmatic truths are possible. I believe the Vible
              spreading as an internet meme is inevitable
            </q>
            - Marcus Mesa
          </p>
        <p>The Vible is an undeniable pragmatic GATEWAY to faith.</p>
      </div>
        </div>
      <div>
        <AdditionalLinks />
      </div>
    </div>
  );
}

export default Endorsement;
