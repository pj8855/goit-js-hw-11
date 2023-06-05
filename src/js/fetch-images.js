import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class FetchImages {
  constructor() {
    this.searchParams = {
      key: '37042708-da0a879c1447140a40cb8ee3a',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: 1,
      per_page: 40,
      q: '',
      endOfResults: false,
    };
  };

  async fetch() {
    const response = await axios.get(`/`, {
      params: this.searchParams,
    });

    return await response.data;
  }
  incrementPage() {
    this.searchParams.page += 1;
  }
  resetPage() {
    this.searchParams.page = 1;
  }
  setQuery(q) {
    this.searchParams.q = q;
  }
  getQuery() {
    return this.searchParams.q;
  }
  setEndOfResults(boolean) {
    this.searchParams.endOfResults = boolean;
  }
};