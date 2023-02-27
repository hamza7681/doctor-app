import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import tw from "twin.macro";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./styles.css";

const SimpleAccordion = ({ name, dilivered, payment, date }) => {
  const [checkedState, setcheckedState] = React.useState(false);
  const [expandedState, setexpandedState] = React.useState(false);

  return (
    <div>
      <Accordion expanded={expandedState}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Cont>
            <CheckBoxSection className="z-50">
              <Checkbox
                color="primary"
                size="small"
                checked={checkedState}
                onChange={() => setcheckedState(!checkedState)}
              />
              <PersonOutlineIcon
                className="!hidden xl:inline-flex"
                fontSize="small"
              />
              <span className="line-clamp-2 text-sm xl:text-lg">
                {name && name}
              </span>
            </CheckBoxSection>
            <StatusSection>
              {dilivered ? (
                <FiberManualRecordIcon
                  className="icon text-green-400 !text-[1rem]"
                  fontSize="small"
                />
              ) : (
                <FiberManualRecordIcon
                  className="icon text-red-400 !text-[1rem]"
                  fontSize="small"
                />
              )}
              <span>dilivered</span>
            </StatusSection>
            <PaymentSection>
              <h5 className="font-bold tracking-widest text-sm xl:text-lg">
                £{payment && payment} COD
              </h5>
            </PaymentSection>
            <OrderDate>
              <h5 className="text-center text-sm xl:text-lg">{date && date}</h5>
            </OrderDate>
            <IconsContainer>
              <IconButton onClick={() => setexpandedState(!expandedState)}>
                {expandedState ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </IconsContainer>
          </Cont>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const IconsContainer = styled.div`
  ${tw`  xl:flex-1 flex justify-end
flex-[.1]
`}
`;
const OrderDate = styled.div`
  ${tw` xl:flex-1 flex items-center justify-center
flex-[0.2]
`}
`;
const PaymentSection = styled.div`
  ${tw`  xl:flex-1 flex items-center justify-center
flex-[0.2]
`}
`;

const StatusSection = styled.div`
  ${tw`  xl:!flex-1 flex flex-col lg:flex-row  items-center justify-center
flex-[0.2]
`}
  @media only screen and (max-width: 451px) {
    display: flex;
    span {
      display: none;
    }
  }
`;
const CheckBoxSection = styled.div`
  ${tw`  xl:flex-1 h-full
flex items-center gap-x-2
flex-[0.3]
`}
`;
const Cont = styled.div`
  ${tw`w-full h-full  flex items-center bg-blue-50`}
`;

export default SimpleAccordion;
