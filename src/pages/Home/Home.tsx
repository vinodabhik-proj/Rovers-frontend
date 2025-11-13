import "./Home.css";
import roversPhoto from "../../images/teamPhoto.png";
import CardGrid from "../../components/CardGrid/CardGrid";

export default function Home() {
    return (
        <div className="home">
            <h1>Trumpington Rovers</h1>
            <div className="firstSection">
                <img src={roversPhoto} />
                <div className="about">
                    <h2>Summary</h2>
                    <p>The Trumpington Rovers are made up of two rival schools from the boys’ childhood days. 
                        However, nowadays the team seems to consist mainly of boys who hail from the purple 
                        portion of the badge — which does make you ponder why the badge remains a 50–50 split.
                        The team plays matches every Sunday, much to the bewilderment of all, as most members’ 
                        usual Saturday night plans leave them in a sorry state the morning after. Finally, after 
                        a good showing of quality old-school agricultural football, the boys usually frequent a 
                        nearby watering hole for post-match pints and the Dick of the Day and Man of the Match awards.
                    </p>
                </div>
            </div>
            <div className="origin">
                <h2>The Rovers Through the Ages</h2>
                <p className="first">
                    I am quite the fan of Greek and Roman history, so I shall tell you this tale of our origins with callbacks to 
                    the great civilisations of old. The team first formed as an assortment of like-minded individuals who had recently
                    come to call London their new home. The boys only knew two ways to spend their weekends — beers and ball. So they
                    decided the best thing to do was leave their Friday and Saturday for other shenanigans and work off all the calories
                    accumulated across those days with a game of footy on Sunday. At the time, none of these boys knew how much joy this
                    day would bring their future selves — a day now looked forward to with envy as the week draws to a close. It harkens back
                    to when Romulus and Remus built the foundations of a city that was their pride and joy; Trumpington Rovers games were, and still are, the
                    Trumpington boys’ pride and joy. Little did either know what they would become.
                </p>

                <p>
                    The first football league the boys played in saw them have regular fixtures at Regent’s Park and Clapham Common, much to the 
                    joy of our supporters. This division gave the boys many fond memories, especially for our ex-striker Jack Rusted 
                    (God rest his soul — and please join me in pouring a drink for our fallen comrade), who feasted upon the atrocious 
                    defending on display. Wins were plentiful, and the cup runs were deep. The pinnacle of our success came with a 
                    final appearance in the cup, where we ended up playing at Wembley Stadium. However, this was a day best forgotten 
                    in the annals of Rovers history.
                </p>

                <p>
                    So we shall swiftly move on to the year 2024, when the Rovers decided to make the bold move of changing leagues. The new 
                    league had five divisions, and our chairman wisely decided to put us in the bottom division to “noob-farm.” This did not quite go
                    to plan, and a year on we still remain in the bottom division. However, there was an unspeakable event that struck the Rovers 
                    before the season had even begun. With only weeks remaining before the deadline for re-signing to the league, the Rovers could only muster up
                    nine confirmed season players. For the first time in Rovers history, it looked like the club might fold. However, much like the 300
                    Spartans at Thermopylae who stood firm in the face of unspeakable adversity, these nine men stood strong and shouldered the burden 
                    of keeping the club afloat. Now, the club may have many new faces, but all have proven themselves to be true Rovers at heart. 
                    We can only wait and see what the future may bring — so stay tuned...
                </p>
            </div>
            <div className="team">
                <CardGrid />
            </div>
        </div>
    );
}