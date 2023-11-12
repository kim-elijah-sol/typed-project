# Solution

## 디자인 컴포넌트 분리

- 파일: [/src/style/styled/index.tsx](/src/style/styled/index.tsx)
- 라이브러리: `styled-components`
- Figma 에 명시된 컴포넌트를 역할 S-dot 컨벤션에 따라 S Object 에 명시해두었습니다.
  <br/>
  이를 통해 namespace 가 겹치는 문제를 해결할 수 있습니다.

## 리소스 상태 설계

- 파일: [/src/state/useResourceStore.ts](/src/state/useResourceStore.ts)
- 라이브러리: `zustand`
- `resources`: 리소스의 배열 값 입니다.
- `addResource`: 리소스를 추가하는 함수입니다.
- `editResource`: 특정 리소스를 수정하는 함수입니다.
- `removeResource`: 특정 리소스를 제거하는 함수입니다.
- `selectedResourceId`: 선택되어 뷰어에 보일 리소스의 id 값입니다.
- `setSelectedResourceId`: 뷰어에 보일 리소르의 id 를 선택할 때 사용하는 함수입니다.

## 리소스 리스트

- 파일: [/src/components/ResourceList.tsx](/src/components/ResourceList.tsx)
- `resources` 를 기반으로 스토어에 저장된 리소스 목록을 렌더링합니다.
- 이 때 데이터를 최신순으로 렌더링하기 위해 `S.ResourceList` 의 `flex-direction` 값이 `column-reverse` 으로 설정 되었습니다.

## URL 리소스 추가

- 파일: [/src/components/UrlAddButton.tsx](/src/components/UrlAddButton.tsx)
- URL 리소스 추가에 필요한 예외 처리 및 유튜브 url 인 경우 embed url 로 변환하는 처리를 API 함수처럼 처리하기 위해 [비동기 함수](/src/remote/createUrlResource.ts)로 만들어 `react-query` 라이브러리의 `useMutation` 으로 처리했습니다.
  <br />
  저장하는 시점은 인풋 필드 밖으로 나왔을 때 인데, 저는 Enter 처리도 필요할 것 같아 이 시점을 포함하는 onBlur, onKeyDown 함수를 묶은 제출 액션 hook 을 [useUserSubmitAction](/src/hooks/useUserSubmitAction.ts) 으로 분리하였습니다. 이는 수정 시에도 필요하기 때문입니다.
  <br />
  이 때 비동기 함수에는 80% 로 성공하는 처리와 300ms ~ 1000ms 의 지연 처리도 포함됩니다.

## 이미지 리소스 추가

- 파일: [/src/components/ImageUploadButton.tsx](/src/components/ImageUploadButton.tsx)
- 이미지 리소스 추가에 필요한 예외 처리 및 base64 변환을 API 함수처럼 처리하기 위해 [비동기 함수](/src/remote/createImageResource.ts)로 만들어 `react-query` 라이브러리의 `useMutation` 으로 처리했습니다.
  이 때 비동기 함수에는 80% 로 성공하는 처리와 300ms ~ 1000ms 의 지연 처리도 포함됩니다.

## URL 리소스 수정

- 파일: [/src/components/UrlResourceItem.tsx](/src/components/UrlResourceItem.tsx)
- 80% 로 성공하는 처리와 300ms ~ 1000ms 의 지연 처리가 제외된 순수히 URL 예외 처리 및 유튜브 url 을 embed url 로 변환하는 처리가 포함된 비동기 함수를 만들어 추가와 마찬가지로 `react-query` 라이브러리의 `useMutation` 으로 처리했습니다.

## 이미지 리소스 수정

- 파일: [/src/components/ImageResourceItem.tsx](/src/components/ImageResourceItem.tsx)
- 80% 로 성공하는 처리와 300ms ~ 1000ms 의 지연 처리가 제외된 순수히 이미지 파일 예외 처리 및 base64로 변환 변환하는 처리가 포함된 비동기 함수를 만들어 추가와 마찬가지로 `react-query` 라이브러리의 `useMutation` 으로 처리했습니다.

## 리소스 삭제

- 파일: [/src/components/UrlResourceItem.tsx](/src/components/UrlResourceItem.tsx)
- 파일: [/src/components/ImageResourceItem.tsx](/src/components/ImageResourceItem.tsx)
- 삭제 버튼 클릭 시 useResourceStore 에 존재하는 removeResource 를 사용하여 리소스를 삭제하였습니다.

## 뷰어

- 파일: [/src/components/Viewer.tsx](/src/components/Viewer.tsx)
- `resources` 에서 `selectedResourceId` 와 매칭되는 리소스를 `find` 메소드로 찾아 `selectedResource` 가 존재할 때 렌더링을 처리하도록 하였습니다.
  <br />
  `selectedResource.type` 으로 URL 리소스인지, 이미지 리소스인지를 분별하여,
  조건부 렌더링 처리으로 처리하였습니다.
