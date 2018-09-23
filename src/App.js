import React, {Component} from 'react'

import SearchBar from "./components/SearchBar"
import BlogList from "./components/BlogList"

const link =
"https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      loading:true,
      search: "",
      blogs:[],
      BlogsFiltered:[]
    };
  }
componentDidMount(){
  this.handleGetBlogs();
}

handleTypeSearch = event =>
{
  const BlogsFiltered=this.state.blogs.filter(
    blog=> blog.title.indexOf(event.target.value) >-1
  );

this.setState({BlogsFiltered:BlogsFiltered})
}

handleGetBlogs = () =>
{
  return fetch(link)
  .then (res =>res.json())
  .then (res =>this.setState({blogs:res, BlogsFiltered: res}))
}

  // componentDidMount() {
  //  setTimeout(() => {
  //    this.setState({loading:false})
  //    }, 1000)
  // }
   
    render()
    {
        return(
        //   <h1>loading: {JSON.stringify(this.state.loading)} </h1>
        <div style={{backgroundColour: "#ff5959" , marginLeft: "25%", marginRight: "25%"}}>

        <SearchBar 
        search={this.state.search}
        onChangeSearch={this.handleTypeSearch} />

        {this.state.BlogsFiltered.map(blog => (
        <BlogList 
        key = {blog.id}
        title={blog.title}
        content={blog.content}
        author={blog.author}
        date={blog.created_at} />
        ))}
        
        </div>
                )
    }
}

export default App