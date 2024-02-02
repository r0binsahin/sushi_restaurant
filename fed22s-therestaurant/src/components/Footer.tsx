import { FooterStyled } from './styled/FooterStyled';
import { UL } from './styled/Nav';

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <UL flexdirection='column' fontSize='1.5rem'>
          <li>Sushiköket</li>
          <li>telefon: 08-092773</li>
          <li>epost: sushiköket@mat.se</li>
          <li>adress: sushivägen 1, 11123 Stockholm</li>
        </UL>
      </FooterStyled>
    </>
  );
};
