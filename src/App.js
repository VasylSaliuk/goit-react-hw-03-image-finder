import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from './services/pixabayApi';
import PageTitle from './components/PageTitle';
import Loader from './components/Loader';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    largeImage: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  submitHandler = newQuery => {
    this.setState({
      images: [],
      query: newQuery,
      currentPage: 1,
      error: null,
      showModal: false,
    });
  };

  getImages = () => {
    const { currentPage, query, error } = this.state;
    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));

        if (currentPage !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  setLargeImage = image => {
    this.setState({ largeImage: image });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, isLoading, error, largeImage } = this.state;

    return (
      <>
        {error && <h1>Something went wrong</h1>}
        <PageTitle title="React. HomeWork-3.2. Image Finder" />
        <Searchbar onSubmit={this.submitHandler} />
        <ImageGallery images={images} onClick={this.setLargeImage} />
        {isLoading && <Loader />}

        {images.length >= 12 && !isLoading && <Button onLoadMore={this.getImages} />}

        {showModal && <Modal onClose={this.toggleModal} url={largeImage} />}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
