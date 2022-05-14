import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 25%;
  height: 420px;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;