export default function Skills() {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Skills</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Software Developemnt</td>
                    <td>
                        <p>I have a year of experience at UKAEA, during which I managed the Irradiated Material Library project. This was a fullstack web application designed to function as a catalouge of available sample data for collaborating researchers.</p>
                        <p>Additionally, I have experience working with Large Language Models, training Machine Learning models, and creating solvers for NP class problems through my study at Aberystwyth University.</p>
                    </td>
                </tr>
                <tr>
                    <td>Test Automation</td>
                    <td>
                        <p>I have experience setting up smoke tests for projects I worked on at UKAEA. Additionally, I have some experience with manual testing through enthusiastically volunteering to offer peer reviews for new features being added to projects ongoing in my team.</p>
                    </td>
                </tr>
                <tr>
                    <td>DevOps</td>
                    <td>
                        <p>Two tasks relating to DevOps were the expansion of monitoring coverage in a new network partition and the updating of depreciated software to its latest longterm support version in order to setup single sign on authentication on that service.</p>
                        <p>In order to ensure the latest configurations of the monitoring nodes were used, I setup a pipeline to containerise these services and push the latest configuration to the monitored nodes.</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}