import styled from 'styled-components';
import * as palette from './colors';

const Description = styled.div`
  color: grey;
  margin-bottom: 5px;
  line-height: 1.2em;
  max-height: ${props => props.expanded ? 'auto' : '3.6em'};
  overflow: hidden;
`;

export default Description;