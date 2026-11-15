import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div><p className="topline">OPEN SOURCE STUDIO · WEEK 11</p><h1>About My Courses~^^</h1><p className="subtitle">2026-2 (2학년 끝...)</p></div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>OSS Week 11 · React</span><span>Local state only · Refresh resets data</span></footer>
    </main>
  );
}
