import styled from "@emotion/native";

const SubHeader = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export default SubHeader;
