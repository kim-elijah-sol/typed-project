import useResourceStore from 'state/useResourceStore'
import S from 'style/styled'
import { shallow } from 'zustand/shallow'
import { TypedIcon } from 'typed-design-system'

function Viewer() {
  const { resources, selectedResourceId, setSelectedResourceId } =
    useResourceStore(
      (state) => ({
        resources: state.resources,
        selectedResourceId: state.selectedResourceId,
        setSelectedResourceId: state.setSelectedResourceId,
      }),
      shallow
    )

  const selectedResource = resources.find(
    (resource) => resource.id === selectedResourceId
  )

  if (!selectedResource) return null

  return (
    <S.Viewer>
      <S.ViewerTop>
        <S.ViewerTitle>
          {selectedResource.type === 'url'
            ? selectedResource.url
            : selectedResource.fileName}
        </S.ViewerTitle>

        <S.IconButton onClick={() => setSelectedResourceId(null)}>
          <TypedIcon icon='close_19' size={19} />
        </S.IconButton>
      </S.ViewerTop>

      {selectedResource.type === 'url' ? (
        <S.ViewerWebView src={selectedResource.url} frameBorder={0} />
      ) : (
        <S.ViewerImageContainer>
          <img src={selectedResource.src} alt='' />
        </S.ViewerImageContainer>
      )}
    </S.Viewer>
  )
}

export default Viewer
