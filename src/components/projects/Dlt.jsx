export default function Dlt() {
    return (
        <details className="project-details" id="dlt">

            <summary>C#, Unity - Digital Lancer Tool</summary>
                            
            <p>This project was my dissertation for university and represents my foolish five month deep dive into an industry I had no exposure to. This largely incomplete yet ongoing piece of work was initially intentioned to be a digital tool to run combat scenes from the popular ttrpg <a href="https://massifpress.com">Lancer</a>. The aim is to produce a tool to simulate combat scenes with all the rules of Lancer and all the player's mechs and pilots stored in COMP/CON, another tool used by the community.</p>
            <p>During the development of this tool, I relied heavily on tutorials provided by <a href="https://www.youtube.com/channel/UCFK6NCbuCIVzA6Yj1G_ZqCg">Code Monkey</a>, a popular Unity communicator who explains how Unity's libraries can be used. The system uses a combination of game scene coordinates for player interaction and cube coordinate system based on Amit Patel's helpful <a href="https://www.redblobgames.com/grids/hexagons">blog</a> as a the logical backend. I tried to build this tool as best as I could to adhere to SOLID principles, however, whilst my most technically impressive project on display, it still needs a lot of work.</p>
            <p>Once upon a time, a build version of this project implemented the Unity Sentis ready Phi1.5 LLM in order to produce text reactions from enemy agents according to the player's actions. This was removed due to hardware limitations and because sometimes the player would end up feeling pretty bad for shooting the enemy and receiving a realistic reaction. I'm not sure how to fix either of these issues, so goodbye AI generated content.</p>
            <p>I promised the Lancer community something. I will deliver on it, even if they don't remember. The Union will be torn apart by its internal and external enemies before I fail to fufill my promise.</p>
            
            A web <span><a href="/src/pages/software-projects/Digital-Lancer-Tool/Digital Lancer Tool Build Web/index.html">build</a></span> to try and play. 

            A link to the repository containing the latest stable <span><a href="/src/pages/software-projects/Digital-Lancer-Tool/Digital Lancer Tool Build Web/index.html">builds.</a></span>
        </details>
    )
}