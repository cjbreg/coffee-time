import styled from "@emotion/native";

const View = styled.SafeAreaView`
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  flex: 1;
`;

export default View;
