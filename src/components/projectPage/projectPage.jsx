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
import search1 from "../../assets/mockup final/search1.svg";
import search2 from "../../assets/mockup final/search2.svg";
import ep from "../../assets/mockup final/empathy map.jpg";
import jm from "../../assets/mockup final/jmap.png";
import idea from "../../assets/mockup final/feature ideation.svg";
import uf from "../../assets/mockup final/uf.png";
import rough from "../../assets/mockup final/rough.jpg";
import wf1 from  "../../assets/mockup final/w1.svg";
import wf2 from  "../../assets/mockup final/w2.svg";
import wf3 from  "../../assets/mockup final/w3.svg";
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
        <ul style={{ paddingLeft: "15px"}}>
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
      <ol style={{ paddingLeft: "15px"}}>
          <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
          <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
          <li>Decreased duration spent on platform within search functionality</li>
          <li>Decreased number of search terms within a session</li>
      </ol>
    );
};

const TakeawaysUnorderedList = () => {
    return(
        <ol style={{ paddingLeft: "15px"}}>
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
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
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
                        <Col sm={4}><Text header="Prompt"/></Col>
                        <Col sm={8}><Text content="Our task was to implement design thinking and product management methodologies to enhance a specific feature in a popular mobile app. Our group chose PC Express by Loblaws Digital."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="PC Express"/></Col>
                        <Col sm={8}><Text content="PC Express is an online grocery click and collect app which allows users to shop and pick up their groceries from convenient locations in the city. Customers can shop at their favourite grocery store online and personal shoppers will fill the order. PC Express is currently available on both IOS and Android."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text header="Search"/></Col>
                        <Col sm={8}><Text content="This is what the Search Function looks like on the PC Express App."/></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}></Col>


                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={search1}/>
                            </div>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={search2}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Goal"/></Col>
                        <Col sm={8} >
                            <div  style={{fontSize: "1.5rem"}}>
                            <Text statement={true} content="To help Canadians conveniently pre-order groceries for pick up to save them time in their busy lives." />
                            </div>
                            </Col>
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
                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Empathy Map"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ep}/>
                            </div>
                            <div style={{ marginBottom: "4rem"}}>
                                We define our user to be tech savvy and environmentally conscious. They work in the city and are making > $200K household income.
                            </div>
                            </Col>
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
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem", fontStyle: "italic"}}>
                            <Text statement={true} content="First time online grocery shoppers struggle with discovering preferred products within the PC Express platform which results in decreased retention and engagement."/>
                            </div>
                            </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Journey Map"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={jm} className="journey-map"/>
                            </div>
                            <div style={{ marginBottom: "4rem"}}>
                                Our user begins their journey by being aware. The users are aware they are out of food and are unsure how much they need for the week. They go through the discovery phase where they attempt to look for grocery deals, but is overwhelmed by the amount of information given. In the purchase stage, users would like to checkout as fast as possible but still ensuring that their purchases meet their expectation.
                          {/*Our user goes through four stages in their journey. Awareness, Discovery, Purchase and Follow-up. */}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="IDEATE"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Feature Ideation"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={idea}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="User Flow"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={uf}/>
                            </div>
                            <div style={{ marginBottom: "4rem"}}>
                            The end goal is for the users to be at the checkout stage.
                            </div>
                            </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col sm={4}><Text title="HYPOTHESIS"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}>
                            <Text header="Our Hypothesis"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="By reducing the amount of time it takes for a new user to find their grocery items, it will result in a higher conversion rate and retention."/>
                            </div>
                            </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
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
                        <Col sm={4}><Text title="DESIGN"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Sketches"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={rough}/>
                            </div>
                            </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Wireframes"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={wf1}/>
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={wf2}/>
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={wf3}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="High Fidelity Mockups"/></Col>
                        <Col sm={4}><Card.Img src={sugg1} className="fidelity-mockups"/></Col>
                        <Col sm={4}><Card.Img src={sugg2} className="fidelity-mockups"/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="Here, we have the user initiating the conversation by asking the AI chatbot for search results of apples. The AI chatbot will then attempt to prompt the user to filter their results by the product searched. Users can then filter and sort based on the suggestions given by the chatbot. "/></Col>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={sugg3} className="fidelity-mockups"/></Col>
                        <Col sm={4}><Card.Img src={sugg4} className="fidelity-mockups"/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="AI chatbot will narrow down results based on filter, then return cards which allow the customers to shop with their eyes. We decided on a carousel scroll. Lastly, users can now click on the card for more information about the product. We included an add button to allow users to easily add the product into their shopping cart."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={chat1} className="fidelity-mockups"/></Col>
                        <Col sm={4}><Card.Img src={chat2} className="fidelity-mockups"/></Col>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={chat3} className="fidelity-mockups"/></Col>
                        <Col sm={4}><Card.Img src={chat4} className="fidelity-mockups"/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="AI chatbot simplifies the pickup or delivery process with suggested results based on given information."/></Col>
                    </Row>
                </Container>
                <Container  style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}><Card.Img src={milk1} className="fidelity-mockups"/></Col>
                        <Col sm={4}><Card.Img src={milk2} className="fidelity-mockups"/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}><Text content="Users also have the option of asking the AI chatbot to return search results given a picture of their search. AI chatbot will then return the actual product the user is looking for."/></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="REFLECTION"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                        <Col sm={4}><Text header="Conclusion"/></Col>
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
            </div>

        )
    }
}

export default ProjectPage;