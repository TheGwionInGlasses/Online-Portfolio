export default function Dlt() {
    return (
        <details className="project-details" id="MarkovChainText">

            <summary>Python - Text Markov Chain</summary>

            <p>This project is based on Markov's proof that the law of big numbers can occur in systems which do not have mathematically independant factors. The script determines the probability of landing on a vowel or a consonant without counting the number of vowel and consonants in the text. Instead, it counts the transitions between vowels and consonants in order to produce a directed graph based on a transition matrix. The chain is a timeline of state transitions that can be used to predict the outcome of a randomly chosen character in the sample text being a vowel or a consonant.</p>
            <p>Since the Markov chain can predict the outcome of systems containing dependant variables, algorithms derived from this proof can be adapted to solve many practical real world problems such as weather forecasting, page ranking, and digital twin simulations.</p>
            <p>The link to this project is <a href="https://github.com/TheGwionInGlasses/Text-Markov-Chain">here.</a> Feel free to fork it or make any suggestions.</p>
        </details>
    )
}