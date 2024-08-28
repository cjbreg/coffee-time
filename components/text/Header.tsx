import styled from "@emotion/native";

const Header = styled.Text`
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export default Header;
