import "../styles/text.css";

export function Boxes() {
  return (
    <>
      <h1 id="about" className="title">
        Get To Know Us <hr/>
      </h1>
      <div className="container">
        <div className="box">
          <img className="circle-image" src="jillHeadshot.jpg" draggable="false" height={150}width={150}/>
            Jill is an Exercise Physiologist with a passion for helping others
            achieve their potential in health and fitness. Through her experience
            as an exercise professional, an athlete herself, and a graduate degree
            in Clinical Exercise Physiology, she has found a gap in the fitness
            industry. Understanding an individual’s health, fitness, and
            metabolism should not be reserved for only world class athletes and
            physiology laboratories. She believes in using science-backed, gold
            standard tools to drive exercise programming to maximize one’s efforts
            in fitness and health. Jill’s mission is to bring high quality
            exercise testing and exercise physiology education to Western Mass
            through testing metabolic fitness, aerobic fitness, and body
            composition. This information will bring targeted, individualized
            exercise programs to the clients of ATP.
            <br /><a href="mailto:Jill@ATP-ExPhys.com" className="link-text">
            <b><u>Jill@ATP-ExPhys.com</u></b>
          </a>
        </div>

        
        

        <div className="box">
          <img className="circle-image" src="heatherHeadshot.jpg" draggable="false" height={150} width={150}/>
              Heather is a Master's Level Exercise Physiologist with a desire to
              help others reach their health and fitness goals. She works to educate
              her clients by bridging science and practical application. She enjoys
              leading her clients to that "Aha!" moment. This is the moment when a
              client understands their own fitness and body composition and how
              individualized this is for all of us. Heather's goal is to make this
              testing and information more accessible to the general public at ATP.
              Good aerobic fitness and a healthy body composition are associated
              with longevity and improved quality of life. Having this information
              serves as a basis for individualized goal setting for the clients of
              ATP. 
              <br /><a href="mailto:Heather@ATP-EXPhys.com?subject=Inquiry&body=Hello Heather," className="link-text">
              <b><u>Heather@ATP-EXPhys.com</u></b>
              </a>
        </div>
      </div>
    </>
  );
}
