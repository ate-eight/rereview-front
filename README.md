# rereview-front

## 기술 스택

-   next v14 / app router
-   typescript
-   panda css
-   axios
-   zustand
-   tanstack-query v5
-   eslint-plugin-ate
-   storybook
-   husky
-   vitest
-   vercel
-   yarn

## git flow

```
main(master) : 배포 브랜치
develop(개발) : 개발 브랜치
feature(기능) : 각 기능 별 개발 브랜치
```

-   feat -> develop -> main(master)

## 컨벤션

### 커밋

```
feat : 새로운 기능 추가
fix : 버그 수정
refactor : 코드 리펙토링
style : CSS 등 사용자 UI 디자인 변경
chore : 패키지 수정 및 배포 관련
docs : 문서 수정
test : 테스트 코드 ( jest, storybook(UI 테스트) )
```

### 네이밍

**타입스크립트**

```typescript
type TUserRole = 's' | 'ds' | 'd';

interface IUserInfo {
    role: TUserRole;
}
```

-   인터페이스는 I~ 로 작성
-   타입은 T~ 작성

**이벤트 함수**

```javascript
// 홈으로 이동하는 함수
const handleHomeMove = () => {
    /...
}
```

-   handle~
-   handle 이후에 명확하게 어떤 동작을 하는지 작성
-   명확한 동작만 명시된다면 약자 사용 가능

### 컴포넌트

**Props**

```javascript
const Components = ({title, color, size} : Props) => {
    //...
}

const Components = (props : Props) => {
	  const {title, color, size, fullWidth} = props;
    //...
}
```

-   3개 까지는 구조분해 할당
-   4개 부터는 props 변수로 받아 구조분해 할당

### 함수

**useEffect**

```javascript
// 마운트
useEffect(() => {
    // 함수 선언
    const fuc = () => {};
    fuc();
}, []);
```

-   재사용되는 함수는 외부에 선언 후 사용

**함수 인라인**

```javascript
<button onClick=(() => location.href = '/home')>홈으로 이동</button>;
// X

const handleMoveHome = () => (location.href = '/home');

<button onClick={handleMoveHome}>홈으로 이동</button>;
// O
```

-   인라인 함수 작성이 아닌 외부에 함수 선언 후 사용
