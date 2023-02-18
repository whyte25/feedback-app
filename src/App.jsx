import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
      <Header bgColor="red" textColor="blue" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStat />
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
