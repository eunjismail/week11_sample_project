# OSS Week 11 — React Course Manager (Student Starter)

React + Vite 기반 학생 배포용 Sample Project입니다. **조회와 삭제는 완성**, 등록 및 완료 변경은 학생이 직접 구현하도록 `TODO`로 남겨두었습니다.

# Source Code Exploration
### Project structure
index.html은 하나만 존재하고 /src/main.jsx와 연결되어 있다.
main.jsx는 ./App.jsx와 연결되어 있다. 그리고 해당 파일은 Component인 CourseList.jsx와 연결되어 있다.
CourseList.jsx는 화면의 중간 부분, 즉 현재 상황과 배열을 나타내고 있다. (map방식으로 코드가 짜여 있다)
그리고 현재에서 변화가 생길 때마다 화면을 변경시킨다.
또다른 Component인 CourseItem도 연결이 되어 있는데 해당 파일은 완료 여부를 확인하는 파일이다.
### Component & Props : CourseList와 CourseItem의 관계 및 Props 전달 방식
CourseList는 부모이고 전체적인 과목 데이터를 관리하고 있다. CourseItem은 자식이다. 그리고 각각 과목의 정보를 화면에 표시하는 역할이다. course, onDelete, onToggle을 전달하고 있고, 버튼을 클릭했을 때 부모 component의 함수를 호출하고 있다.
### State & Event: useState를 이용한 상태 관리 및 삭제 버튼의 동작 원리
courses와 newName의 상태가 관리되고 있다. courses는 전체 과목을 배열로 관리한다. newName은 새로운 과목을 입력하는 곳의 관리하고 있다. 삭제버튼은 사용자가 delete버튼을 누르면 onDelete함수가 실행되면서 해당 과목의 ID를 부모 component로 전달한다. 그럼 거기서 handleDelete함수가 실행면서 삭제 확인을 한번 더 하고, 확인을 누르면 filter를 통해 해당 ID를 제외한 새로운 배열을 생성한다. 과목 목록이 변경되면 react가 해당 부분의 화면을 다시 렌더링해서 변경된 내용을 표시하는 것이다. 
### ode Analysis: 주요 코드 2개(각 5~15줄)를 선택하여 동작 원리 설명
첫번째로는, 삭제 기능이다. useState를 통해 목록과 입력받는 것의 값을 관리한다. handleDelete 함수는 삭제할 과목의 ID를 전달받고, 삭제를 확인하면 filter를 통해 해당 ID를 제외하고 새로운 배열을 만든 후 화면을 업데이트 하는 것이다.
두번재로는, 완료 기능이다. 각 과목의 완료 값을 표시하는 체크박스이다. checked={course.completed}를 통해 과목의 완료 상태가 결정된다. 체크박스가 클릭되면 부모 component에 해당 과목의 ID가 전달된다. (onToggle(course.id)를 통해서)


# Customizing
### 과목 추가
- 파일 : courses.js
- 추가 : 오픈소스 스튜디오라는 과목
### 제목 및 설정 변경
- 파일 : App.jsx
- 변경 전 : My Course Manager, React Component, Props & State Practice
- 변경 후 : About My Courses~^^, 2026-2 (2학년 끝...)
### 스타일 변경
- 파일 : App.css
- 변경 전 1 : .hero h1은 color가 존재하지 않았다 -> color: cornflowerblue로 설정
- 변경 전 2 : .btn.primary의 background: #496fd3 -> background: violet로 설정
- 변경 3 : .course-title은 color가 존재하지 않았다 -> color : coral로 설정

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장.

```bash
npm install
npm run dev
```  

브라우저에 표시되는 Local URL에 접속하세요. 빌드 테스트: `npm run build`.

## 소스 구조

- `src/App.jsx`: 페이지 전체 레이아웃
- `src/components/CourseList.jsx`: State 및 목록, 삭제 로직, **TODO 1/2**
- `src/components/CourseItem.jsx`: Props로 데이터를 받고 이벤트 콜백 호출
- `src/data/courses.js`: 초기 과목 데이터
- `src/App.css`: 전체 디자인

## 수행 내용

1. 코드를 실행하고 목록 조회·삭제를 확인합니다.
2. 초기 과목 5개 이상, 제목, CSS 3곳 이상 변경합니다.
3. `CourseList.jsx`의 **TODO 1**: 과목 등록 (빈 값 입력 방지, 고유 id 지정, State 업데이트).
4. `CourseList.jsx`의 **TODO 2**: 완료 체크박스 클릭 시 `completed` 상태 변경.
5. 선택: 검색/필터, 이름 수정 기능 추가.
6. GitHub에 Commit/Push 후 Vercel에 배포합니다.
7. README에 프로젝트 소개, 주요 코드 분석 2개, 변경 내용, Weekly Review, GitHub URL, Vercel URL을 정리합니다.

## 확인할 질문

- `CourseList`와 `CourseItem`의 역할은?
- 왜 `courses`를 직접 수정하지 않고 `setCourses()`를 사용할까요?
- `map()`과 `filter()`는 각각 어떤 목적인가요?
- `course`, `onDelete`, `onToggle` Props는 어디에서 전달되나요?
- 브라우저 새로고침 시 데이터가 초기화되는 이유는? (DB/localStorage 없음)

> 교육 목적의 로컬 State 앱입니다. 서버 API 및 데이터베이스는 사용하지 않습니다.
