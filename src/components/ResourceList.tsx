import { Fragment } from 'react'
import useResourceStore from 'state/useResourceStore'
import S from 'style/styled'
import ImageResourceItem from './ImageResourceItem'
import UrlResourceItem from './UrlResourceItem'

function ResourceList() {
  const resources = useResourceStore((state) => state.resources)

  return (
    <S.ResourceList>
      {resources.map((resource) => (
        <Fragment key={resource.id}>
          {resource.type === 'url' ? (
            <UrlResourceItem {...resource} />
          ) : (
            <ImageResourceItem {...resource} />
          )}
        </Fragment>
      ))}
    </S.ResourceList>
  )
}

export default ResourceList
