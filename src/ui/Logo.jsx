import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const LogoHeading = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  margin-top: -1rem;
  letter-spacing: 1px;
  color: var(--color-silver-700);
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
      <LogoHeading as="h3">TRANQUIL PEAKS</LogoHeading>
    </StyledLogo>
  );
}

export default Logo;
