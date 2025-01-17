const SERVER_URL = 'http://192.168.86.65:3000/api/';
const defaultHeaders = {
  'Content-Type': 'application/json',
};

export class HttpWrapper {
  static async get<T>(url: string, headerOptions?: object) {
    try {
      const res = await fetch(SERVER_URL + url, {
        headers: {
          ...headerOptions,
          ...defaultHeaders,
        },
        method: 'GET',
      });

      return (await res.json()) as Promise<T>;
    } catch (e) {
      console.error('Error in GET util');
      throw new Error(e);
    }
  }

  static async post<T>(url: string, body: object, headerOptions?: object) {
    try {
      console.log(SERVER_URL + url);
      console.log('in body', body);
      const res = await fetch(SERVER_URL + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          ...headerOptions,
          ...defaultHeaders,
        },
      });

      return (await res.json()) as Promise<T>;
    } catch (e) {
      console.error('Error in POST util', e);
      throw new Error(e);
    }
  }
}
