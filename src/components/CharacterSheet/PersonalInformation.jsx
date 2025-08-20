import imgURL from "/src/assets/idiotwithreactor.jpg"

function CalculateAge() {
    var birthday = new Date("Febuary 23, 1999, 09:00:00 GMT+0000")
    var dateDif = new Date(Date.now() - birthday)
    return <td>Age: {Math.abs(dateDif.getUTCFullYear() - 1970)}</td>
}


export default function PersonalInformation() {
    return (
        <section id="personal-information">
            <img className="icon" alt="A vaguelly human face" src={imgURL}></img>
            <table className="personalInformation">
                <tbody>
                    <tr>
                        <td>Name: Gwion Hughes</td>
                        <CalculateAge />
                        <td>Race: Tall Gnome</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Class: Enjoyer of Cheese</td>
                        <td colSpan={1}>Alignment: Confused Emoji</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}