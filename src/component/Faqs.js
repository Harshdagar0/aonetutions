// src/Faqs.js
import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

import faqsData from '../assests/faqs.json';

export default function Faqs() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <h3 className='text-blue-900 text-center text-xl mt-10 mb-3 md:text-5xl font-semibold'>FAQs</h3>
      {faqsData.faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleExpansion(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Fade in={expandedIndex === index} timeout={400}>
              <Typography>{faq.answer}</Typography>
            </Fade>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
