import React from "react";
import styled from "styled-components";
import ThreadCreatorForm from "../components/ThreadCreator/ThreadCreatorForm";

const ThreadCreatorSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const ThreadCreator: React.FC = () => {
  return (
    <ThreadCreatorSection>
      <ThreadCreatorForm />
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
