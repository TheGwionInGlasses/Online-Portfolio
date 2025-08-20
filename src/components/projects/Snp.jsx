export default function Snp() {
    return (
        <details className="project-details" id="snp">

            <summary>Python - Single Nucleotide Polymorphism Finder</summary>

            <p>The single nucleotide polymorphism finder is a python script that can be run from the terminal. This script is a portion of my coursework submitted for my computational bioinformatics module at Aberystwyth University.</p>
            <p>The function of this script is to take two text files containing related gene sequences and find locations of nucleotide polymorphisms in supposedly related Open Reading Frames. The script, for simplicity, assumes that the longest open reading frame on the referencce and variance genes are related. However, the argparse library haas been used to enable an optional feature where the reference open reading frame can be compared with a sub sequence from approximately the same location on the variance.</p>
            <p>This script was just a bit of fun to mess around with. It uses my implementation of the Levenshtein algorithm, an algorithm used professionally for this purpose. Why re-invent the wheel after all.</p>
            <p>My project was submitted alongside a mock research grant application for the splicing of tomatoes and potatoes to create the ultimate lifeform. Somehow, I got a first despite my funny attempt at self-sabotage.</p>
            
            <span><a href="https://github.com/TheGwionInGlasses/SNP-Detector">The project repository.</a></span>  
        </details>
    )
}