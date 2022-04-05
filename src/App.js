import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Profile from "./components/profile";
import Searchbar from './components/searchbar';
import PostList from "./components/posts";
import data from './data/episodes.json';

class App extends React.Component {
  state = {
    section: true,
    posts: [],
  };

  componentDidMount() {
    this.setState({ posts: data && data.episodes });
  }

  onChangeView(valor) {
    this.setState({ section: valor });
  }

  onSearchPosts(valor='') {
    let posts_aux = this.state.posts;
    const filterPosts = (valor, posts_aux) => {
      if (valor.length <= 1) {
        return data && data.episodes;
      }
      else{
        const filterPosts = posts_aux.filter(
          (val_post) =>
            val_post.name.toLowerCase().indexOf(valor.toLowerCase()) !== -1
        );
        return filterPosts;
      }
    };

    this.setState({
      posts: filterPosts(valor, posts_aux),
    });
  }

  render() {
    return (
      <main className="App">
        <Navbar
          view_active={this.state.section}
          onChangeView={(valor) => {
            this.onChangeView(valor);
          }}
        />
        <Profile
          view_active={this.state.section}
          avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          username="profile"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          aspernatur dicta nobis maxime amet quaerat doloribus eligendi
          officiis, eveniet commodi eum architecto? Esse alias odio ab illum
          quod, culpa corporis."
        />
        <div className="container">
          <Searchbar
            view_active={this.state.section}
            onSearch={(valor) => {
              this.onSearchPosts(valor);
            }}
          />
          <PostList view_active={this.state.section} posts={this.state.posts} />
        </div>
      </main>
    );
  }
}

export default App;
