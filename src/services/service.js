class Service {
  _apiBase = 'https://randomuser.me/api/';
  _galleryApi = 'https://jsonplaceholder.typicode.com/';

  getResource = async url => {
    const res = await fetch(`${url}`);
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    return await res.json();
  };

  getPeople = async page => {
    const res = await this.getResource(
      `${this._apiBase}?page=${page}&results=10`,
    );
    return res.results.map(this.transformData);
  };

  getImages = async page => {
    const res = await this.getResource(
      `${this._galleryApi}photos?_limit=10&_page=${page}`,
    );
    return res;
  };

  transformData = item => {
    return {
      id: item.login.username,
      firstName: item.name.first,
      lastName: item.name.last,
      email: item.email,
      phone: item.phone,
      picture: item.picture.large,
      postcode: item.location.postcode,
      city: item.location.city,
      address: `${item.location.street.name}, ${item.location.street.number}`,
    };
  };
}
export default Service;
