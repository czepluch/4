import React from "react";
import Layout from "../components/Layout";
import ETHBerlin from "../components/ETHBerlin";

const Hack = () => {
  return (
    <Layout>
      <div className="textbox text-base decorate-links">
        <h1 className="mb-4 font-ocra underline text-berlin-red">
          &lt;&lt;H&lt;ACKER MANUAL
        </h1>
        <p>This section aims to help you to prepare for the hackathon.</p>
        <div className="mb-8">
          <h3 className="text-xl">TL;DR</h3>
          <ul>
            <li>
              Join the conversation on Matrix:{" "}
              <a
                href="https://matrix.to/#/%23ethberlin:dod.ngo"
                target="_blank"
                rel="noreferrer noopener"
              >
                #ethberlin:dod.ngo
              </a>
            </li>
            <li>
              Find a team on Github:{" "}
              <a
                href="https://github.com/ethb3rlin/find-a-team"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/ethb3rlin/find-a-team
              </a>
            </li>
            <li>
              Visit this page frequently as we update the manual regularly.
            </li>
            {/* <li>
              ??? Bookmark the Mentor Helpdesk:{" "}
              <a href="https://ask.ethberlin.ooo" target="_blank">
                ask.ethberlin.ooo
              </a>
            </li> */}
          </ul>
        </div>
        {/* <h2 className="text-2xl font-bold">Overview</h2>
        <div className="mb-8">
          <h3 className="text-xl">Before the Hackathon</h3>
          <ul>
            <li>
              <a href="#travel"> Travel and Accomodation</a>
            </li>
            <li>
              <a href="#find-a-team"> Find a Team/Hacker/Idea </a>
            </li>
            <li>
              <a href="#connect">Connect and Chat</a>
            </li>
            <li>
              <a href="#food">Food and Drinks</a>
            </li>
          </ul>
          <h3 className="text-xl">During the Hackathon</h3>
          <ul>
            <li>
              <a href="#hack">Hacking and Rules</a>
            </li>
            <li>
              <a href="#ethercards"> EtherCards with Goerli ETH </a>
            </li>
            <li>
              <a href="#prizes-bounties"> Prizes and Bounties </a>
            </li>
            <li>
              <a href="#mentors">Getting Help from Mentors</a>
            </li>
            <li>
              <a href="#submissions">Submissions</a>
            </li>
            <li>
              <a href="#judging">Judging</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
          </ul>
        </div> */}
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-8 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="travel" className="mt-8">
          <h2 className="text-2xl font-bold">Travel and Accommodation</h2>
          <h3 className="text-xl mt-4">Travel to Berlin</h3>
          <p>
            Berlin has one airport called Berlin Brandenburg Airport "Willy
            Brandt" (BER) and is well connected with railway. You can take a
            train from European cities such as Stockholm or Paris to travel with
            the convenience of comfortable high-speed trains with internet
            access, avoid the long security lines, missing luggages, and
            decrease your CO2 footprint. Check the{" "}
            <a
              href="https://www.bahn.com/en"
              rel="noreferrer noopener"
              target="_blank"
            >
              Deutsche Bahn
            </a>{" "}
            website for routes.
          </p>
          <h3 className="text-xl">Urban Transport</h3>
          <p>
            Berlin is a bike friendly city. Most of the times the quickest and
            easiest way to getting from A to B is by bike. If you are staying
            longer than just a few days, you might want to consider renting a
            bike from{" "}
            <a
              href="https://swapfiets.de/en-DE/berlin"
              target="_blank"
              rel="noreferrer noopener"
            >
              Swapfiets
            </a>{" "}
            or buying daily/monthly subscription from{" "}
            <a
              href="https://www.nextbike.de/en/#tariffs"
              target="_blank"
              rel="noreferrer noopener"
            >
              nextbike
            </a>{" "}
            (bike sharing). You will also find many scooters and bikes that you
            can grab around the city.
          </p>
          <p>
            On the{" "}
            <a
              href="https://www.jelbi.de/en/home/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Jelbi App
            </a>{" "}
            you can conveniently find the public transportation tickets and info
            as well as carsharing, scooters, bikes etc.
          </p>
          <h3 className="text-xl">Accomodation</h3>

          <p>
            Finding a hotel or other affordable accommodation in Berlin can be
            quite a challenge in itself. Since this year's ETHBerlin is
            coinciding with the{" "}
            <a
              href="https://olympiastadion.berlin/en/term/dfb-pokal-final-2024/"
              target="_blank"
              rel="noreferrer noopener"
            >
              German Cup Final
            </a>{" "}
            and the{" "}
            <a
              href="https://www.euroleaguebasketball.net/euroleague/final-four/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Euroleague Final Four
            </a>
            , it can be particularly difficult to find a place. We recommend you
            to look for a suitable shelter as soon as you receive your hacker
            confirmation! If you haven't booked anything yet, best do so asap.
          </p>

          <p>
            Aside from hotels and Airbnbs, you can check offers on local options
            like{" "}
            <a
              href="https://www.wg-gesucht.de/en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              WG-Gesucht
            </a>{" "}
            and Facebook groups or post your own requests post there. However,
            please be wary of the risks and potential scams.
          </p>

          <p>
            Join our{" "}
            <a
              href="https://matrix.to/#/%23eb4-couches:dod.ngo"
              target="_blank"
              rel="noreferrer noopener"
            >
              #couchsurfing
            </a>{" "}
            chat and fill in the{" "}
            <a
              href="https://office.ethberlin.org/sheet/#/2/sheet/edit/NYEjPNvPzIxa0k5mcXTCZUrH/"
              target="_blank"
              rel="noreferrer noopener"
            >
              coordination sheet
            </a>{" "}
            if you are offering or looking for a place to sleep.
          </p>

          <p>
            Our venue is open 24/2 and welcomes hacking through the night. There
            are many cozy corners with sofas, beanbags etc. However, we still
            would recommend to look for a place to leave your stuff, sleep, and
            take a shower.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="find-a-team">
          <h2 className="text-2xl font-bold">Find a Team/Hacker/Idea</h2>
          <p>
            Are you missing a team, a hacker, an idea? Or you have an idea that
            can be implemented during the hackathon? Find a match on{" "}
            <a
              href="https://github.com/ethb3rlin/find-a-team"
              rel="noreferrer noopener"
              target="_blank"
            >
              Github
            </a>{" "}
            or join the Hacker Matchmaking session on Friday after the opening
            ceremony.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="connect">
          <h2 className="text-2xl font-bold">Connect and Chat</h2>
          <p>
            The only official communication channel is the ETHBerlin Matrix
            space. Use it to connect with hackers and mentors, and to get
            updates from the organizers throughout the hackathon:{" "}
            <a
              href="https://matrix.to/#/%23ethberlin:dod.ngo"
              target="_blank"
              rel="noreferrer noopener"
            >
              #ethberlin:dod.ngo
            </a>
          </p>
          <p>There is no Discord or Telegram.</p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="food">
          <h2 className="text-2xl font-bold">Food and Drinks</h2>
          <p>
            As per usual, this one is on us! ETHBerlin will cover all meals and
            drinks for the entire hackathon! This includes breakfasts, lunches,
            dinners, and midnight snacks as well as various soft drinks, mate
            (of course!), water, coffee and beer. There will be vegan and
            vegetarian options provided. Just come with an open mind, a
            knowledge-thirsty brain and enthusiasm. Meal and snack times will be
            on the program.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="hack">
          <h2 className="text-2xl font-bold">Hacking and Rules</h2>
          <p>Read the fine manual or regret it later.</p>
          <h3 className="text-xl">Hacking Rules</h3>
          <ul>
            <li>A team can not be more than five people.</li>
            <li>
              You must be present at the ETHBerlin venue for your project to be
              eligible for submission.
            </li>
            <li>
              You can plan ahead of time, but all code for your project has to
              be written during the event. Code can only be committed after
              hacking officially starts and only until the submission deadline.
            </li>
            <li>You cannot use another team's source code.</li>
            <li>
              The decision of judges is final for determining prizes and awards.
            </li>
            <li>
              Breaking our <a href="/code-of-conduct">Code of Conduct</a> leads
              to the exclusion from the event.
            </li>
          </ul>
          <h3 className="text-xl">Minimum Submission Requirements</h3>
          <ul>
            <li>A link to the open-source code must be provided.</li>
            <li>A short presentation file must describe your project.</li>
            <li>
              If applicable, the contract address(es) of your deployed demo must
              be provided, either on a testnet of your choice or mainnet of a
              platform of choice.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="prizes-bounties">
          <h2 className="text-2xl font-bold">Prizes and Bounties</h2>
          <h3 className="text-xl mt-4 font-bold">Track Awards</h3>
          <div>
            The track awards are centered around themes that align with our{" "}
            <a href="/manifesto">manifesto</a>, and what we believe the industry
            needs to re-focus on. The winning teams of the track awards receive
            7,000 DAI.
          </div>
          <ul className="mt-2">
            <li>
              <b>Defensive Tooling:</b> This track is the right choice for you
              if you want to hack on tools that enhance security and privacy.
              It's about building projects that prioritize defense,
              decentralization, and resilience to create a more secure and freer
              world.
              <br />
              Think topics like encryption, counter-surveillance, identity
              protection, anonymity, anti-identity, security, local data
              handling, and anything that armors the individual against
              intrusive data collection practices.
            </li>
            <li>
              <b>Freedom to Transact:</b> This track is for you if you want to
              ensure that anyone, anywhere, anytime can facilitate unrestricted
              transactions.
              <br />
              We're looking for projects that enable people to access and send
              money, or value, across borders without restrictions, promoting
              financial inclusion. This track is for those who want to hack on
              peer-to-peer solutions, build censorship-resistant applications,
              and ensure that transactions can be private and secure.
            </li>
            <li>
              <b>Social Technologies:</b> This track is all about platforms and
              tools that enable informed and collective decision-making,
              transparent governance, and collaboration and coordination among
              decentralized communities.
              <br />
              If you want to build credibly neutral systems for voting,
              governance, and social interaction, and systems that counter
              disproportionate influence of centralized powers then this track
              is for you and your team. Other ideas you could hack on are
              consensus-finding algorithms, sybil resistance, and decentralized
              social reputation.
            </li>
            <li>
              <b>Infrastructure:</b> The backbone of the revolution. This track
              is dedicated to the architects and builders laying down the
              underlying infrastructures that robust distributed public goods
              need to run efficiently and reliably.
              <br />
              Projects could include protocol specification and implementations,
              networking, developer tools, and hardware.
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Excellence Awards</h3>
          <div>
            Back by popular demand, please welcome the Excellence Awards. The
            winners of each of these get 5,000 DAI and these are to recognise
            the following:
          </div>
          <ul className="mt-2">
            <li>
              <b>Best Smart Contracts:</b> Outstanding smart contract code
              quality and documentation, security and gas-optimization.
            </li>
            <li>
              <b>Best Social Impact:</b> Outstanding positive impact on
              underserved communities and society as a whole.
            </li>
            <li>
              <b>Best User Experience:</b> Outstanding user experience that does
              not sacrifice on security, privacy or self-custody.
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-6">
            The <i>Meta</i> Award
          </h3>
          <div className="mt-2">
            We'd like to introduce a new category this year, the Meta Award, as
            an ode to ETHBerlin being powered by many awesome open-source
            projects. So for this one we invite you to go meta by building
            contributions that improve the ETHBerlin experience itself! Projects
            eligible for this award can either pick from our wishlist{" "}
            <i>(coming soon™)</i> of contributions, or can build an entirely new
            thing that they consider to be a positive impact for future versions
            of ETHBerlin. The winner of this track will receive 4,000 DAI.
          </div>
          <h3 className="text-xl font-bold mt-6">The Hacker's Choice Award</h3>
          <div className="mt-2">
            A prize to be picked by the ETHBerlin hackers. After the hackathon
            weekend, hackers will review all the projects and cast their votes
            for their favorite project. Redistribution of the prize money cannot
            be the essence of the project. The winner of this award will receive
            7,000 DAI.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>
        <div id="mentors">
          <h2 className="text-2xl font-bold">Help from Mentors</h2>
          <b>TL;DR</b>
          <ul>
            <li>
              To get help ask questions in the Mentor Matrix room:{" "}
              <a 
                href="https://matrix.to/#/#eb4-mentors:dod.ngo"
                target="_blank"
                rel="noreferrer noopener"
              >
                #eb4-mentors:dod.ngo
              </a>
            </li>
            <li>
               Or go to the Mentor Helpdesk located in the Career Foundry next to the big tent in Yard 1  
               {/* TODO: Could you add a link to the map here, please */}
            </li>
            <li>
              Helpdesk open Friday from hacking starts until midnight, Saturday from 08:00 to midnight and Sunday from 08:00 to submission deadline(12:00)
            </li>
          </ul>
          <p>
            As with all previous ETHBerlins we've made sure to have a team of amazing
             mentors ready to help you build the best possible projects throughout the 
             weekend. No questions are too small or too big to ask. As a hacker you can 
             find the mentors in person as per the TL;DR above. You can also contact 
             them with any questions you might have in the Matrix room that's also 
             listed in the TL;DR. If you ask the question in the middle of the night 
             you might not get a reply right away, but we will make sure to address 
             it first thing in the morning.
          </p>
          <p>
            We encounrage hackers to help each other out and keep an eye on the 
            mentoring matrix channel. There might be some hackers with very specific 
            expert knowledge and it would be great if this could be shared.
          </p>
          <p>
            You might also see the mentors througout the venue. They'll be wearing 
            a button/badge on their shirt saying "Mentor". They're all very friendly 
            so don't hesitate to ask them a question or get their feedback on something.
          </p>

        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div>

        {/* <div id="submissions">
          <h2 className="text-2xl font-bold">??? Submissions</h2>
          <p>
            You have to register and create your project at{" "}
            <a
              href="https://ethberlin.devfolio.co/"
              target="_blank"
              rel="noreferrer noopener"
            >
              ethberlin.devfolio.co
            </a>{" "}
            for submission before Sunday, 11am.
          </p>
          <p>
            Make sure to provide a link to your open-source repository, a video
            or a demo, and if applicable, the contract address(es) of your
            deployed application, either on a testnet of your choice or mainnet
            of a platform of choice.
          </p>
          <p>
            All submitted projects will be eligible for the main hackathon
            prize. In addition, you have to select a category (track), which you
            would like to pitch for, and up to two meta awards.
          </p>
          <p>Don't miss the deadline! Sunday 11am!</p>
        </div>
        <div className="flex justify-center">
          <div className="border-b-[1px] mb-8 mt-4 border-gray-300 opacity-40 w-full"></div>
        </div> */}
        {/* <div id="judging">
          <h2 className="text-2xl font-bold">??? Judging</h2>
          <p>
            You can find the prizes and bounties in the{" "}
            <a href="#prizes-bounties">above section</a>.
          </p>
          <p>
            This year, we will use a different platform for your submissions. We
            decided not to use devpost for this edition, since they are sadly
            excluding participation from some regions by default. This
            discriminatory and overly compliant behavior is kind of a "no" for
            us, so instead we shall be collaborating with the much more
            decentralised crew at{" "}
            <a href="https://devfolio.co/home/" target="_blank" rel="noopener">
              Devfolio
            </a>
            .
          </p>

          <p>
            Each team will have one person pitch their project for 3 minutes
            followed by a 2 minutes Q&A session. The pitch will be in front of
            three judges each with different areas of exptertise. The presenter
            should bring their laptop and use it for the pitch. All judging will
            take place on the second floor. A schedule will be shared after
            11:30 Sunday. Please be there at least 5 minutes before your
            allocated timeslot.
          </p>

          <p>
            We aim to continuously improve the process. This is why this year we
            will have three different approaches to judging:
          </p>

          <ul>
            <li>
              "Traditional judging": Judges watch live pitches & Judges check
              submissions async digitally
            </li>
            <li>Community judging powered by quadratic voting</li>
          </ul>
          <p>
            Overall, we also want to increase the transparency of the judging.
            This is why all judge voting sheets will be made publicly available
            after the winning ceremony.
          </p>
          <p>
            Judging will take place on Sunday 18th September and the judges will
            be reviewing project submissions, and watching pitches, from the
            11am deadline until just before the closing ceremony. Note: we will
            also be shuffling the judging teams halfway through just to make
            sure there is no relative bias.
          </p>

          <p>
            The track specific judges will watch live pitches, while the judges
            allocated to the meta awards will review the submissions digitally.
            There will be 24 track judges (8 groups of three), and each group
            will include one technical person, one product/wildcard and one
            business/VC judge.
          </p>

          <p>
            As mentioned above, the meta specific judges will review submissions
            digitally and there will be two pairs of judges per meta award.
          </p>

          <p>
            The judges will be reviewing each submission with the following
            criteria in mind.
          </p>

          <ul>
            <li>
              Technicality: How hard was it to build this and how does the
              quality of the codebase compare?
            </li>
            <li>
              Originality: Is this something completely new or are there already
              projects with grant funding working on a similar scope?
            </li>
            <li>
              Practicality: How would this submission survive in the real world,
              outside of the crypto community? Or, if the project were to be
              specifically targeted to the crypto community, how correctly
              targeted is it?
            </li>
            <li></li>
            <li>
              WOW Factor: What else is there about the submission? Has this
              project and/or team defied expectations, based on timing, efforts,
              etc.?
            </li>
          </ul>
        </div> */}
      </div>
    </Layout>
  );
};

export default Hack;
