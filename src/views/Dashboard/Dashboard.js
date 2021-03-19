import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Person from "@material-ui/icons/PersonAdd";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>emoji_people</Icon>
              </CardIcon>
              <h3 className={classes.cardCategory}>Mica Molder</h3>
              <p className={classes.cardTitle}>
                Hey, if you're here, you probably want to know a little bit about me. I'm a Full Stack Engineer currently working at 1Password. I'm all about making sure I help my team out however I can, but in my time away from work, I'm your quintessential nerd.
              </p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>                
                <a href="https://www.linkedin.com/in/mmolder/" onClick={e => e.preventDefault()}>
                  LinkedIn
                </a>
              </div>
            </CardFooter>
          </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>loyalty</Icon>
              </CardIcon>
              <h3 className={classes.cardCategory}>Hobbies</h3>
              <p className={classes.cardTitle}>
                Video games, creating video games, programming, anime, plain old tv (With a surname like mine, you'd better believe I grew up on X-Files). I'm majorly into all of it. I'm even a bit of a music geek. Aside from that, I'm big on crafts and like to sew and draw when I'm not in front of a screen.
              </p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>                
                <a href="https://www.instagram.com/ufonotation/" onClick={e => e.preventDefault()}>
                  Instagram - Photography                  
                </a> - - - 
                <a href="https://www.instagram.com/hallowedmallow/" onClick={e => e.preventDefault()}>
                Instagram - Art </a> - - -  
                <a href="https://brackettobracket.wordpress.com/" onClick={e => e.preventDefault()}>
              Blog</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>GitHub & GitLab Progress</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />
                </span>{" "}
                Constantly growing, see more <a href="https://github.com/agent-Molder">here</a>.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Skills</h4>
              <p className={classes.cardCategory}>I've been a Full Stack Engineer for around 3 years, but my programming journey started 8 years ago.</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Skill Breakdown:"
            headerColor="rose"
            tabs={[
              {
                tabName: "Languages",
                tabIcon: BugReport,
                tabContent: (
             <Table
                tableHeaderColor="warning"
                tableHead={["Level","Name"]}
                tableData={[
                  ["Proficient", "Java"],
                  ["Use at work","JSON, ReactJS, RESTful APIs, HTML, CSS, Gitlab, Github, Docker, Kubernetes, Various Linters"],
                  ["Use outside work","AJAX, Python, C#, Go, jQuery, Tomcat, Maven, JSP, JSTL, JDBS, BCrypt, MySQL, Spring Framework, Spring Core, Spring Boot, Spring DI, Spring Forms, Spring Security, JIRA, Crucible, Wireframes, Class and Data Modeling"],
                  ["Familiar with", "YAML, Angular, Kotlin"]
                ]}
              />
                )
              },
              {
                tabName: "Web",
                tabIcon: Code,
                tabContent: (
             <Table
                tableHeaderColor="warning"
                tableHead={["Subset", "Description"]}
                tableData={[
                  ["Front end", "Works with HTML and SCSS to create engaging sites and pages that return leads, all while making sure to build mobile-first"],
                  ["Back end","Tinkers with Typescript and Java to retrieve and use information passed to site"],
                  ["TDD","Writes code with unit testing in mind"],
                  ["TDD and MVC", "Uses Model View Controller as a guide for creating responsive, efficient sites"]
                ]}
              />
                )
              },
              {
                tabName: "Data",
                tabIcon: Cloud,
                tabContent: (
             <Table
                tableHeaderColor="warning"
                tableHead={["Subset", "Description"]}
                tableData={[
                  ["Data Transfer Objects", "Models and writes DTOs for use within Java-based Web Applications."],
                  ["Data Access Objects", "Models, writes, and implements DAOs to retriece information from DTOs"],
                  ["Databases", "Creates and maintains datases to read, write, and delete from/to"],
                  ["RESTful APIs", "Uses APIs to communicate to DAOs and ultimately pass information from the User to the database."]
                ]}
              />
                )
              },
                            {
                tabName: "Soft Skills",
                tabIcon: Person,
                tabContent: (
             <Table
                tableHeaderColor="warning"
                tableHead={["Qualities", "Description"]}
                tableData={[
                  ["Charismatic","While I'm a shy person, being on a team brings out the best in me! I love to work with others, take in their feedback, and look to them for inspiration on what I can do better."],
                  ["Disciplined","I'm also resilient on my own. I squash bugs and code as much as I can, as it's a true love of mine. I'm pretty tenacious in general -- I even finished writing a 100k+ word novel back in 2017!"],
                  ["Curious","I seriously enjoy learning. I'll take a stab at any problem put in front of me, research the heck out of it, and always try to ask the right questions so I don't waste time mulling over things that may not be clear at first."],
                  ["Caring", "Ultimately, I want to do my best to help others. I try to be there for my team at all times, and want to do what I can not only for the sake of my team, but to better our work overall as a team."]
                ]}
              />
                )
              }

            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Jobs</h4>
              <p className={classes.cardCategoryWhite}>
                My current and past work experience
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Date", "Company", "Title"]}
                tableData={[
                  ["March 2019 - Current", "1Password", "Web Developer"],
                  ["Jan 2019 - March 2019", "The Coding Space", "Front-End Instructor"],
                  ["May 2018 - Jan 2019", "The Software Guild", "Java Associate"],
                  ["Jan 2017 - May 2018", "Freelance", "Web Developer and Designer"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
