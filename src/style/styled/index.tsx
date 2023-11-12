import palette from 'style/palette'
import { styled, css } from 'styled-components'

const ShadowTop = styled.div`
  height: 50px;
  background-color: ${palette.gray_100};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  background-color: ${palette.gray_97};
  border: 1px solid ${palette.system_blue};
  border-radius: 3px;
  font-size: 14px;
`

const S = {
  Aside: styled.aside`
    width: 280px;
    height: 100%;
    border-right: 1px solid #c4c4c4;
  `,
  AsideTop: styled(ShadowTop)`
    display: flex;
    gap: 10px;
    padding: 10px;
  `,
  Button: styled.button`
    background-color: ${palette.gray_100};
    width: 100%;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid ${palette.gray_90};
    font-size: 12px;
    transition: 0.21s;

    &:hover {
      background-color: ${palette.gray_90};
    }
  `,
  Container: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${palette.gray_97};
  `,
  IconButton: styled.button`
    transition: 0.21s;
    border-radius: 6px;

    &:hover {
      background-color: #ccc;
    }
  `,
  ResourceItem: styled.li<{ active?: boolean }>`
    height: 90px;
    background-color: ${palette.gray_100};
    padding: 10px;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.21s;
    outline: 1px solid transparent;

    &:hover {
      outline-color: #ccc;
    }

    ${(props) =>
      props.active &&
      css`
        outline-color: ${palette.system_blue} !important;
      `}
  `,
  ResourceItemTop: styled.p`
    font-size: 14px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
  ResourceItemBottom: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `,
  ResourceList: styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    padding: 10px;
    max-height: calc(100% - 50px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Viewer: styled.main`
    width: calc(100% - 280px);
    height: 100%;
    background-color: ${palette.gray_100};
  `,
  ViewerTop: styled(ShadowTop)`
    padding: 16px 15px 15px 17px;
    background-color: ${palette.gray_100};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ViewerTitle: styled.p`
    font-size: 14px;
    width: calc(100% - 29px);

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
  `,
  ViewerWebView: styled.iframe`
    width: 100%;
    height: calc(100% - 50px);
  `,
  ViewerImageContainer: styled.div`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      max-width: 100%;
      max-height: 100%;
    }
  `,
  UrlAddButtonWrapper: styled.div`
    position: relative;
    width: 100%;
  `,
  Input,
  EditInput: styled(Input)`
    width: 250px;
    transform: translate(-8px, -8px);
  `,
  UrlInputWrapper: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 260px;
    transform: translateY(2px);
    background-color: ${palette.gray_100};
    border: 1px solid ${palette.gray_90};
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 5px;
  `,
} as const

export default S
