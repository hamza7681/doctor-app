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
import AddImages from "./AddImages";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";
import DeleteProductModal from "./DeleteProductModal";

const SimpleAccordion = ({ productName, sku, price, qtyLeft,id }) => {
  const [checkedState, setcheckedState] = React.useState(false);
  const [expandedState, setexpandedState] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

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
                {productName && productName}
              </span>
            </CheckBoxSection>
            <UseridSection>
              <h5 className="font-bold tracking-widest text-sm xl:text-lg">
                {sku && sku}
              </h5>
            </UseridSection>
            <PaymentSection>
              <h5 className="font-bold tracking-widest text-sm xl:text-lg">
                ${price && price}
              </h5>
            </PaymentSection>
            <OrderDate>
              <h5 className="text-center text-sm xl:text-lg">
                {qtyLeft && qtyLeft}
              </h5>
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
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <span className="med_formula">Medicine Formula:</span>
                  <span className="formula">omeprazole</span>
                </div>
                <div className="col-md-5">
                  <span className="product_sold"> Product Sold:</span>
                  <span className="sold">600 packs</span>
                </div>
                <div className="col-md-2">
                  <ButtonGroup size="sm">
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/edit-product/${id}`)}
                    >
                      Edit
                    </Button>
                    <Button variant="success">View</Button>
                    <Button variant="danger" onClick={() => setModalShow(true)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                  <DeleteProductModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <AddImages />
            </div>
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
const UseridSection = styled.div`
  ${tw`  xl:flex-1 flex items-center justify-center
flex-[0.2]
`}
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
