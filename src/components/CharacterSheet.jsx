import PersonalInformation from "./CharacterSheet/PersonalInformation"
import Skills from "./CharacterSheet/Skills"
import Hobbies from "./CharacterSheet/Hobbies"
import StatBlock from "./CharacterSheet/StatBlock"
import Qualifications from "./CharacterSheet/Qualifications"

export default function CharacterSheet() {
    return (
        <main>
            <PersonalInformation />
            <div className="horizontal-flex">
                <StatBlock />
                <Qualifications />
            </div>
            <Skills />
            <Hobbies />
        </main>
    )
}