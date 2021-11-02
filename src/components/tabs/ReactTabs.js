import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography } from "@material-ui/core/";
import UseStyles from "./UseStyles";
import TabPanel from "./TabPanel";

const ReactTabs = ({ head1, head2, desc1, desc2 }) => {
  const classes = UseStyles();
  const [value, setValue] = useState(0);

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label={head1} {...a11yProps(0)} />
        <Tab label={head2} {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography className={classes.fontsize}>
          <div dangerouslySetInnerHTML={{ __html:desc1}} />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={{ __html:desc2}} />
      </TabPanel>
    </div>
  );
};

export default ReactTabs;
