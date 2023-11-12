import ResourceList from 'components/ResourceList'
import S from 'style/styled'

function App() {
  return (
    <S.Container>
      <S.Aside>
        <S.AsideTop>
          <S.Button>URL 추가</S.Button>
          <S.Button>이미지 추가</S.Button>
        </S.AsideTop>

        <ResourceList />
      </S.Aside>
    </S.Container>
  )
}

export default App
