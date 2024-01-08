import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: var(--color-grey-0);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-400);
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
