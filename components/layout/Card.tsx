import styled from "@emotion/native";

const Card = styled.View`
  display: flex;
  background-color: ${(props) => props.theme.colors.cardBackgroundColor};
  padding: 16px;
  gap: 20px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

export default Card;
