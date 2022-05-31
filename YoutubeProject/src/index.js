import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCZ7eQnrbHY_85XYtE0mrYUi-14cDP8fAQ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) {
      this.setState({ videos });
    });
  }
  
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>;
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
