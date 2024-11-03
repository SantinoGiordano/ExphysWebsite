import "../styles/text.css"


export  function Referrals(){

const handleChangeJosh = () =>{
    window.open("https://www.joshlipkacycling.com/coaching", "_blank");
}
const handleChangeMotion = () =>{
    window.open("http://energyinmotionpilates.com/", "_blank");
}
const handleChange413 = () =>{
    window.open("https://413cycling.com/lander", "_blank");
}
const handleChangeLee = () =>{
    window.open("https://leebodyworks.com/", "_blank");
}
const handleChangeRecovery = () =>{
    window.open("https://www.therecoveryroom.biz/", "_blank");
}


    return(
        <>
        <div id="Referrals">
            <h1 className="title">Our Trusted Referrals</h1><hr/>
            <img 
            src="Refferals/josh.png"
            className="referralsImages"
            onClick={handleChangeJosh}
            />
                <p>Josh Lipka Cycling</p>
             <img 
            src="Refferals/in motion.png"
            className="referralsImages"
            onClick={handleChangeMotion}
            />
                <p>Energy In Motion</p>
             <img 
            src="Refferals/413Cycling.jpg"
            className="referralsImages"
            onClick={handleChange413}
            />
                <p>413 Cycling</p>
             <img 
            src="Refferals/leeBodyWorks.jpg"
            className="referralsImages"
            onClick={handleChangeLee}
            />
                <p>Lee Body Works</p>
             <img 
            src="Refferals/recoveryRoomLogo.jpg"
            className="referralsImages"
            onClick={handleChangeRecovery}
            />
                <p>Recovery Room</p>


        </div>
        </>
    )
}