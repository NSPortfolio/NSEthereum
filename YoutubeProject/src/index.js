import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCZ7eQnrbHY_85XYtE0mrYUi-14cDP8fAQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>;
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
