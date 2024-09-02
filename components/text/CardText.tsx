import styled from "@emotion/native";

const CardText = styled.Text`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export default CardText;
