// material
import { Icon } from '@iconify/react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
//
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { Block } from 'components/FormField/Block';

// ----------------------------------------------------------------------

type CardAccordionLandingProps = {
  array: any;
  title: string;
};

export default function CardAccordionLanding({ array, title }: CardAccordionLandingProps) {
  return (
    <Block title={title} sx={{ mb: 5 }}>
      {array?.map((accordion, index) => (
        <Accordion key={accordion.value}>
          <AccordionSummary
            expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Block>
  );
}
