import { ImgHTMLAttributes } from 'react'
import palette from 'style/palette'
import { styled } from 'styled-components'
import ShadowTop from './ShadowTop'

function Viewer(props: React.HTMLAttributes<HTMLElement>) {
  return <StyledViewer {...props} />
}

const StyledViewer = styled.main`
  width: calc(100% - 280px);
  height: 100%;
  background-color: ${palette.gray_100};
`

Viewer.Top = styled(ShadowTop)`
  padding: 16px 15px 15px 17px;
  background-color: ${palette.gray_100};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Viewer.Title = styled.p`
  font-size: 14px;
  width: calc(100% - 29px);

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
`

Viewer.WebView = styled.iframe`
  width: 100%;
  height: calc(100% - 50px);
`

const StyledImageViewerContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

Viewer.ImageView = function (props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <StyledImageViewerContainer>
      <StyledImage {...props} />
    </StyledImageViewerContainer>
  )
}

export default Viewer
