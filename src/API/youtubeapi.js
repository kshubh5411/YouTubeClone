import axios from 'axios';
export default axios.create(
    {
      baseURL:" https://www.googleapis.com/youtube/v3",
      params:
      {
          key:"AIzaSyBLv65vnID6FnSbbC88H1KppErlyVq7nz4"
      }
    }
);