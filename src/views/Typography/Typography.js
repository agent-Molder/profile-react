import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Mica Molder</h4>
        <p className={classes.cardCategoryWhite}>
          Writer extraordinaire
        </p>
      </CardHeader>
      <CardBody>
        
          <h1>Writing: Sci Fi, Fantasy, and general work</h1>
          <h2>This will, eventually, be the place to find my writing.</h2>
          <Quote
            text="To live is to be marked. To live is to change, to acquire the words of a story, and that is the only celebration we mortals really know. In perfect stillness, frankly, I've only found sorrow."
            author="Barbara Kingsolver, The Poisonwood Bible"
          />
          <div className={classes.typo}>                  
          <div className={classes.note}>Current works</div>


                      <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Summary", "Progress"]}
              tableData={[
                ["Infinite Vol I", "SciFi - Biopunk", "100%"],
                ["Infinite Vol II", "SciFi - Biopunk", "10%"],
                ["Finite", "SciFi - Western", "30%"],
                ["The Moon Crown", "Fantasy - Horror", "40%"],
                ["We Woke the Dead", "Fantasy - Horror", "30%"]
              ]}
            />
        </div>        
      </CardBody>
    </Card>
  );
}
