import styled from "@emotion/native";

const Link = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-decoration: underline ${(props) => props.theme.colors.textPrimary};
`;

export default Link;
