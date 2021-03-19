import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Full Stack Engineer</h6>
              <h4 className={classes.cardTitle}>Mica Molder</h4>
              <Table
              tableHeaderColor="primary"
              tableHead={["Hobbies", "Books", "Movies", "Games"]}
              tableData={[
                ["Sewing", "Ubik", "Gone Girl", "Portal 1 & 2"],
                ["Plant care", "The Poisonwood Bible", "Inception", "Half-Life"],
                ["Cooking", "Neuromancer", "Lord of The Rings", "Animal Crossing"],
                ["Painting", "Cat's Eye", "Eternal Sunshine of The Spotless Mind", "The Witcher"],
                ["Photography", "Gone Girl", "Kiki's Delivery Service", "Final Fantasy"],
              ]}
            />
              <a href="https://www.linkedin.com/in/mmolder/"><Button color="primary" round>
                Follow
              </Button></a>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
