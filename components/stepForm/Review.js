import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3 className="mb-8 text-center text-4xl font-bold">Review</h3>
      <RenderAccordion  summary="Names" go={ go } details={[
        { 'Город': address },
        { 'Район': city },
        { 'Улица': state },
        { 'Почта индекс': zip },
        { 'Whatsapp номер': phone },
        { 'Email': email },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => print()}
      >
        Whatsapp pdf
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <div className="text-xl max-w-sm border-4 border-black rounded-lg p-1">
    <AccordionDetail>
      <div className="flex flex-col gap-2 px-2 text-md font-serif">
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <div key={index}>{`${objKey}:`}<div className="text-red-500">{`${objValue}`}</div></div>

        }) }
        
      </div>
    </AccordionDetail>
  </div>
)