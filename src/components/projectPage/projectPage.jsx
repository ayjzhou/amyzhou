import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./projectPage.css";
import banner_LD from "../../assets/mockup final/banner_LD.jpg";
import Particles from "react-particles-js";
import particlesParams from "../mainPage/particle";
import Text from "./text";
import "./text.css";
import search1 from "../../assets/mockup final/s1.jpg";
import search2 from "../../assets/mockup final/s2.jpg";
import ep from "../../assets/mockup final/empathy map.jpg";
import jm from "../../assets/mockup final/jmap.png";
import idea from "../../assets/mockup final/feature ideation.svg";
import uf from "../../assets/mockup final/uf.png";
import rough from "../../assets/mockup final/rough.jpg";
import wf1 from  "../../assets/mockup final/wf1.jpg";
import wf2 from  "../../assets/mockup final/wf2.jpg";
import wf3 from  "../../assets/mockup final/wf3.jpg";
import chat1 from  "../../assets/mockup final/f_aichat1.png";
import chat2 from  "../../assets/mockup final/f_aichat2.png";
import chat3 from  "../../assets/mockup final/f_aichat3.png";
import chat4 from  "../../assets/mockup final/f_aichat4.png";
import sugg1 from  "../../assets/mockup final/f_sugg1a.png";
import sugg2 from  "../../assets/mockup final/f_sugg1b.png";
import sugg3 from  "../../assets/mockup final/f_sugg1c.png";
import sugg4 from  "../../assets/mockup final/f_sugg1d.png";
import milk1 from  "../../assets/mockup final/f_milk1.png";
import milk2 from  "../../assets/mockup final/f_milk2.png";
import ldbanner from "../../assets/mockup final/ldbanner.svg";
import ProjectInfo from "./projectInfo"


const InsightUnorderedList = () => {
    return(
        <ul style={{ padding: "15px"}}>
            <li>83% of our users said they like to shop with their eyes</li>
            <li>33% of our users search and filter based on identifying the brand they usually purchase</li>
            <li>25% of our users have tried shopping for groceries online</li>
            <li>Users would like to have information with regards to the expiry dates</li>
            <li>When it comes to fruit and produce, users are worried about the quality of their products when shopping online</li>
        </ul>
    );
};
const KpiOrderedList = () => {
    return(
      <ol style={{ padding: "15px"}}>
          <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
          <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
          <li>Decreased duration spent on platform within search functionality</li>
          <li>Decreased number of search terms within a session</li>
      </ol>
    );
};

const TakeawaysUnorderedList = () => {
    return(
        <ol style={{ padding: "15px"}}>
            <li>When getting alignment from stakeholders; it is always good to demonstrate that you've done a thorough analysis and that you've considered different options before narrowing down to one.</li>
            <li>Attaching key metrics into hypothesis that are comparative, ratio and behavior changing.</li>
            <li>You will always find more problems you're able to fix.e</li>
            <li>Fall in love with the problem not the solution</li>
        </ol>
    );
};


class ProjectPage extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            {"title": "Duration", "content": "8 weeks"},
            {"title": "Role", "content": "Interaction Design, Wireframes, High Fidelity, User Journey Mapping"},
            {"title": "Team", "content": "Tony Cheng, William To"},
            {"title": "Tools", "content": "Sketch, Figma, Pen + Paper"},
        ];
    }



    render() {
        return(
            <div>
                <div className="landing" style={{"textAlign": "center"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card style={{display: 'inline-block', width: "50%", cursor: "default"}}>
                        <Card.Img variant="top" src={ldbanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="OVERVIEW"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="PC Express"/></Col>
                        <Col sm={8}><Text content="PC Express is an online grocery click and collect app which allows users to shop from their favorite stores or pick up at convenient locations in the city. Customers can shop at their favorite grocery store online and personal shoppers will fill the order. Currently PC Express is available on both IOS and Android."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="Search"/></Col>
                        <Col sm={8}><Text content="Currently this is what the Search Function looks like on the PC Express App."/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={8}><Card.Img src={search1}/><Card.Img src={search2}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Goal"/></Col>
                        <Col sm={8}><Text content="To help Canadians conveniently pre-order groceries for pick up to save them time in their busy lives."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="RESEARCH"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="User Interviews"/></Col>
                        <Col sm={8}><Text content="We interviewed 12 users in total to identify the pain points our customers encountered when using the Search function on the PC Express app.  After conducting the first few customer interviews, we realized that a significant amount of our interviewees have not used PC Express prior to this study. On that account, we decided to take a different approach to our problem. We determined collectively that our target audience will be first time online grocery shoppers instead. "/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="Some Insights"/></Col>
                        <Col sm={8}>
                            <Text content="">
                                <InsightUnorderedList/>
                            </Text>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="Empathy Map"/></Col>
                        <Col sm={8}><Card.Img src={ep}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="DISCOVERY"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Problem Statement"/></Col>
                        <Col sm={8}><Text content="First time online grocery shoppers struggle with discovering preferred products within the PC Express platform which results in decreased retention and engagement."/></Col>
                    </Row>
                </Container>

                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col sm={4}><Text header="Persona"/></Col>*/}
                {/*        <Col sm={8}><Card.Img src={ep}/></Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Journey Map"/></Col>
                        <Col sm={8}><Card.Img src={jm}/>
                            elaborate
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="IDEATE"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Feature Ideation"/></Col>
                        <Col sm={8}><Card.Img src={idea}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="User Flow"/></Col>
                        <Col sm={8}><Card.Img src={uf}/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="HYPOTHESIS"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="By reducing the amount of time it takes for a new user to find their grocery items, it will result in a higher conversion rate and retention."/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="KPIs for Success"/></Col>
                        <Col sm={8}>

                            <Text content="">
                                <KpiOrderedList/>
                            </Text>
                        </Col>


                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="PROTOTYPE"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Sketches"/></Col>
                        <Col sm={8}><Card.Img src={rough}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Wireframes"/></Col>
                        <Col sm={8}><Card.Img src={wf1}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Card.Img src={wf2}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Card.Img src={wf3}/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="High Fidelity Mockups"/></Col>
                        <Col sm={4}><Card.Img src={sugg1}/></Col>
                        <Col sm={4}><Card.Img src={sugg2}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="Here, we have the user initiating the conversation by asking the AI chatbot for search results of apples. The AI chatbot will then attempt to prompt the user to filter their results by the product searched. Users can then filter and sort based on the suggestions given by the chatbot. "/></Col>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={sugg3}/></Col>
                        <Col sm={4}><Card.Img src={sugg4}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="AI chatbot will narrow down results based on filter, then return cards which allow the customers to shop with their eyes. We decided on a carousel scroll. Lastly, users can now click on the card for more information about the product. We included an add button to allow users to easily add the product into their shopping cart."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={chat1}/></Col>
                        <Col sm={4}><Card.Img src={chat2}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={chat3}/></Col>
                        <Col sm={4}><Card.Img src={chat4}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="AI chatbot simplifies the pickup or delivery process with suggested results based on given information."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={milk1}/></Col>
                        <Col sm={4}><Card.Img src={milk2}/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="Users also have the option of asking the AI chatbot to return search results given a picture of their search. AI chatbot will then return the actual product the user is looking for."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="CONCLUSION"/></Col>
                        <Col sm={8}><Text content="By the end of the eight weeks, we presented our solution to a panel of product managers in Toronto. We were awarded the most imaginative solution out of twelve teams. We had some great feedback from the judges that we can incorporate into the case later on. Overall, this experience has helped me grow as a designer and product manager. I was able to implement product thinking when coming up with solutions to our problem. "/></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="Key Takeaways"/></Col>
                        <Col sm={8}>
                            <Text content="">
                                <TakeawaysUnorderedList/>
                            </Text>
                        </Col>
                    </Row>
                </Container>
                        {/*<Col sm={8}><Text content="1. When getting alignment from stakeholders; it is always good to demonstrate that you've done a thorough analysis and that you've considered different options before narrowing down to one."/></Col>*/}
                        {/*<Col sm={4}><Text title=""/></Col>*/}
                        {/*<Col sm={8}><Text content="2. Attaching key metrics into hypothesis that are comparative, ratio and behavior changing."/></Col>*/}
                        {/*<Col sm={4}><Text title=""/></Col>*/}
                        {/*<Col sm={8}> <Text content="3. You will always find more problems you're able to fix."/></Col>*/}
                        {/*<Col sm={4}><Text title=""/></Col>*/}
                        {/*<Col sm={8}> <Text content="4. Fall in love with the problem not the solution."/></Col>*/}
                    {/*</Row>*/}
                {/*</Container>*/}
            </div>

        )
    }
}

export default ProjectPage;