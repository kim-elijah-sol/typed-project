import { styled } from 'styled-components'

const ResourceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-height: calc(100% - 50px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default ResourceList
