# Todo-List

## 프로젝트 소개
이 프로젝트는 **TypeScript**와 **React**를 실험적으로 사용하며 프론트엔드 개발 기술을 연습하기 위해 개발된 Todo-List 애플리케이션입니다. 다국어 지원과 간단한 작업 관리 기능을 통해 사용자 친화적인 애플리케이션 경험을 제공합니다.

## 주요 기능
1. 할 일 추가, 수정, 삭제, 완료 상태 전환
2. **다국어 지원**: 영어, 한국어, 일본어
3. 로컬 스토리지 데이터 지속성을 활용하여 사용자 작업 저장
4. **반응형 UI** 및 접근성(ARIA 속성 적용)

## 기술 스택
- **언어**: TypeScript, JavaScript
- **프레임워크**: React
- **빌드 도구**: Vite
- **상태 관리**: React Hooks (`useState`, 커스텀 훅 `useLocalStorage`)
- **다국어 지원**: `i18next`

## 설치 및 실행
1. 이 저장소를 클론합니다.
   ```bash
   git clone https://github.com/kwanmo7/type-todo
   cd type-todo/todo-app

2. 패키지 설치
   ```bash
   npm install
4. 개발 서버 실행
   ```bash
   npm run dev
　
## 프로젝트 구조
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.tsx         # 새 할 일을 추가하는 폼 컴포넌트
│   │   ├── TodoList.tsx         # Todo 목록을 렌더링
│   │   ├── TodoItem.tsx         # 개별 Todo 항목
│   ├── hooks/
│   │   ├── useLocalStorage.ts   # LocalStorage 상태 관리 커스텀 훅
│   ├── types/
│   │   ├── Todo.ts              # Todo 객체 타입 정의
│   ├── i18n/
│   │   ├── en.json              # 영어 번역 파일
│   │   ├── ko.json              # 한국어 번역 파일
│   │   ├── ja.json              # 일본어 번역 파일
│   │   ├── i18n.ts              # 다국어 지원 설정 파일
│   ├── App.tsx                  # 메인 컴포넌트
│   ├── main.tsx                 # 진입점 파일
├── public/                      # 정적 파일 (아이콘, 이미지 등)
├── package.json                 # 프로젝트 의존성 및 스크립트
├── vite.config.ts               # Vite 설정 파일
└── README.md                    # 프로젝트 설명 파일
