import React, { Component } from "react";
import NewItems from "../NewItems/NewItems";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "business",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catrgory: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Zila`;
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    this.props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.progress(30);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(70);
    let dataParser = await data.json();
    this.props.progress(90);
    this.setState({
      article: dataParser.articles,
      totalResults: dataParser.totalResults,
      loading: false,
    });
    this.props.progress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePreviousFunc = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextFunc = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let dataParser = await data.json();
    this.setState({
      article: this.state.article.concat(dataParser.articles),
      totalResults: dataParser.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" ,marginTop:"90px"}}>
          {" "}
          News Zila - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewItems
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {!this.state.loading && (
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePreviousFunc}
              className="btn btn-success"
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextFunc}
              className="btn btn-success"
            >
              Next &rarr;
            </button>
          </div>
        )} */}
      </>
    );
  }
}

export default News;
