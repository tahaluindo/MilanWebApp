import React from 'react'
import { Container } from 'react-bootstrap';
import Img from "../components/Image"
import styles from "../css/Team.module.css"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/team/', false, /\.(png|jpe?g|JPG)$/));

function Team() {
  return (
    <Container className={styles.text_center}>
      <div>
        <h3 className={styles.headings}>Overall Coordinator</h3>
        <Img src={images["Devasoorya R_Overall Coordinator.jpg"]} alt="OC" name="Devasoorya R" />
      </div>

      <div>
        <h3 className={styles.text_center, styles.heading_other}>Managers</h3>
        <div>
          <h4 className={styles.headings}>Sponsorship and Finance</h4>
          <div className={styles.flex_arrange}>
            <Img src={images["Adyasa_Finance_Manager.jpg"]} alt="SF1" name="Adyasa M" />
            <Img src={images["Shruti_Finance_Manager.jpg"]} alt="SF2" name="Shruti C" />
            <Img src={images["Rajesh_Sponsorship_Manager.jpg"]} alt="SF3" name="Rajesh K" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Hospitality and Infrastructure</h4>
          <div className={styles.flex_arrange}>
            <Img src={images["Aishwarya_HospiandInfra_Manager.jpg"]} alt="HI1" name="Aishwarya M" />
            <Img src={images["Rohit_HospiInfra_Manager.jpg"]} alt="HI2" name="Rohit R" />
            <Img src={images["Bhargav_HospiInfra_Manager.jpg"]} alt="HI3" name="Bhargav P" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Events and Pronites</h4>
          <div className={styles.flex_arrange}>
            <Img src={images["Tejaswini_Events_Pronites_Manager.jpg"]} alt="EP1" name="Tejaswini A" />
            <Img src={images["SaiAshok_Events_Manager.jpg"]} alt="EP2" name="Ashok S" />
            <Img alt="EP3" name="Vishnu VS" />
            <Img alt="EP4" name="Sandeep K" />
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Creatives and Multimedia</h4>
          <div className={styles.flex_arrange}>
            <Img alt="CM1" name="Saurav M" />
            <Img src={images["Manaal_Creatives_Manager.jpg"]} alt="CM2" name="Manaal R" />
            <Img src={images["K K_Multimedia_Manager.jpg"]} alt="CM3" name="Kishore K" />
          </div>
        </div>
      </div>

      <div>
        <h3 className={styles.text_center, styles.heading_other}>Domain Coordinators</h3>
        <div>
          <h4 className={styles.headings}>Sponsorship and Finance</h4>
          <div className={styles.flex_arrange}>
            <Img alt="SF1" name="Shubhav J" />
            <Img src={images["Minhaz_Sponsorship_Finance_Coordinator.jpg"]} alt="SF2" name="Minhaz N" />
            <Img alt="SF3" name="Adithya N" />
            <Img src={images["Tejasree Gunturu_Finance _ Sponsorship_Coordinator.jpg"]} alt="SF4" name="Tejasree G" />
            <Img src={images["Sohan_Finance_Coordinator.jpg"]} alt="SF5" name="Sohan P" />
          </div>
        </div>
        <div>
          <h4 className={styles.headings}>Hospitality and Infrastructure</h4>
          <div className={styles.flex_arrange}>
            <Img src={images["Stephen_Hospi_Infra_Coordinator.jpg"]} alt="HI1" name="Stephen V" />
            <Img src={images["Syed Saqib Habeeb_Hospi and infra_Coordinator.jpeg"]} alt="HI2" name="Syed S" />
            <Img src={images["Sidhant_HospiInfra_Coordinator.jpg"]} alt="HI3" name="Sidhant R"/>
            <Img src={images["Rishabh_hospi_infra_coordinator.jpg"]} alt="HI4" name="Rishab S" />
            <Img alt="HI5" name="Ekshan R" />
            <Img src={images["Varsha_Hospi and Infra Coordinator.jpeg"]} alt="HI6" name="Varsha B"/>
            <Img src={images["SAIRAJ_HOSPIANDINFRA_COORDINATOR.jpg"]} alt="HI7" name="Sairaj M" />
            <Img src={images["Sreevani_Hospi_Infra_coordinator.jpg"]} alt="HI8" name="Sreevani C" />
            <Img src={images["Jyotshna_Hospi and Infra Coordinator.jpeg"]} alt="HI9" name="Jyotshna K"/>
          </div>
        </div>
        <div>
          <h4 className={styles.headings}>Events and Pronites</h4>
          <div className={styles.flex_arrange}>
            <Img alt="EP1" name="Rohit V" />
            <Img src={images["Rushikesh_events_pronites_coordinator.jpg"]} alt="EP2" name="Rushikesh N" />
            <Img src={images["Ahinraj_events_and_pronites_coordinator.jpg"]} alt="EP3" name="Ahin R"/>
            <Img alt="EP4" name="Nabeel M" />
            <Img src={images["Hadi _eventsandpronites_coordinator.jpg"]} alt="EP5" name="Hadi A" />
            <Img src={images["Adithya Ram_Events_pronites_Coordinator.jpg"]} alt="EP6" name="Adithya R"/>
            <Img alt="EP7" name="Arpit S" />
            <Img src={images["Anshul_events_pronites_coordinator.JPG"]} alt="EP8" name="Anshul G" />
            <Img src={images["VaideshKodi_Eventsandpronites_coord.jpg"]} alt="EP9" name="Vaidesh K"/>
            <Img src={images["Pritee__events _pronite coordinator_.jpg"]} alt="EP10" name="Pritee N" />
            <Img src={images["Yash Rajput_Event_Pronites_Coordinator.JPG"]} alt="EP11" name="Yash R" />
            <Img alt="EP12" name="Pavan B"/>
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Creatives</h4>
          <div className={styles.flex_arrange}>
            <Img src={images["Viren_Creatives_Coordinator.jpeg"]} alt="C1" name="Viren S" />
            <Img src={images["TandleVardhan_Creatives_Coordinator.png"]} alt="C2" name="Tandle V" />
            <Img src={images["Bharadwaja_creatives_coordinator.jpg"]} alt="C3" name="Bharadwaja R" />
            <Img alt="C4" name="Arsalan S"/>
          </div>
        </div>

        <div>
          <h4 className={styles.headings}>Multimedia</h4>
          <div className={styles.flex_arrange}>
            <Img alt="M1" name="Arpita G" />
            <Img src={images["Srilakshmi_multimedia_coordinator.jpg"]} alt="M2" name="Srilakshmi"/>
          </div>
        </div>
        
        <div>
          <h4 className={styles.headings}>Web Dev and Management</h4>
          <div className={styles.flex_arrange}>
            <Img alt="WM1" name="Vishnu VS" />
            <Img src={images["Arun_Web_Coordinator.jpg"]} alt="WM2" name="Arun S" />
            <Img src={images["Jyotshna_Hospi and Infra Coordinator.jpeg"]} alt="WM3" name="Jyotshna K" />
            <Img src={images["TanmayGarg_Web_Coordinator.JPG"]} alt="WM4" name="Tanmay G"/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Team