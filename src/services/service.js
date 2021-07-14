class Service {
  _apiBase = 'https://randomuser.me/api/';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    return await res.json();
  };

  getPeople = async page => {
    const res = await this.getResource(`?page=${page}&results=10`);
    return res.results.map(this.transformData);
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
